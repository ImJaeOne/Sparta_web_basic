$('#updateBtn').on('click', function () {
    let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
    $('#names-q1').empty();
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.RealtimeCityAir.row.forEach((a) => {
                let temp_html = ``;
                if (a.IDEX_MVL > 40) {
                    temp_html = `<li class='bad'>${a.MSRSTE_NM} : ${a.IDEX_MVL}</li>`;
                } else {
                    temp_html = `<li>${a.MSRSTE_NM} : ${a.IDEX_MVL}</li>`;
                }
                $('#names-q1').append(temp_html);
            });
        });
});
