<script lang="ts">
    import WhatsNewPage from "../../../components/WhatsNewPage.svelte";
    import { versions } from "./versions";
</script>

<WhatsNewPage name="Twity" description="Extension for deleting Tweets" --logo-image="url('/twity.png')" {versions} />
