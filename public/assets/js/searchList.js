$.ajax({
    type:'GET',
    url:'/posts/search/'+location.href.split('=')[1],
    success:function (res) {
        console.log(res);
        var html= template('listBoxTpl',{res});
        $('#listBox').html(html);  
    }
})