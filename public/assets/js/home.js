//轮播图
$.ajax({
    type:'GET',
    url:'/slides',
    success:function (res) {
        // console.log(res);
        var html =template('slidesTpl',{res})
        $('.swiper-wrapper').html(html);     
    }
})