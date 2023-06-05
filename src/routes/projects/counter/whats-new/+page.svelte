<script lang="ts">
	import MetaTagsProvider from "$lib/components/MetaTagsProvider.svelte";
	import WhatsNewPage from "$lib/components/WhatsNewPage.svelte";

	import { wtc } from "$lib/projects/wtc";
	const { name, title, description, versions, logo } = wtc;
</script>

<svelte:head>
	<MetaTagsProvider {title} {description} {name} />
</svelte:head>

<WhatsNewPage name={title} {description} --logo-image="url({logo.png})" {versions} />
