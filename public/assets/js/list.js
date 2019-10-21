// listBoxTpl
var id=window.location.href.split('=')[1];

$.ajax({
    type:'get',
    url:`/posts/category/${id}`,
    success:function (res) {
        console.log(res);
        $('#content-title').html(res[0].category.title);
        var html=template('listBoxTpl',{res});
        $('#listBox').html(html);
        
    }
})