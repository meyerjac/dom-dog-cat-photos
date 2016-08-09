$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#dog").append("<li>Ruff Ruff!</li>");
    $("ul#cat").append("<li>meow meow!</li>");
});

  $("button#cat").click(function() {
    $("ul#cat").append("<li>meow meow!</li>");
    $("ul#dog").append("<li>Ruff Ruff!</li>");
  });
});

$(document).ready(function(){
  $("h1").click(function() {
    $("img").toggle();
  })
});
