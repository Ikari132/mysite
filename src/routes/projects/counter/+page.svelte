<script lang="ts">
	import MetaTagsProvider from '$lib/components/MetaTagsProvider.svelte';
	import ProjectPage from '$lib/components/ProjectPage.svelte';

	import counterInterface from '$lib/images/counter-interface.png';
	import counterTime from '$lib/images/counter-time-is-over.png';
	import counterStatistics from '$lib/images/counter-statistics.png';
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

<ProjectPage
	name="Working time counter"
	description="Extension for tracking working hours"
	--logo-image="url({counterLogo})"
	links={[
		{
			href: 'https://chrome.google.com/webstore/detail/working-time-counter/lakpjellnlajgbedjhejhdbkmphhfolo',
			type: 'Chrome'
		},
		{
			href: 'https://addons.mozilla.org/en-US/firefox/addon/working-time-counter/',
			type: 'Firefox'
		}
	]}
	{versions}
	features={[
		{
			title: "You won't forget to turn it on",
			description: 'It starts automatically when you open your browser',
			image: counterInterface
		},
		{
			title: 'No more overtime',
			description:
				'It will notify you when the working day is over. \nConfigure your working hours in the settings.',
			image: counterTime
		},
		{
			title: 'Improve Your Work-Life Balance',
			description:
				"Find out when you've worked hard enough to take a break, or when you need to work a little more.",
			image: counterStatistics,
			imageShadow: false
		}
	]}
/>
