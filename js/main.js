'use strict';

// ヘッダー背景色
if (document.body.classList.contains("page-top")) {
  const header = document.querySelector(".header-wrap");
  const topSection = document.querySelector(".top");

  if (header && topSection) {
    header.classList.add("is-transparent"); // 最初は透明に

    window.addEventListener("scroll", () => {
      const topBottom = topSection.offsetTop + topSection.offsetHeight;

      if (window.scrollY > topBottom) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// ハンバーガーメニュ―
$(".openbtn").click(function () { //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $("#h-menu").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$("#h-menu a").click(function () { //メニューのリンクがクリックされたら
  $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
  $("#h-menu").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});



// Topスライド用画像リスト（すべてのデバイスで共通）
const responsiveImage = [
  { src: '/img/top.jpg' },
  { src: '/img/top.jpg' },
  { src: '/img/top.jpg' }
];

// Vegasのスライダー設定
$('#slider').vegas({
  transition: 'blur',               // 切り替えアニメーション
  transitionDuration: 2000,         // アニメーションの切り替え時間（2秒）
  delay: 10000,                     // スライド表示間隔（10秒）
  animationDuration: 20000,         // ズーム演出の時間
  animation: 'kenburnsDown',        // ズームアウト方向のKen Burnsエフェクト
  slides: responsiveImage,          // 画像リスト
  timer: false                      // プログレスバーは非表示
});


// Worksスライド
$('.slider').slick({
  autoplaySpeed: 2500,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});