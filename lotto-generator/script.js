const generateBtn = document.getElementById('generateButton');
const numbersContent = document.getElementById('numbers');
const recordsContent = document.getElementsByClassName('record-items')[0];
let temp = ``;
let record = [];

generateBtn.addEventListener('click', function () {
    let numbers = generateLottoNumbers();
    numbers.map((num) => ballColor(num));
    numbersContent.innerHTML = temp;
    const currentDate = new Date();
    const recordedDate = recordDate(currentDate);
    record.push({ number: temp, date: recordedDate });
    updateRecord();
});

function generateLottoNumbers() {
    temp = ``;
    let arr = [];
    for (i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 45 + 1);
        while (arr.includes(num)) {
            num = Math.floor(Math.random() * 45 + 1);
        }
        arr.push(num);
    }
    arr = arr.sort((a, b) => a - b);
    return arr;
}

function ballColor(num) {
    let number = Number(num);
    if (number >= 1 && number <= 10) {
        temp += `<div class='yellow ball'>${num}</div>`;
    } else if (number > 10 && number <= 20) {
        temp += `<div class='blue ball'>${num}</div>`;
    } else if (number > 20 && number <= 30) {
        temp += `<div class='red ball'>${num}</div>`;
    } else if (number > 30 && number <= 40) {
        temp += `<div class='black ball'>${num}</div>`;
    } else if (number > 40 && number <= 45) {
        temp += `<div class='green ball'>${num}</div>`;
    }
}

function recordDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function updateRecord() {
    recordsContent.innerHTML = ``;
    record.forEach((a) => {
        recordsContent.innerHTML += `
            <div class="record-item">
                <div class="record-ball">${a.number}</div>
                <div class="record-date">${a.date}</div>
            </div>
        `
    })
}