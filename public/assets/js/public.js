//随机推荐
$.ajax({
    type:'GET',
    url:'/posts/random',
    success:function (res) {
        console.log(res);
        var tpl=`
        {{each data}}
        <li>
        <a href="javascript:;">
          <p class="title">{{$value.title}}</p>
          <p class="reading">阅读({{$value.meta.views}})</p>
          <div class="pic">
            <img src="{{$value.thumbnail}}" alt="">
          </div>
        </a>
      </li>
      {{/each}}
        `
    var html=template.render(tpl,{data:res});
    $('.random').html(html);
    }
})
//获取评论数据
$.ajax({
    type:'get',
    url:'/comments/lasted',
    success:function (res) {
        console.log(res);
        var tpl=`
        {{each data}}
        <li>
        <a href="javascript:;">
          <div class="avatar">
            <img src="{{$value.author.avatar}}" alt="">
          </div>
          <div class="txt">
            <p>
              <span>{{$value.author.nickName}}</span>{{$value.createAt.split('T')[0]}}说:
            </p>
            <p>{{$value.content}}</p>
          </div>
        </a>
      </li>
      {{/each}}
        `
        var html= template.render(tpl,{data:res});
        $('.discuz').html(html);
    }
})
//分类功能
$.ajax({
type:'GET',
url:'/categories',
success:function (res) {
    console.log(res);
    var tpl=`
    {{each data}}
    <li><a href="list.html?id={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
    {{/each}}
    `
    var html=template.render(tpl,{data:res})
    $('.categoriesbox').html(html);
    
}

})

//搜索功能
$('.search form').on('submit',function () {
    var key=$(this).find('.keys').val().trim();
    location.href=`searchList.html?key=${key}`;
    return false;
})

