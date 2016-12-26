window.onload=function(){
    //导航
    var nav=document.querySelector(".nav");
    document.documentElement.scrollTop=1;
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    var ot=nav.offsetTop;
    window.onscroll=function(){
        if(obj.scrollTop>=ot){
            nav.style.cssText="position:fixed;top:0;bottom:0;left:0;right:0;margin:0 auto";
        }else{
            nav.style.cssText="";
        }
    }

    var index=$(this).index;
    $(".nav-box ul li a").click(function(){
       $("html,body").animate({scrollTop:$(".box").eq(index).offsetTop});
    })


    $(".go-top").click(function(){
        $("html,body").animate({scrollTop:0},800);
        return false;
    })


}