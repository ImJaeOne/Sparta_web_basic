// 페이지가 로딩되면 자동으로 fetch
$(document).ready(function () {
    let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
            $('#degree').text(mise);
        });
});

$('#remember_btn').on('click', function () {
    $('#postingbox').toggle();
});

$('#record_btn').on('click', function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    let temp_html = `
    <div class="col">
                <div class="card h-100">
                    <img src="${image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${date}</small>
                    </div>
                </div>
            </div>`;
    $('#card').append(temp_html);
});

//우리가 만든 카드는 브라우저에 저장된거기 때문에 새로고침하면 날라감 => 서버의 필요성
