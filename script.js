$(function() {
    // 変数にクラスを入れる
  var btn = $('.button');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 1000) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
    console.log('jQueryの準備ができました！');
});