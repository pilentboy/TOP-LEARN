!$(document).ready(function () {



    /* display search box */
    $("#dis-search-box").click(function(){
        $("body").css("overflow-y", "hidden");
        $(".search-box-bg").css("display", "flex");
        $(".search-box-bg  .search-box").fadeIn();
    })

    $("body").click(function(e){

      if($(e.target).hasClass("search-box-bg")){
       $(".search-box-bg  .search-box").fadeOut(300);
       $("body").css("overflow-y", "auto");
       setTimeout(()=>{
        $(".search-box-bg").css("display", "none");
       },300)
      } 
  
    })
    /* end display search box */

});