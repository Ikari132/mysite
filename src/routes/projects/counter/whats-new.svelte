<script lang="ts">
    import WhatsNewPage from "../../../components/WhatsNewPage.svelte";
    import { versions } from "./versions";
</script>

<WhatsNewPage
    name="Working time counter"
    description="Extension for tracking working hours"
    --logo-image="url('/counter-logo.png')"
    {versions}
/>
