// function navShow(){
//     let childrens = $$(".sideMenu")[0].children;
//     for(let i=0; i<childrens.length; i++){
//         let that = this;
//         childrens[i].onclick = function(){
//             console.log(that);
//             that.style.backgroundColor = "#53a3a3";
//         }
//     }
// }
// navShow();




// 点击action弹出ul
function showAction1(){   
    let str =  $(".actionBtn1").length;
    // console.log(str);/
    for(let i=0;i<str; i++){
        $(".actionBtn1").click(function(){
            $(".dropdown-menu1").css("display","block");
            $(this).click(function(){
                $(".dropdown-menu1").css("display","none");
                showAction1();
            })
        })
    }
}
function showAction2(){   
    let str =  $(".actionBtn2").length;
    // console.log(str);/
    for(let i=0;i<str; i++){
        $(".actionBtn2").click(function(){
            $(".dropdown-menu2").css("display","block");
            $(this).click(function(){
                $(".dropdown-menu2").css("display","none");
                showAction2();
            })
        })
    }
}
// function showAction(add){  
//     // console.log(add.nextElementSibling); 
//     add.nextElementSibling.style.display="block";
//     add.onclick=function(){
//         this.nextElementSibling.style.display="none";
//         showAction(add);
//     }
// }

showAction1();
showAction2();