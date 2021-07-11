<script context="module">
</script>

<script lang="ts">
  // import "halfmoon/css/halfmoon-variables.min.css";
</script>

<div class="page-wrapper with-navbar">
  <nav class="navbar">
    <a href="/" class="navbar-brand"> Anton Aksionau </a>
    <ul class="navbar-nav d-none d-md-flex">
      <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
      <li class="nav-item active">
        <a href="/blog" class="nav-link">Blog</a>
      </li>
      <li class="nav-item">
        <a href="/projects" class="nav-link">Projects</a>
      </li>
    </ul>
  </nav>
  <!-- <header class="page-header"></header> -->

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
    background: #000;
    color: #fff;
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
