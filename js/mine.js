$(document).ready(function(){
  $(".left div").bind("click",function(e){
        $(".left div").removeClass("button");
        $(".left div img").removeClass("saturate");
        
        $(this).addClass("button");
        $(this).find("img").addClass("saturate");
  });
});