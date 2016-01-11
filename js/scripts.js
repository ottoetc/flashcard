$(document).ready(function() {
  $(".panel-heading").click(function(){
    $(this).next(".panel-body").toggle("slow");

  });
});
//$(".panel-body").toggle();
