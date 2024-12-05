// Firebase SDK 라이브러리 가져오기
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// Firebase 구성 정보 설정
const firebaseConfig = {
    apiKey: 'AIzaSyBlrUbFGLu2kSAOvyTHu8xvfOkLz50HoSM',
    authDomain: 'sparta-6bfc7.firebaseapp.com',
    projectId: 'sparta-6bfc7',
    storageBucket: 'sparta-6bfc7.firebasestorage.app',
    messagingSenderId: '54115184929',
    appId: '1:54115184929:web:d7294ee39a2dbac3fd0e60',
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$('#postingbtn').click(async function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let star = $('#star').val();
    let comment = $('#comment').val();

    let doc = {
        image: image,
        title: title,
        star: star,
        comment: comment,
    };
    await addDoc(collection(db, 'movies'), doc); //아직 안 가져와질 수도
    alert('저장 완료');
    window.location.reload(); // 새로고침
});

let url = 'http://spartacodingclub.shop/sparta_api/weather/seoul';
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let temp = data.temp;
        $('#degree').text(temp);
    });

$('#togglebtn').click(async function () {
    $('#postingbox').toggle();
});

let docs = await getDocs(collection(db, 'movies'));
docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);

    let image = row.image;
    let title = row.title;
    let star = row.star;
    let comment = row.comment;
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
