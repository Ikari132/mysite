<script lang="ts">
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaTwitterSquare from "svelte-icons/fa/FaTwitterSquare.svelte";
</script>

<section class="content">
  <div class="row">
    <div class="col-6 photo-wrapper">
      <div class="photo" />
    </div>
    <div class="col-6 about">
      <h2 class="about-head">Hello! My name is Anton.</h2>
      <p class="about-body">I'm a web developer.</p>
    </div>
  </div>
  <div class="row text-center">
    <div class="col">
      <h2 class="font-size-24">Contacts</h2>
    </div>
  </div>
  <div class="row">
    <div class="col contacts">
      <div class="contact">
        <a href="https://www.linkedin.com/in/anton-aksionau/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div class="contact">
        <a href="https://twitter.com/AntonAksionau" target="_blank">
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .photo-wrapper {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .photo {
    width: 200px;
    height: 200px;
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    background: #f2f2f2;
  }

  .about-head {
    font-size: 2.4rem;
    font-weight: 700;
  }
  .about-body {
    font-size: 1.6rem;
  }
  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact {
    width: 32px;
    height: 32px;
    margin-left: 10px;
    cursor: pointer;
  }
  .contact:first-child {
    margin-left: 0;
  }
</style>
