<script lang="ts">
	import QRCode from "qrcode";
	import { tick } from "svelte";

	let src = "";
	let text = "";
	let centerImage = "";

	const frontColor = "#1e293b";
	const backgroundColor = "#f8fafc";

	function roundedRect(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		radius: number
	) {
		ctx.beginPath();
		ctx.moveTo(x, y + radius);
		ctx.arcTo(x, y + height, x + radius, y + height, radius);
		ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
		ctx.arcTo(x + width, y, x + width - radius, y, radius);
		ctx.arcTo(x, y, x, y + radius, radius);
		ctx.fillStyle = backgroundColor;
		ctx.fill();
	}

	async function create(dataForQRcode: string, centerImage: string, width: number, cwidth: number) {
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = width;

		QRCode.toCanvas(canvas, dataForQRcode, {
			errorCorrectionLevel: "H",
			margin: 1,
			color: {
				dark: frontColor,
				light: backgroundColor
			},
			width
		});

		if (centerImage) {
			const ctx = canvas.getContext("2d");

			if (!ctx) return;

			const img = new Image();
			img.width = cwidth;
			img.height = cwidth;
			img.style.borderRadius = "16px";

			img.src = centerImage;
			await tick();

			const center = (width - cwidth) / 2;
			roundedRect(ctx, center - 5, center - 5, cwidth + 10, cwidth + 10, 10);

			roundedRect(ctx, center, center, cwidth, cwidth, 10);
			ctx.clip();
			ctx.drawImage(img, center, center, cwidth, cwidth);
			ctx.restore();
		}

		return canvas.toDataURL("image/png");
	}

	async function generate() {
		const qrCode = await create(text, centerImage, 200, 50);
		if (qrCode) {
			src = qrCode;
		}
	}

	function handleFile(e: any) {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			if (reader.result) {
				centerImage = reader.result as string;
			}
		};
	}
</script>

<section class="mt-5">
	<h1 class="mb-5">QR code generator</h1>
	<label>
		<div class="mb-2">QR code text</div>
		<textarea class="form-control" bind:value={text} />
	</label>
	<label>
		<div class="mb-2">Center image</div>
		<input class="form-control" type="file" on:change={handleFile} />
	</label>

	<button class="btn btn-primary" on:click={generate}>Generate</button>
</section>

{#if src}
	<div class="d-flex justify-content-center mt-5">
		<img {src} alt="" width="200" height="200" />
	</div>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
