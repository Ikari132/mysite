<script context="module">
</script>

<script lang="ts">
    import { page } from "$app/stores";
    import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";

    $: paths = [
        {
            label: "Home",
            href: "/",
            root: true,
        },
        {
            label: "Projects",
            href: "/projects",
            external: false,
        },
        // {
        //     label: "CV",
        //     href: "https://docs.google.com/document/d/1VNF5UTknfN__9SaHCr5qDTtTsm4bI0j9SMEX-txNVEI/edit?usp=sharing",
        //     external: true,
        // },
    ];
</script>

<div class="page-wrapper with-navbar d-flex flex-column">
    <nav class="navbar navbar-expand navbar-light bg-transparent">
        <div class="container-fluid">
            <div class="custom-content col-12 col-sm-11 col-md-10 col-xl-8 mx-auto">
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <a href="/" class="navbar-brand"> Anton Aksionau </a>
                    </div>
                    <div class="col">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                {#each paths as path (path.href)}
                                    <li class="nav-item">
                                        <a
                                            href={path.href}
                                            class="nav-link"
                                            class:active={path.root
                                                ? $page.url.pathname === "" || $page.url.pathname === "/"
                                                : $page.url.pathname.includes(path.href)}
                                            target={path.external ? "_blank" : "_self"}
                                        >
                                            {path.label}
                                            {#if path?.external}
                                                <div class="nav-icon">
                                                    <FaExternalLinkAlt />
                                                </div>
                                            {/if}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <main class="container-fluid">
        <div class="custom-content col-12 col-sm-11 col-md-10 col-xl-8 mx-auto">
            <slot />
        </div>
    </main>
    <footer class="container-fluid mt-auto">
        <div class="text-secondary text-center p-3">Copyright © {new Date().getFullYear()} Anton Aksionau</div>
    </footer>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
    /* @import "halfmoon/css/halfmoon-variables.min.css"; */
    @import "bootstrap/dist/css/bootstrap.min.css";
    :global(*) {
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
    }

    :root {
        --color-primary-50: hsl(250, 100%, 98%);
        --color-primary-100: hsl(251, 91%, 95%);
        --color-primary-200: hsl(251, 95%, 92%);
        --color-primary-300: hsl(252, 95%, 85%);
        --color-primary-400: hsl(255, 92%, 76%);
        --color-primary-500: hsl(258, 90%, 66%);
        --color-primary-600: hsl(262, 83%, 58%);
        --color-primary-700: hsl(263, 70%, 50%);
        --color-primary-800: hsl(263, 69%, 42%);
        --color-primary-900: hsl(264, 67%, 35%);

        --color-gray-50: hsl(0, 0%, 98%);
        --color-gray-100: hsl(0, 0%, 96%);
        --color-gray-200: hsl(0, 0%, 90%);
        --color-gray-300: hsl(0, 0%, 83%);
        --color-gray-400: hsl(0, 0%, 64%);
        --color-gray-500: hsl(0, 0%, 45%);
        --color-gray-600: hsl(0, 0%, 32%);
        --color-gray-700: hsl(0, 0%, 25%);
        --color-gray-800: hsl(0, 0%, 15%);
        --color-gray-900: hsl(0, 0%, 9%);
    }

    :global(a) {
        color: var(--color-gray-500);
    }

    :global(a:hover) {
        color: var(--color-primary-600);
    }

    :global(.btn-primary) {
        background-color: var(--color-primary-600);
        border-color: var(--color-primary-600);
    }
    :global(.btn-primary:hover) {
        background-color: var(--color-primary-700);
        border-color: var(--color-primary-700);
    }
    :global(.btn-check:focus + .btn-primary) {
        background-color: var(--color-primary-700);
        border-color: var(--color-primary-700);
        box-shadow: 0 0 0 0.25rem var(--color-primary-300);
    }
    :global(.btn-primary:focus) {
        color: #fff;
        background-color: var(--color-primary-700);
        border-color: var(--color-primary-700);
        box-shadow: 0 0 0 0.25rem var(--color-primary-300);
    }
    :global(.btn-primary:active) {
        background-color: var(--color-primary-800);
        border-color: var(--color-primary-800);
    }
    :global(.btn-primary.active) {
        background-color: var(--color-primary-800);
        border-color: var(--color-primary-800);
    }
    :global(.btn-primary:active:focus) {
        box-shadow: 0 0 0 0.25rem var(--color-primary-300);
    }
    :global(.btn-primary.active:focus) {
        box-shadow: 0 0 0 0.25rem var(--color-primary-300);
    }
    /* .btn-primary:disabled,
    .btn-primary.disabled {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    } */

    :global(.card) {
        box-shadow: 0 1px 4px 0 #0000003d;
        border: none;
        border-radius: 8px;
        overflow: hidden;
        height: 100%;
        cursor: pointer;
        transition: box-shadow ease-out 0.2s;
    }

    :global(.card:hover) {
        box-shadow: 0 1px 16px 0 #0000003d;
    }

    :global(.card img) {
        max-height: 160px;
        width: 100%;
        object-fit: contain;
        background: var(--color-gray-100);
        padding: 10px;
    }

    :global(ul) {
        list-style: none;
    }

    :global(ul:not(.navbar-nav) li::before) {
        content: "\2022";
        color: var(--color-primary-600);
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }

    :global(html) {
        height: 100%;
    }

    :global(body) {
        background: var(--color-gray-50);
        min-height: 100%;
        height: 100%;
    }

    :global(#svelte) {
        min-height: 100%;
        height: 100%;
    }

    .page-wrapper {
        min-height: 100%;
        height: 100%;
    }

    .custom-content {
        max-width: 964px;
    }

    .navbar-brand {
        font-weight: 700;
    }
    .nav-link {
        display: flex;
        align-items: center;
    }
    .nav-icon {
        height: 16px;
        width: 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0 5px;
    }

    .navbar-light .navbar-nav .nav-link.active {
        color: var(--color-primary-600);
        font-weight: bold;
    }
    .navbar-light .navbar-nav .nav-link:focus,
    .navbar-light .navbar-nav .nav-link:hover {
        color: var(--color-primary-600);
    }
</style>
