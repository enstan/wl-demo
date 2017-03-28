$(document).ready(function(){
/*	.left的时间和用户名的设置
*/
  var date=new Date();       
  var hours=date.getHours();
  var user="Mr Li";
  var tem="9";
  
  var hours_d=$("#time");
  var user_d=$("#name");
  var tem_d=$("#tem");
  
    hours_d.empty();
    user_d.empty();
    tem_d.empty();
    
  if(hours>=7&&hours<=12){
  	hours_d.prepend("Good Morning!");     /*prepend用于在元素前添加内空,append为在元素后*/
  }else if(hours>12&&hours<=19){
  	hours_d.prepend("Good Afternoon!");
  }else{
  	hours_d.prepend("Good Evening!");
  }
  
  user_d.prepend(user);
  tem_d.prepend(tem);
 
  /*.manner点击跳转事件js实现  也可用a.href标签进行实现  */
  $("#ll,#ts,#jf,#bx,#gg").bind("click",function(e){
  	 var id=e.currentTarget.id;
  	 switch(id){
  	 	case 'll':
  	 	  window.location.href="neigh.html";  /*window.location.href实现页面跳转功能*/
  	 	  break;
  	  case 'bx':
  	 	  window.location.href="baoxiu.html";  /*window.location.href实现页面跳转功能*/
  	 	  break;
  	 	case 'ts':
  	 	  window.location.href="baoxiu.html";  /*window.location.href实现页面跳转功能*/
  	 	  break;
  	 	case 'jf':
  	 	  window.location.href="baoxiu.html";  /*window.location.href实现页面跳转功能*/
  	 	  break;
  	 	case 'gg':
  	 	  window.location.href="baoxiu.html";  /*window.location.href实现页面跳转功能*/
  	 	  break;
  	 }
  });
});