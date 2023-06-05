<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";

	import { PROJECTS } from "$lib/projects";
</script>

<svelte:head>
	<MetaTagsProvider />
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<section class="container">
	<div class="row my-5">
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
	</div>
</section>

<style>
	.card img.counter-image {
		background: #323639;
	}
</style>
