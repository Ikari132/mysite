<script lang="ts">
    import FaChrome from "svelte-icons/fa/FaChrome.svelte";
    import FaFirefox from "svelte-icons/fa/FaFirefox.svelte";
    import FaSafari from "svelte-icons/fa/FaSafari.svelte";
    import { page } from "$app/stores";

    export let name: string;
    export let description: string;
    export let links: { href: string; type: "Chrome" | "Firefox" | "Safari" }[];
    export let versions: { version: string; date?: string; changes: { title: string; description: string }[] }[];
</script>

<section>
    <div class="row my-5 d-flex flex-sm-row flex-column-reverse">
        <div class="col-sm-6 col-12 d-flex flex-column justify-content-between about">
            <div>
                <h1 class="fw-bold text-sm-start text-center">{name}</h1>
                <h5 class="text-sm-start text-center">{description}</h5>
            </div>

            <div class="row py-3 links-row">
                <div>
                    <h5 class="text-sm-start text-center text-secondary pb-2">Available for:</h5>
                </div>
                <div class="col d-flex justify-content-center justify-content-sm-start gap-3">
                    {#each links as link}
                        <div class="link">
                            <a class="btn btn-primary button-with-icon" href={link.href} target="_blank">
                                {#if link.type === "Chrome"}
                                    <div class="icon"><FaChrome /></div>
                                    Chrome
                                {:else if link.type === "Firefox"}
                                    <div class="icon"><FaFirefox /></div>
                                    Firefox
                                {:else if link.type === "Safari"}
                                    <div class="icon"><FaSafari /></div>
                                    Safari
                                {/if}
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end">
            <div class="logo mb-3" />
        </div>
    </div>

    <div class="row mt-3 mb-5">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h3 class="fw-bold">What's new in v {versions[0].version}</h3>
                    <ul>
                        {#each versions[0].changes as change}
                            <li>{change.description}</li>
                        {/each}
                    </ul>
                    <div class="d-flex justify-content-center">
                        <a href="{$page.url.pathname}/whats-new" class="stretched-link">See all versions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .logo {
        --logo-size: 200px;
        width: var(--logo-size);
        min-width: var(--logo-size);
        height: var(--logo-size);
        min-height: var(--logo-size);
        background-image: var(--logo-image);
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .button-with-icon {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .icon {
        width: 16px;
        height: 16px;
        display: inline-flex;
    }

    @media (max-width: 576px) {
        .logo {
            --logo-size: 100px;
        }
    }
</style>
