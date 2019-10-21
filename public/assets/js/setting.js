$.ajax({
    type: 'GET',
    url: '/settings',
    success:function (res) {
        console.log(res);
        var html=template('setTpl',res);
       $('#settingsForm').html(html);        
    }
})

$('#settingsForm').on('change','#avatar',function () {
    var fd = new FormData();
    fd.append('avatar',this.files[0]);
    $.ajax({
        type:'POST',
        url:'/upload',
        processData:false,
        contentType:false,
        data: fd,
        success:function (res) {
            $('#logoimg').val(res[0].avatar)
            $('#avatarprev').attr('src',res[0].avatar)
        }
    })
})

$('#settingsForm').on('change','.checkbox input',function () {
    var bool= $(this).val();
      bool= !(bool=='true'?true:false)
      $(this).val(bool.toString());
})















//提交数据
$('#settingsForm').on('submit', function () {
    $.ajax({
        type: 'POST',
        url: '/settings',
        data:$(this).serialize(),
        success:function (res) {
            // console.log(res); 
            location.reload();    
        }
    })
    return false;
})