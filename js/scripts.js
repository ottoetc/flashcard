$(document).ready(function() {
  $(".panel-body").click(function(){
    $(".definition-shown", this).toggle();
    $(".definition-hidden", this).toggle();
  });
});
