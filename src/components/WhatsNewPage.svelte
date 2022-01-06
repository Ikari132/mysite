<script lang="ts">
    import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";
    import FaLink from "svelte-icons/fa/FaLink.svelte";
    import { page } from "$app/stores";

    export let name: string;
    export let description: string;
    export let versions: { version: string; date?: string; changes: { title: string; description: string }[] }[];
</script>

<section>
    <div class="row my-5 justify-content-between position-relative">
        <div class="col d-flex gap-3 gap-sm-4 align-items-start align-items-sm-center ">
            <div class="logo" />
            <div>
                <h3 class="fw-bold">
                    {name}
                    <a
                        class="icon product-link d-sm-none stretched-link"
                        href={$page.url.pathname.substring(0, $page.url.pathname.length - "/whats-new".length)}
                    >
                        <FaLink />
                    </a>
                </h3>
                <h6 class="m-0">{description}</h6>
            </div>
        </div>
        <div class="col-auto d-sm-flex align-items-center d-none">
            <!-- TODO: move paths to constants -->
            <a
                class="btn btn-primary button-with-icon stretched-link"
                href={$page.url.pathname.substring(0, $page.url.pathname.length - "/whats-new".length)}
            >
                Learn more
                <div class="icon"><FaArrowRight /></div>
            </a>
        </div>
    </div>

    <div class="row mt-3">
        <h2 class="fw-bold mb-4">What's new</h2>
        {#each versions as version}
            <div class="mb-2">
                <h5>
                    <span class="fw-bold">{"v " + version.version}</span>
                    <!-- TODO: add actual dates -->
                    <span class="h6 text-secondary text-black-50">{version.date || "01.01.2021"}</span>
                </h5>
                <ul>
                    {#each version.changes as change}
                        <li class="description-list-item">{change.description}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>

<style>
    .logo {
        --logo-size: 76px;
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

    .product-link {
        color: var(--color-primary-600);
    }

    .description-list-item {
        font-size: 18px;
        line-height: 30px;
    }

    @media (max-width: 576px) {
        .logo {
            --logo-size: 56px;
        }
    }
</style>
