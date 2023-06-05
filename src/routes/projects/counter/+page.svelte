<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";
	import ProjectPage from "$lib/components/ProjectPage.svelte";

	import { wtc } from "$lib/projects/wtc";

	const { name, title, description, links, features, versions, logo } = wtc;
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
