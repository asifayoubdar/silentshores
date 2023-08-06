$(document).ready(function () {
    $('.destination-cards .card.trending').each(function () {
        $(this).prepend(`<div class="card-badge">
                            <p>Trending</p>
                        </div>`);
    });
});