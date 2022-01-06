<script lang="ts">
    import MetaTagsProvider from "../../../components/MetaTagsProvider.svelte";
    import WhatsNewPage from "../../../components/WhatsNewPage.svelte";
    import { versions } from "./versions";
</script>

<svelte:head>
    <MetaTagsProvider title="Twity" description="Extension for deleting Tweets" name="twity" />
</svelte:head>

<WhatsNewPage name="Twity" description="Extension for deleting Tweets" --logo-image="url('/twity.png')" {versions} />
