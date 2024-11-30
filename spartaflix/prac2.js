$('#fetchBtn').on('click', function () {
    let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.RealtimeCityAir.row.forEach((a) =>
                console.log(a.MSRSTE_NM, a.IDEX_NM)
            );
        });
});
