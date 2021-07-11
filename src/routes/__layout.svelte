<script context="module">
</script>

<script lang="ts">
  import "halfmoon/css/halfmoon-variables.min.css";
</script>

<header class="page-header">Anton Aksionau</header>

<main class="container-fluid main">
  <slot />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

  :global(*) {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
  .page-header {
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #000;
    color: #fff;

    font-weight: 700;
    font-size: 2rem;
  }
  .main {
    /* display: flex; */
    /* padding: 10px; */
  }
</style>
