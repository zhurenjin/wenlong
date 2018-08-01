function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
}
$(function () {
    $('.service').click(function () {
        $(".zhezhao").show();
        top = $(window).scrollTop();//获取页面的scrollTop；
        $('body,html').css("top",-top+"px");//给body一个负的top值；
        $('body,html').addClass('add');//给body增加一个类，position:fixed;
    });
    $(".zhezhao").click(function () {
        $(this).hide();
        $('body,html').removeClass('add');//去掉给body的类
        $(window).scrollTop(top);//设置页面滚动的高度，如果不设置，关闭弹出层时页面会回到顶部。
    })
//服务页
//     console.log(GetQueryString('sign'))
    switch (GetQueryString('sign')){
        //圈口
        case '1':
            $('.quankouImg').show();
            $('.zhiquanImg').hide();
            break
        //指圈
        case '2':
            $('.quankouImg').hide();
            $('.zhiquanImg').show();
            break
        default:
            $('.quankouImg').hide();
            $('.zhiquanImg').hide();
    }
});

