<script context="module">
</script>

<script lang="ts">
  import "halfmoon/css/halfmoon-variables.min.css";
</script>

<header class="page-header">Anton Aksionau</header>

<main class="main">Hi</main>
<button class="btn btn-primary">Button</button>
<div class="custom-switch">
  <input type="checkbox" id="switch-1" value="" />
  <label for="switch-1">Switch 1</label>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .page-header {
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #000;
    color: #fff;
  }
  .main {
    display: flex;
    padding: 10px;
  }
</style>
