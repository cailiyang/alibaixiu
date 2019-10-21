$.ajax({
    type: 'GET',
    url: '/slides',
    success: function (res) {
        // console.log(res);
        var html = template('slidesTpl', { res })
        $('#slidesBox').html(html);
    }
});
//删除函数
function del(id) {
    $.ajax({
        type: 'DELETE',
        url: '/slides/' + id,
        success: function () {
            location.reload();
        }
    })
}
//上传图片
$('#file').on('change', function () {
    var fd = new FormData();
    fd.append('avatar', this.files[0]);
    $.ajax({
        type: 'POST',
        url: '/upload',
        data: fd,
        processData: false,
        contentType: false,
        success: function (res) {
            //   console.log(res);
            $('.thumbnail').attr('src', res[0].avatar)
                .css('display', 'block');
            $('#avatar').val(res[0].avatar);
        }
    })
})

$('#slidesForm').on('submit', function () {
    console.log($(this).serialize());

    $.ajax({
        type: 'POST',
        url: '/slides',
        data: $(this).serialize(),
        success: function (res) {
            location.reload();
        }
    })
    return false;
})
