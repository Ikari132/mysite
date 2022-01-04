<script lang="ts">
    import ProjectPage from "../../components/ProjectPage.svelte";
</script>

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
/>
