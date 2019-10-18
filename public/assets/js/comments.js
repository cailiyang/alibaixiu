//获取评论数据
$.ajax({
    type: 'GET',
    url: '/comments',
    success: function (res) {
        console.log(res);   
        var html=template('commentsTpl',res);
        $('#commentsBox').html(html); 
        var page= template('pagesTpl',res); 
        $('.pagesbox').html(page);
    }
});

// function dateFormat(data) {
//     data=new Date(data);
// ​return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
// }

//格式化日期函数
function dateFormat(data) {
    data=new Date(data);
return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
}

//分页
function changepage(num) {
    $.ajax({
        type: 'GET',
        url: '/comments',
        data: {page:num},
        success: function (res) {
            var html=template('commentsTpl',res);
            $('#commentsBox').html(html); 
            var page= template('pagesTpl',res); 
            $('.pagesbox').html(page);  
        }    
    })
}
//批准评论
function confirmok(id) {
var state=confirm('是否批准')?1:0;
   $.ajax({
       type: 'PUT',
       url:'/comments/'+id,
       data:{
        state
       },
       success: function (res) {
          location.reload();     
       }
   })   
}
//删除评论
function dele(id){
    $.ajax({
        type:'DELETE',
        url:'/comments/'+id,
        success:function(res){
            location.reload();    
        }
    })
}