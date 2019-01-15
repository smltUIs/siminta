// 点击alerttxt弹出nav
$(function(){
    alerttxt();
    function alerttxt(){
        $(".alerttxt").click(function(){
            $(".nav").css("display","block");
            $(this).click(function(){
                $(".nav").css("display","none");
                alerttxt();
            })
        })
    }        
})


jQuery(".sideMenu").slide({
    titCell:"h3", //鼠标触发对象
    targetCell:"ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
    effect:"slideDown", //targetCell下拉效果
    delayTime:300 , //效果时间
    trigger:"click",
    triggerTime:150, //鼠标延迟触发时间（默认150）
    defaultPlay:false,//默认是否执行效果（默认true）
    returnDefault:true //鼠标从.sideMen移走后返回默认状态（默认false）
});
