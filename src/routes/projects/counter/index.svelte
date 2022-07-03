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
    features={[
        {
            title: "You won't forget to turn it on",
            description: "It starts automatically when you open your browser",
            image: "/counter-interface.png",
        },
        {
            title: "No more overtime",
            description:
                "It will notify you when the working day is over. \nConfigure your working hours in the settings.",
            image: "/counter-time-is-over.png",
        },
        {
            title: "Improve Your Work-Life Balance",
            description:
                "Find out when you've worked hard enough to take a break, or when you need to work a little more.",
            image: "/counter-statistics.png",
            imageShadow: false,
        },
    ]}
/>
