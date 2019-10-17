$('#logout').on('click',function () {
    if(confirm('您真的要退出吗？')){
      $.ajax({
        type:'POST',
        url: '/logout',
        success: function () {
          location.href='login.html'
        },
        error: function () {
          alert('退出失败');
        }
      })
    }
  })