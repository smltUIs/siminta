function deleteObj(obj){
    obj.parentNode.remove();
}


// function deleteClose(){
//     $(".btn-close")[0].onclick=function(){
//         $(".medal").remove();
//     }
// }
// deleteClose()

$(function(){
    // $(".btn-close").click(function(){
    //     $(".medal").animate({
    //         "opacity":0,
    //         "top":0
    //     },1000)
    // });
    // $(".medal-close").click(function(){
    //     $(".medal").animate({
    //         "opacity":0,
    //         "top":0
    //     },1000)
    // });
    function showAlert(){
        $(".btn-lg").click(function(){
            $(".medal").css("display","block");
            $(".btn-close").click(function(){
                $(".medal").animate({
                    "opacity":0,
                    "top":0
                },1000)
                showAlert()
            });
            $(".medal-close").click(function(){
                $(".medal").animate({
                    "opacity":0,
                    "top":0
                },1000)
            });
        })

    }
    showAlert();
    
})