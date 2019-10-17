var users;
//渲染用户列表函数
function rend() {
    var html = template('tpl', { users });
    $('#tbody-userlist').html(html);
}
//请求用户列表数据
$.ajax({
    type: 'GET',
    url: '/users',
    success: function (res) {
        users = res;
        rend()
    },
    error: function () {
        console.log('用户列表数据获取失败');
    }
})
//注册表单提交事件
$('#userForm').on('submit', function () {
    var formData = $(this).serialize();
    formData = formData + '&avatar=' + $('#preview')[0].src;

    $.ajax({
        type: 'POST',
        url: '/users',
        data: formData,
        success: function (res) {
            users.unshift(res);
            $('#preview')[0].src = '../assets/img/default.png';
            $('#userForm')[0].reset();
            rend();
        },
        error: function () {
            alert('添加失败');
        }
    })
    return false;//阻止表单提交默认行为
})
//头像提交事件
$('#user-box').on('change', '#avatar', function () {
    var fd = new FormData();
    fd.append('avatar', this.files[0]);
    $.ajax({
        type: 'POST',
        url: '/upload',
        processData: false,
        contentType: false,
        data: fd,
        success: function (res) {
            // $('#avatar').val(res[0].avatar);
            $('#preview')[0].src = res[0].avatar;
        },
        error: function (res) {
            location.reload();
        }
    })
})

//渲染要修改的用户数据
$('#tbody-userlist').on('click', '.edit', function () {
    let id = $(this).attr('userid');
    $.ajax({
        type: 'GET',
        url: '/users/' + id,
        success: function (res) {
            // console.log(res); 
            var html = template('tpl-edit', res);
            $('#user-box').html(html);
        }
    })
})
//提交修改好的数据
$('#user-box').on('submit', '#userEdit', function () {
    var formData = $(this).serialize();


    formData = formData + '&avatar=' + $('#preview').attr('src');
    // console.log(formData);

    $.ajax({
        type: 'PUT',
        url: '/users/' + $('#userEdit').attr('user-id'),
        data: formData,
        success: function (res) {
            location.reload();

        }
    })
    return false;
})

//删除指定用户
$('#tbody-userlist').on('click', '.del', function () {
    var deluse = confirm('确定要删除吗？');
    if (deluse) {
        let id = $(this).attr('userid');
        console.log(id);
        $.ajax({
            type: 'DELETE',
            url: '/users/' + id,
            success: function (res) {
                location.reload();
            }
        })
    }
})

//批量删除
    //选中事件1
$('#checkAll').on('change', function () {
    var checkeds = $('#tbody-userlist input')
    if ($(this).prop('checked')) {
        checkeds.prop('checked', true)
        $('.delAll').show();
    } else {
        checkeds.prop('checked', false)
        $('.delAll').hide();
    }
})
    //选中事件2
$('#tbody-userlist').on('change', 'input', function () {
    if ($('#tbody-userlist input:checked').length >= 1) {
        $('.delAll').show();
        if ($('#tbody-userlist input:checked').length == $('#tbody-userlist input').length) {
            $('#checkAll').prop("checked", true)
        } else {
            $('#checkAll').prop("checked", false)
        }
    } else {
        $('#checkAll').prop("checked", false)
        $('.delAll').hide();
    };
})
    //删除操作
$('.delAll').on('click', function () {
    if (confirm('确定要删除吗？')) {
        var ids = '';
        $('#tbody-userlist input:checked').map((index, value, ary) => {
            ids += '\-' + value.getAttribute('userid');
        })
        ids = ids.replace('-', '');
        $.ajax({
            type: 'DELETE',
            url: '/users/' + ids,
            success: function (res) {
                location.reload();
            }
        })
    }
})


