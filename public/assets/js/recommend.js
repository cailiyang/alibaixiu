$.ajax({
    type:'GET',
    url:'/posts/recommend',
    success:function (res) {
        // console.log(res);
        var Tpl=`
        {{each data}}
        <li>
            <a href="javascript:;">
              <img src="{{$value.thumbnail}}" alt="">
              <span>{{$value.title}}</span>
            </a>
          </li>
          {{/each}}
        `
        var html=template.render(Tpl,{data:res});
        $('.hots ul').html(html);
    }
})