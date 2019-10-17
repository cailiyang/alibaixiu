$.ajax({
    type: 'GET',
    url: '/posts',
    success:function (res) {
        console.log(res);
        var html=template('postsTpl',res);
        $('#postslist').html(html);
        
    }
});
function dateFormat(data) {
    data=new Date(data);
    return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
}

