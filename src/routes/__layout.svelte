<script context="module">
</script>

<script lang="ts">
  import { page } from "$app/stores";

  $: paths = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "CV",
      href: "https://docs.google.com/document/d/1VNF5UTknfN__9SaHCr5qDTtTsm4bI0j9SMEX-txNVEI/edit?usp=sharing",
      external: true,
    },
  ];
</script>

<div class="page-wrapper with-navbar">
  <!-- justify-content-between -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="/" class="navbar-brand"> Anton Aksionau </a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button> -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {#each paths as path (path.href)}
            <li class="nav-item">
              <a
                href={path.href}
                class="nav-link"
                class:active={$page.path.includes(path.href)}
                target={path.external ? "_blank" : "_self"}>{path.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar">
    <a href="/" class="navbar-brand"> Anton Aksionau </a>
    <ul class="navbar-nav d-none d-md-flex">
      {#each paths as path (path.href)}
        <li class="nav-item" class:active={$page.path.includes(path.href)}>
          <a href={path.href} class="nav-link">{path.label}</a>
        </li>
      {/each}
    </ul>
  </nav> -->
  <main class="container-fluid">
    <slot />
  </main>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
  /* @import "halfmoon/css/halfmoon-variables.min.css"; */
  @import "bootstrap/dist/css/bootstrap.min.css";
  :global(*) {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
  .navbar-brand {
    font-weight: 700;
  }
  .navbar {
    /* background: #000; */
    /* color: #fff; */
  }
  /* .page-header {
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #000;
    color: #fff;

    font-weight: 700;
    font-size: 2rem;
  } */
</style>
