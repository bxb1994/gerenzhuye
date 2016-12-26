$(function(){
    var h=$(window).height();
    var num=0;
    var flag=true;
    $(".fullpage").mousedown(function(e){
        e.preventDefault()
    })
    $(".fullpage").mousemove(function(e){
        e.preventDefault()
    })
    touch.on("body","swipeup",".fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        var les=$("section").length;
        if(num==les){
            num=les-1;
            return;
        }
        $(".fullpage").css("marginTop",-num*h);
        flag=false;
    });
    touch.on("body","swipedown",".fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
           num=0;
            return;
        }
        $(".fullpage").css("marginTop",-num*h);
        flag=false;
    })
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        /*每一屏动画*/

        $("section").each(function(index,obj){
            if(index==num){
                $(obj).find(".section-tittle").css({
                    transform: "translate(0,0)",
                    opacity: 1
                })
                $(obj).find(".brain").css({
                    transform: "translate(0,0)",
                    opacity: 1
                })
            }else{
                $(obj).find(".section-tittle").css({
                    transform: "translate(-150px,0)",
                    opacity: 0
                })
                $(obj).find(".brain").css({
                    transform: "translate(150px,0)",
                    opacity: 0
                })
            }
        })
    })

    /*头部动画*/
    var flag2=true;
    $(".menu-option").click(function(){
        if(flag2){
            $(".menu-option-tline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })
            $(".menu").css("display","block");
        $(".menu a").each(function(index,obj){
            $(obj).css({
                opacity:0,
                animation:"menu 1s linear forwards "+0.2*index+"s"
            })
        })
            flag2=false;
        }else{
            $(".menu-option-tline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    animation:"menu1 1s linear forwards "+(1.2-0.2*index)+"s"
                });
                setTimeout(function(){
                    $(".menu").css("display","none");
                },1300);
            })
            flag2=true;
        }
    })
/*去除bug*/
$(window).resize(function(){
     h=$(window).height();
    var clientW=$(window).width();
    $(".fullpage").css("marginTop",-num*h);
    if(clientW>1000){
        $(".menu a").css({
            animation:"none",
            opacity:0,
            transform:"rotate(0deg)"
        });
        $(".menu-option-tline").css({
            transform:"translate(0,0) rotate(0deg)"
        });
        $(".menu-option-bline").css({
            transform:"translate(0,0) rotate(0deg)"
        });
        flag2=true;
    }
})




})