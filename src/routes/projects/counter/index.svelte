<script lang="ts">
    import MetaTagsProvider from "../../../components/MetaTagsProvider.svelte";
    import ProjectPage from "../../../components/ProjectPage.svelte";
    import { versions } from "./versions";
</script>

<svelte:head>
    <MetaTagsProvider title="Working time counter" description="Extension for tracking working hours" name="wtc" />
</svelte:head>

<ProjectPage
    name="Working time counter"
    description="Extension for tracking working hours"
    --logo-image="url('/counter-logo.png')"
    links={[
        {
            href: "https://chrome.google.com/webstore/detail/working-time-counter/lakpjellnlajgbedjhejhdbkmphhfolo",
            type: "Chrome",
        },
        { href: "https://addons.mozilla.org/en-US/firefox/addon/working-time-counter/", type: "Firefox" },
    ]}
    {versions}
/>
