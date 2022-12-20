<script lang="ts">
	import MetaTagsProvider from '$lib/components/MetaTagsProvider.svelte';
	import WhatsNewPage from '$lib/components/WhatsNewPage.svelte';

	import counterLogo from '$lib/images/counter-logo.png';

	import { versions } from '$lib/versions/counter';
</script>

<svelte:head>
	<MetaTagsProvider
		title="Working time counter"
		description="Extension for tracking working hours"
		name="wtc"
	/>
</svelte:head>

<WhatsNewPage
	name="Working time counter"
	description="Extension for tracking working hours"
	--logo-image="url({counterLogo})"
	{versions}
/>
