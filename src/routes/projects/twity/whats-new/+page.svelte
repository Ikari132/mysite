<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";
	import WhatsNewPage from "$lib/components/WhatsNewPage.svelte";

	import { twity } from "$lib/projects/twity";
	const { name, title, description, versions, logo } = twity;
</script>

<svelte:head>
	<MetaTagsProvider {title} {description} {name} />
</svelte:head>

<WhatsNewPage name={title} {description} --logo-image="url({logo.png})" {versions} />
