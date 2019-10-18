//获取分类列表
$.ajax({
    type: 'GET',
    url: '/categories',
    success: function (res) {
        console.log(res);
        
        var html=template('categoryTpl',{res});
        $('#category').html(html);
    }
})
//图片上传
$('#feature').on('change',function () {
    // console.dir(this);
    var fd=new FormData();
    fd.append('avatar',this.files[0]);
    $.ajax({
        type:'POST',
        url:'/upload',
        data:fd,
        processData:false,
        contentType:false,
        success:function (res) {
           $('#thumbnail').val(res[0].avatar); 
        }
    })
})
//新文章上传
$('#addForm').on('submit',function () {
    console.log($(this).serialize());
    
    $.ajax({
        type: 'POST',
        url: '/posts',
        data:$(this).serialize(),
        success: function (res) {
            location.href="posts.html"
        }
    })
    return false;
})
