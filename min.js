$( document ).ready(function() {
  $(".second").hide();
  $(".first").click(function() {
    $(".email").hide();
    $(".phone").hide();
    $(".first").hide();
    $(".second").show();
  });
  $(".second").click(function()
  {
    $(".email").show();
    $(".phone").show();
    $(".first").show();
    $(".second").hide();    
  });
});
