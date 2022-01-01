<section class="container">
    <div class="row my-5">
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
    </div>
</section>

<style>
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
</style>
