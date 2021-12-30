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

<section>
    <div class="row my-5 d-flex flex-sm-row flex-column-reverse">
        <div class="col-sm-6 col-12 d-flex flex-column justify-content-between about">
            <div>
                <h1 class="fw-bold text-sm-start text-center">Hello! I'm Anton.</h1>
                <h5 class="text-sm-start text-center">Web developer</h5>
                <h5 class="text-sm-start text-center">Entrepreneur</h5>
                <h5 class="text-sm-start text-center">
                    <span class="customers">
                        {#if users}
                            {users}
                        {:else}
                            ---
                        {/if}
                    </span> people already use my products
                </h5>
            </div>

            <div class="row py-3 contacts-row">
                <div class="col d-flex justify-content-center justify-content-sm-start gap-2">
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
        </div>
        <div class="col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end">
            <div class="photo mb-3" />
        </div>
    </div>

    <div class="row my-3">
        <h4 class="text-secondary text-sm-start text-center">Projects</h4>
    </div>

    <div class="row mt-3 mb-5">
        <div class="col-sm-6 col-12 mb-3">
            <div class="card">
                <img src="/twity.png" class="card-img-top" alt="twity-logo" />
                <div class="card-body">
                    <h3 class="fw-bold">Twity</h3>
                    <h6>Extension for deleting Tweets</h6>
                    <a href="/projects/twity" class="stretched-link" />
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-12 mb-3">
            <div class="card">
                <img src="/counter.png" class="card-img-top counter-image" alt="counter-logo" />
                <div class="card-body">
                    <h3 class="fw-bold">Working time counter</h3>
                    <h6>Extension for tracking working hours</h6>
                    <a href="/projects/counter" class="stretched-link" />
                </div>
            </div>
        </div>
        <div class="col-12 mt-3 d-flex justify-content-center">
            <a href="/projects">Show more</a>
        </div>
    </div>
</section>

<style>
    .photo {
        --photo-size: 200px;
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: 16px;
        box-shadow: 0 1px 4px 0 #0000003d;
        background: #f2f2f2;
        background-image: url("/me.jpg");
        background-size: 100%;
    }

    .contact {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .card {
        box-shadow: 0 1px 4px 0 #0000003d;
        border: none;
        border-radius: 8px;
        overflow: hidden;

        height: 100%;

        cursor: pointer;
        transition: box-shadow ease-out 0.2s;
    }

    .card:hover {
        box-shadow: 0 1px 16px 0 #0000003d;
    }
    .card img {
        max-height: 160px;
        width: 100%;
        object-fit: contain;
        background: var(--color-gray-100);
        padding: 10px;
    }
    .card img.counter-image {
        background: #323639;
    }

    .customers {
        color: var(--color-primary-600);
        font-weight: bold;
    }

    @media (max-width: 576px) {
        .photo {
            --photo-size: 160px;
        }
    }
</style>
