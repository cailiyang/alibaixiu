$.ajax({
    type: 'GET',
    url: "/posts/count",
    success:function (res) {
        // console.log(res);
        $('#postcount').html(res.postCount);
        $('#draftCount').html(res.draftCount);    
    }
})
$.ajax({
    type: 'GET',
    url: "/categories/count",
    success:function (res) {
        // console.log(res);
        $('#categoriesCount').html(res.categoryCount);   
    }
})
$.ajax({
    type: 'GET',
    url: "/comments",
    success:function (res) {
        console.log(res);
        $('#pinglunCount').html(res.total); 
        
    }
})

