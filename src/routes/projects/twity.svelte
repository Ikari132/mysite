<script lang="ts">
    import ProjectPage from "../../components/ProjectPage.svelte";
</script>

<ProjectPage
    name="Twity"
    description="Extension for deleting Tweets"
    --logo-image="url('/twity.png')"
    links={[
        { href: "https://chrome.google.com/webstore/detail/twity/mnencakcmnofdmpgmklkknklikgpodoo", type: "Chrome" },
    ]}
/>
