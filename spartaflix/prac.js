const resultBtn = document.getElementsByClassName('button-part')[0];

let fruits = ['사과', '배', '감', '귤', '수박'];
let people = [
    { name: '서영', age: 24 },
    { name: '현아', age: 30 },
    { name: '영환', age: 12 },
    { name: '서연', age: 15 },
    { name: '지용', age: 18 },
    { name: '예지', age: 36 },
];

resultBtn.addEventListener('click', function () {
    $('#q1').empty();

    fruits.forEach((a) => {
        let temp_html = `<p>${a}</p>`;
        $('#q1').append(temp_html);
    });
});

resultBtn.addEventListener('click', function () {
    $('#q2').empty();

    people.forEach((a) => {
        let { name, age } = a;
        let temp_html = `<p>${name}는 ${age}살입니다.</p>`;
        $('#q2').append(temp_html);
    });
});
