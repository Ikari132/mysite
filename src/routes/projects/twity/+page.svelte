<script lang="ts">
	import MetaTagsProvider from '$lib/components/MetaTagsProvider.svelte';
	import ProjectPage from '$lib/components/ProjectPage.svelte';

	import twityPostNumber from '$lib/images/twity-posts-number.png';
	import twityOpenProfile from '$lib/images/twity-open-profile.png';
	import twityLogo from '$lib/images/twity.png';

	import { versions } from '$lib/versions/twity';
</script>

<svelte:head>
	<MetaTagsProvider title="Twity" description="Extension for deleting Tweets" name="twity" />
</svelte:head>

<ProjectPage
	name="Twity"
	description="Extension for deleting Tweets"
	--logo-image="url({twityLogo})"
	links={[
		{
			href: 'https://chrome.google.com/webstore/detail/twity/mnencakcmnofdmpgmklkknklikgpodoo',
			type: 'Chrome'
		}
	]}
	{versions}
	features={[
		{
			title: 'Delete your Tweets in a few clicks',
			description: 'It deletes Tweets from the most recent to earlier ones',
			image: twityPostNumber
		},
		{
			title: 'No permissions are needed',
			description: 'All our extension does is click buttons for you',
			image: twityOpenProfile
		}
	]}
/>
