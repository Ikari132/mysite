<script lang="ts">
    import MetaTagsProvider from "../../../components/MetaTagsProvider.svelte";
    import WhatsNewPage from "../../../components/WhatsNewPage.svelte";
    import { versions } from "./versions";
</script>

<svelte:head>
    <MetaTagsProvider title="Working time counter" description="Extension for tracking working hours" name="wtc" />
</svelte:head>

<WhatsNewPage
    name="Working time counter"
    description="Extension for tracking working hours"
    --logo-image="url('/counter-logo.png')"
    {versions}
/>
