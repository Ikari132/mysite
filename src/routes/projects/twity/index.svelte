<script lang="ts">
    import MetaTagsProvider from "../../../components/MetaTagsProvider.svelte";
    import ProjectPage from "../../../components/ProjectPage.svelte";
    import { versions } from "./versions";
</script>

<svelte:head>
    <MetaTagsProvider title="Twity" description="Extension for deleting Tweets" name="twity"/>
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
