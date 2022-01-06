<script lang="ts">
    import ProjectPage from "../../../components/ProjectPage.svelte";
    import { versions } from "./versions";
</script>

<svelte:head>
	<meta property="og:title" content="Twity" />
    <meta property="og:description" content="Extension for deleting Tweets" />
    <meta property="og:url" content="https://www.aksionau.com/projects/twity" />
    <meta property="og:image" content="https://www.aksionau.com/twity.png" />
    <meta property="og:site_name" content="Anton Aksionau - Web developer" />
</svelte:head>

<ProjectPage
    name="Twity"
    description="Extension for deleting Tweets"
    --logo-image="url('/twity.png')"
    links={[
        { href: "https://chrome.google.com/webstore/detail/twity/mnencakcmnofdmpgmklkknklikgpodoo", type: "Chrome" },
    ]}
    {versions}
/>
