<script lang="ts">
  export let img = "";
  export let imgAlt = "";
  export let title = "";
</script>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid" alt={imgAlt} />
    </div>
    <div class="col-8 card-content">
      <div class="card-body">
        <!-- <h3>My blog</h3> -->
        <h5 class="card-title">{title}</h5>
      </div>
    </div>
  </div>
</div>
