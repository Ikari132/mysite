<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";
	import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
	import FaTwitterSquare from "svelte-icons/fa/FaTwitterSquare.svelte";
	import FaGithubSquare from "svelte-icons/fa/FaGithubSquare.svelte";
	import FaEnvelopeSquare from "svelte-icons/fa/FaEnvelopeSquare.svelte";
	import CVIcon from "$lib/components/CVIcon.svelte";

	import me from "$lib/images/me.jpg?width=400&height=400&imgtool";
	import meWP from "$lib/images/me.jpg?width=400&height=400&webp&imgtool";

	import { PROJECTS } from "$lib/projects";

	// import { ApiUrl } from "$lib/constants";

	let users = 0;
	// fetch(`${ApiUrl}/stats`)
	//   .then((r) => r.json())
	//   .then((r) => {
	//     users = r.users;
	//   })
	//   .catch((err) => {
	//     console.error(err);
	//   });
</script>

<svelte:head>
	<MetaTagsProvider />
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<section>
	<div class="row my-5 d-flex flex-sm-row flex-column-reverse">
		<div class="col-sm-6 col-12 d-flex flex-column justify-content-between about">
			<div>
				<h1 class="fw-bold text-sm-start mb-3 text-center">Hello! I'm Anton</h1>
				<h5 class="description text-sm-start text-center">
					Self-taught web developer with over 7 years of experience in product development and
					startups
				</h5>
				{#if users}
					<h5 class="text-sm-start text-center">
						<span class="customers">
							{users}
						</span> people already use my products
					</h5>
				{/if}
			</div>

			<div class="row py-3 pb-0 contacts-row">
				<div class="col d-flex justify-content-center justify-content-sm-start gap-2">
					<div class="contact">
						<a href="https://www.linkedin.com/in/anton-aksionau/" target="_blank" rel="noreferrer">
							<FaLinkedin />
						</a>
					</div>
					<div class="contact">
						<a href="https://twitter.com/AntonAksionau" target="_blank" rel="noreferrer">
							<FaTwitterSquare />
						</a>
					</div>
					<div class="contact">
						<a href="https://github.com/Ikari132" target="_blank" rel="noreferrer">
							<FaGithubSquare />
						</a>
					</div>
					<div class="contact">
						<a href="mailto:anton.aksionau@gmail.com">
							<FaEnvelopeSquare />
						</a>
					</div>
					<div class="contact">
						<a
							href="https://drive.google.com/file/d/1-DDB8zOEajuRAVeRdIqVFUV93NSvzss4/view?usp=share_link"
							target="_blank"
							rel="noreferrer"
						>
							<CVIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end">
			<picture class="photo">
				<source srcset={meWP} type="image/webp" />
				<img width="200" height="200" src={me} class="photo card-img-top" alt="me" />
			</picture>
		</div>
	</div>

	<div class="row my-3">
		<h4 class="text-secondary text-sm-start text-center">Projects</h4>
	</div>

	<div class="row mt-3 mb-5">
		{#each PROJECTS as project (project.name)}
			<div class="col-sm-6 col-12 mb-3">
				<div class="card">
					<picture>
						<source srcset={project.logo.webp} type="image/webp" />
						<img
							width="470"
							height="160"
							src={project.logo.png}
							class="card-img-top counter-image"
							alt="project-logo"
						/>
					</picture>
					<div class="card-body">
						<h3 class="fw-bold">{project.title}</h3>
						<h6>{project.description}</h6>
						<a href={project.internalLink} class="stretched-link" />
					</div>
				</div>
			</div>
		{/each}

		<div class="col-12 mt-3 d-flex justify-content-center">
			<a href="/projects">Show more</a>
		</div>
	</div>
</section>

<style>
	.photo {
		--photo-size: 200px;
		width: var(--photo-size);
		height: var(--photo-size);
		border-radius: 16px;
		box-shadow: 0 1px 4px 0 #0000003d;
		background: #f2f2f2;
		background-size: 100%;

		-webkit-user-drag: none;
		pointer-events: none;
		user-select: none;
	}
	.description {
		line-height: 1.3;
	}

	.contact {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}

	.card {
		box-shadow: 0 1px 4px 0 #0000003d;
		border: none;
		border-radius: 8px;
		overflow: hidden;

		height: 100%;

		cursor: pointer;
		transition: box-shadow ease-out 0.2s;
	}

	.card:hover {
		box-shadow: 0 1px 16px 0 #0000003d;
	}
	.card img {
		max-height: 160px;
		width: 100%;
		object-fit: contain;
		background: var(--color-gray-100);
		padding: 10px;
	}
	.card img.counter-image {
		background: #323639;
	}

	.customers {
		color: var(--color-primary-600);
		font-weight: bold;
	}

	@media (max-width: 576px) {
		.photo {
			--photo-size: 160px;
		}
	}
</style>
