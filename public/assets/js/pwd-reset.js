//表单提交事件
$('#modifyForm').on('submit',function () {
    $.ajax({
        type: 'PUT',
        url: "/users/password",
        data:$(this).serialize(),
        success: function () {
         location.href='login.html';
        }
    })
    return false;
})