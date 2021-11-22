<script lang="ts">
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaTwitterSquare from "svelte-icons/fa/FaTwitterSquare.svelte";
  // import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

  let users = 0;
  fetch("https://stats.snailty.com/stats")
    .then((r) => r.json())
    .then((r) => {
      users = r.users;
    });
</script>

<section class="container">
  <div class="row my-5">
    <div class="col-md-6 col-sm-12 photo-wrapper">
      <div class="photo" />
    </div>
    <div class="col-md-6 col-sm-12 about">
      <h2 class="about-head">Hello! My name is Anton</h2>
      <h5 class="about-body">
        I'm a web developer. I have over 5 years of experience. I've dealt with
        both product development and startups.
      </h5>
      <h5 class="about-body">
        <span class="customers">
          {#if users}
            {users}
          {:else}
            ---
          {/if}
        </span> people already use my products
      </h5>

      <div class="row my-5 py-3 contacts-row">
        <div class="col-12 pb-2">
          <h5>Contacts:</h5>
        </div>
        <div class="col contacts">
          <div class="contact">
            <a
              href="https://www.linkedin.com/in/anton-aksionau/"
              target="_blank"
            >
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
    </div>
  </div>

  <!-- <div class="row my-5 justify-content-center">
    <div class="col-md-4 col-sm-12">
      <a href="/projects" class="card-link">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-4">
              <img
                src="projects-bg.jpg"
                class="img-fluid"
                alt="Projects background"
              />
            </div>
            <div class="col-8 card-content">
              <div class="card-body">
                <h5 class="card-title">My projects</h5>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4 col-sm-12">
      <a href="/blog" class="card-link">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-4">
              <img src="blog-bg.jpg" class="img-fluid" alt="Blog background" />
            </div>
            <div class="col-8 card-content">
              <div class="card-body">
                <h5 class="card-title">My blog</h5>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div> -->
</section>

<style>
  .photo-wrapper {
    justify-content: center;
    /* align-items: center; */
    display: flex;
  }
  .photo {
    --photo-size: 200px;
    width: var(--photo-size);
    height: var(--photo-size);
    /* max-width: 200px;
    max-height: 200px; */

    /* border-radius: 50%; */
    border-radius: 25px;
    box-shadow: 0px 0px 20px rgb(11 17 52 / 10%);

    background: #f2f2f2;
    background-image: url("/me.jpg");
    background-size: 100%;
  }

  .about-head {
    /* font-size: 2.4rem; */
    font-weight: 700;
  }
  .about-body {
    /* font-size: 1.6rem; */
  }
  .contacts {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .contacts-row {
    /* background: #f2f2f2; */
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
  .card-link {
    text-decoration: none;
    color: #212529;
  }
  .card {
    box-shadow: 0px 0px 20px rgb(11 17 52 / 10%);
    border: none;
    border-radius: 25px;
    overflow: hidden;
  }
  .card img {
    border-radius: 25px;
  }
  .card-content {
    display: flex;
    align-items: center;
  }
  /* .card-img-top {
    max-height: 150px;
  } */

  .customers {
    font-size: 1rem;
    font-weight: 700;
  }
</style>
