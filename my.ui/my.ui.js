jQuery.fn.myAccordion=function(){
    //1. 为元素自动添加class
    $parent=this;
    //1.2 给父元素下所有奇数位置的直接子元素加class title
    //css中下标从1开始
    $parent.addClass("accordion").children(":nth-child(odd)").addClass("title").next().addClass("content fade").first().addClass("in");
    
    //2. 为元素自动绑定事件处理函数
    $(".accordion").on("click",".title",e=>
    $(e.target).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  );
}