<script lang="ts">
	import MetaTagsProvider from '$lib/components/MetaTagsProvider.svelte';

	import twity from '$lib/images/twity.png';
	import counter from '$lib/images/counter.png';
</script>

<svelte:head>
	<MetaTagsProvider />
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<section class="container">
	<div class="row my-5">
		<div class="col-sm-6 col-12 mb-3">
			<div class="card">
				<img src={twity} class="card-img-top" alt="twity-logo" />
				<div class="card-body">
					<h3 class="fw-bold">Twity</h3>
					<h6>Extension for deleting Tweets</h6>
					<a href="/projects/twity" class="stretched-link" />
				</div>
			</div>
		</div>
		<div class="col-sm-6 col-12 mb-3">
			<div class="card">
				<img src={counter} class="card-img-top counter-image" alt="counter-logo" />
				<div class="card-body">
					<h3 class="fw-bold">Working time counter</h3>
					<h6>Extension for tracking working hours</h6>
					<a href="/projects/counter" class="stretched-link" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.card img.counter-image {
		background: #323639;
	}
</style>
