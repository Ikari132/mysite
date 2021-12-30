<script lang="ts">
    import FaChrome from "svelte-icons/fa/FaChrome.svelte";
    import FaFireFox from "svelte-icons/fa/FaFireFox.svelte";
</script>

<section>
    <div class="row my-5 d-flex flex-sm-row flex-column-reverse">
        <div class="col-sm-6 col-12 d-flex flex-column justify-content-between about">
            <div>
                <h1 class="fw-bold text-sm-start text-center">Working time counter</h1>
                <h5 class="text-sm-start text-center">Extension for tracking working hours</h5>
            </div>

            <div class="row py-3 links-row">
                <div>
                    <h5 class="text-sm-start text-center text-secondary">Available for:</h5>
                </div>
                <div class="col d-flex justify-content-center justify-content-sm-start gap-3">
                    <div class="link">
                        <a
                            class="btn btn-primary button-with-icon"
                            href="https://chrome.google.com/webstore/detail/working-time-counter/lakpjellnlajgbedjhejhdbkmphhfolo"
                            target="_blank"
                        >
                            <div class="icon"><FaChrome /></div>
                            Chrome
                        </a>
                    </div>
                    <div class="link">
                        <a
                            class="btn btn-primary button-with-icon"
                            href="https://addons.mozilla.org/en-US/firefox/addon/working-time-counter/"
                            target="_blank"
                        >
                            <div class="icon"><FaFireFox /></div>
                            FireFox
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end">
            <div class="logo mb-3" />
        </div>
    </div>
</section>

<style>
    .logo {
        --photo-size: 200px;
        width: var(--photo-size);
        height: var(--photo-size);
        background-image: url("/counter-logo.png");
        background-size: 100%;
    }

    .button-with-icon {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .icon {
        width: 16px;
        height: 16px;
        display: inline-flex;
    }

    @media (max-width: 576px) {
        .logo {
            --photo-size: 100px;
        }
    }
</style>
