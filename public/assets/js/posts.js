$.ajax({
    type: 'GET',
    url: '/posts',
    success:function (res) {
        // console.log(res);
        var html=template('postsTpl',res);
        $('#postslist').html(html);

        var pagehtml=template('pageTpl',res);
        $('.pagebtn-box').html(pagehtml);
    }
});
function dateFormat(data) {
    data=new Date(data);
    return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
}

//翻页函数
function changepage(num) {
    console.log(num);
    $.ajax({
        type: 'GET',
        url: '/posts',
        data: {
            page:num,
        },
        success:function (res) {
            var html=template('postsTpl',res);
            $('#postslist').html(html);
    
            var pagehtml=template('pageTpl',res);
            $('.pagebtn-box').html(pagehtml);
        }

    })
    
}

//请求分类列表
$.ajax({
    type: 'GET',
    url: '/categories',
    success: function (res) {
        // console.log(res);
      var  html=template('categoryTpl',{res})
      $('#categoryBox').html(html);
    }
})
//请求分类数据
$('#filterForm').on('submit',function() {
    $.ajax({
        type: 'GET',
        url: '/posts',
        data: $(this).serialize(),
        success:function (res) {
            // console.log(res);
            var html=template('postsTpl',res);
            $('#postslist').html(html);
            var pagehtml=template('pageTpl',res);
            $('.pagebtn-box').html(pagehtml);
        }
    })
    return false;
})


