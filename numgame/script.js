let answer = 0;
let time = 0;
let flag = false;
let record = [];
let correct = true;

function recordDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function timeStart() {
    const interval = setInterval(() => {
        time++;
        if (flag) {
            clearInterval(interval);
            flag = false;
        } else if (time <= 3) {
            $('#result').text(`${4 - time}초 후에 사라집니다.`);
        } else {
            $('#result').text(`${time - 4}초 경과했습니다.`);
        }
    }, 1000);
    console.log('timestart');
}

function gameStart() {
    $('#h2-display').css({ color: 'black' });
    $('#h2-display').text(answer);
    setTimeout(() => {
        $('#h2-display').css({ color: 'rgba(0, 0, 0, 0.5)' });
        $('#h2-display').text('정답을 입력해주세요');
    }, 3000);
    console.log('gamestart');
}

function updateRecord() {
    $('.record-items').empty();
    record.forEach((a) => {
        let tempHtml = `
        <div class="record-item">
            <div class="answer-${a.correct}">${a.answer}</div>
            <div class="timer">${a.time}</div>
            <div class="date">${a.date}</div>
        </div>`;
        $('.record-items').append(tempHtml);
    });
    console.log('updaterecord');
}

$('#start-button').click(function () {
    flag = false;
    answer = Math.floor(Math.random() * 9000) + 1000;
    gameStart();
    timeStart();
    console.log('startbutton');
});

$('#submit-button').click(function () {
    if (Number($('#user-input').val()) === answer) {
        correct = true;
        $('#h2-display').text(`기록 : ${time}초`);
        $('#result').text(`정답입니다!`);
    } else {
        correct = false;
        $('#result').text(`오답입니다. 정답은 ${answer}입니다.`);
    }
    const currentDate = new Date();
    const recordedDate = recordDate(currentDate);
    record.push({ answer: $('#user-input').val(), time: time, date: recordedDate, correct: correct });
    time = 0;
    updateRecord();
    flag = true;
    console.log('submitbutton');
});
