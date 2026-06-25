/*=========================================
  ハンバーガーメニュー開閉
=========================================*/

// 要素取得
const hamburger = document.querySelector(".hamburger-menu");
const navigation = document.getElementById("hamburger-navigation");

// ハンバーガークリックで開閉
hamburger.addEventListener("click", function () {

  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");

});

// メニュー内をクリックした時
navigation.addEventListener("click", function (e) {

  // aタグを押したら閉じる
  if (e.target.closest("a")) {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
  }

  // 背景部分クリックで閉じる
  if (e.target === navigation) {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
  }

});