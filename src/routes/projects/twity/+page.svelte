<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";
	import ProjectPage from "$lib/components/ProjectPage.svelte";

	import { twity } from "$lib/projects/twity";

	const { name, title, description, links, features, versions, logo } = twity;
</script>

<svelte:head>
	<MetaTagsProvider {title} {description} {name} />
</svelte:head>

<ProjectPage
	name={title}
	{description}
	{links}
	{versions}
	{features}
	--logo-image={`url(${logo.png})`}
/>
