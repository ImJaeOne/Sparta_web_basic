$(document).ready(function () {
    let url = 'http://spartacodingclub.shop/sparta_api/weather/seoul';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let temp = data.temp;
            $('#degree').text(temp);
        });
});

$('.btn-outline-light')
    .eq(1)
    .on('click', function () {
        $('#postingbox').toggle();
    });

$('.btn-danger')
    .eq(1)
    .on('click', function () {
        let image = $('#image').val();
        let title = $('#title').val();
        let star = $('#star').val();
        let comment = $('#comment').val();
        let temp_html = `
    <div class="col">
                <div class="card h-100">
                    <img src="${image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${star}</p>
                        <p class="card-text">${comment}</p>
                    </div>
                </div>
            </div>`;
        $('#card').append(temp_html);
    });
