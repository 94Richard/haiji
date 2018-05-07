$(function(){
  var number=$("#banner ul li").length-1;//图片的数量
  var cur=0;//当前显示的图片
  var timer=0;//定时器

  //下一个
  function slideNext(){
      if(cur<number){
          $("#banner ul li").eq(cur+1).css({'z-index':20}).stop().fadeIn(400);
          $("#banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut(500);
          $(".indicator a").removeClass().eq(cur+1).addClass("cur");
          cur++;
      }else{
          $("#banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut(500);
          $("#banner ul li").eq(0).css({'z-index':20}).stop().fadeIn(400);
          $(".indicator a").removeClass().eq(0).addClass("cur");
          cur=0;
      }
  }

  timer=setInterval(slideNext,5000);

  //当鼠标移入banner时，清除定时器
  $("#banner").mouseover(function(){
      clearInterval(timer);
  });
  $("#banner").mouseout(function(){
      timer=setInterval(slideNext,3000)
  });
  //小圆点指示器
  $(".indicator>a").mouseover(function(){
      var now=$(this).index();//获取鼠标移入的是第几个a标记
      $(".indicator>a").removeClass();//删除a标记中的class=cur
      $(this).addClass("cur");//为此a标记添加cur样式
      $("#banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut(500);//隐藏当前的图片
      $("#banner ul li").eq(now).css({'z-index':20}).stop().fadeIn(400);//显示和a序列号一样的图片
      cur=now;//为变量cur重新赋值，以便于再次启用定时器的时候，从当前显示的图片开始播放
  });
})  

