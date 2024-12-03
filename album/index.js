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

//type=module 이면 동적으로 만들어줘야 해서 onClick을 못 쓴다...? 
$('#postingbtn').click(async function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    let doc = {
        image: image,
        title: title,
        content: content,
        date: date,
    };
    await addDoc(collection(db, 'albums'), doc); //아직 안 가져와질 수도
    alert('저장 완료');
    window.location.reload(); // 새로고침
});

let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
        $('#degree').text(mise);
    });

let docs = await getDocs(collection(db, 'albums'));
docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);

    let image = row.image;
    let title = row.title;
    let content = row.content;
    let date = row.date;

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

$('#remember_btn').click(async function () {
    $('#postingbox').toggle();
});

//우리가 만든 카드는 브라우저에 저장된거기 때문에 새로고침하면 날라감 => 서버의 필요성
