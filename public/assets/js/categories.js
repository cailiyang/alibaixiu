//获取类目表数据
$.ajax({
    type: 'GET',
    url: '/categories',
    success:function (res) {
        // console.log(res);
        var html=template('categoriesTpl',{res});
        $('#tbody-categories').html(html);  
    }
})
//添加类目
$('#addCategory').on('submit',function () {
    $.ajax({
      type: 'POST',
      url: '/categories',
      data: $(this).serialize(),
      success:function () {
          location.reload();
      }
    }) 
    return false;
  })
//修改类目
$('#tbody-categories').on('click','a.edit',function () {
  $.ajax({
    type: 'GET',
    url: '/categories/'+$(this).attr('cate-id'),
    success:function (res) {
        // console.log(res);        
        var html=template('categorieeditTpl',res);
        $('.Category-box').html(html); 
    }
  })  
})
//提交修改
$('.Category-box').on('submit','#Categoryedit',function () {
// console.log($('#Categoryedit').attr('Cate-id'));
  $.ajax({
    type: 'PUT',
    url:'/categories/'+$('#Categoryedit').attr('Cate-id'),
    data: $(this).serialize(),
    success:function (res) {
        location.reload();
    }
  })
  return false;
})