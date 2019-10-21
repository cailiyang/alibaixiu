$.ajax({
    type:'get',
    url:'/settings',
    success:function (res) {
        console.log(res);
        res.comment?$('#comment-con').css('display','block'):0;
    }
})
$.ajax({
    type:'GET',
    url:'/posts/'+location.href.split('=')[1],
    success:function (res) {
        console.log(res);
        var html=template('detailTpl',res);
         $('.article').html(html);    
    }
})

function zan(id) {
    $.ajax({
        type:'POST',
        url:'/posts/fabulous/'+id,
        success:function (res) {
            console.log(res);    
        }
    })
}
//评论
// $('#comment-con').on('submit',function () {
//     $.ajax({
//         type: 'POST',
//         url: '/comments',
//         data:,
//         success:function (res) {
            
//         }
//     })
// })