<script context="module">
</script>

<script lang="ts">
  import { page } from "$app/stores";

  $: console.log($page);
  $: paths = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ];
</script>

<div class="page-wrapper with-navbar">
  <!-- justify-content-between -->
  <nav class="navbar">
    <a href="/" class="navbar-brand"> Anton Aksionau </a>
    <ul class="navbar-nav d-none d-md-flex">
      {#each paths as path (path.href)}
        <li class="nav-item" class:active={$page.path.includes(path.href)}>
          <a href={path.href} class="nav-link">{path.label}</a>
        </li>
      {/each}
      <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
    </ul>
  </nav>
  <main class="content-wrapper">
    <slot />
  </main>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
  @import "halfmoon/css/halfmoon-variables.min.css";
  :global(*) {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
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
