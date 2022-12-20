<script lang="ts">
	import MetaTagsProvider from '$lib/components/MetaTagsProvider.svelte';
	import WhatsNewPage from '$lib/components/WhatsNewPage.svelte';

	import twityLogo from '$lib/images/twity.png';

	import { versions } from '$lib/versions/twity';
</script>

<svelte:head>
	<MetaTagsProvider title="Twity" description="Extension for deleting Tweets" name="twity" />
</svelte:head>

<WhatsNewPage
	name="Twity"
	description="Extension for deleting Tweets"
	--logo-image="url({twityLogo})"
	{versions}
/>
