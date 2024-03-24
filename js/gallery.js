$(document).ready(function() {
    var $images = $(".gallery-container img");
    var currentIndex = 0;
  
    $images.eq(currentIndex).addClass("active");
  
    $("#prevBtn").click(function() {
      $images.eq(currentIndex).removeClass("active");
      currentIndex = (currentIndex - 1 + $images.length) % $images.length;
      $images.eq(currentIndex).addClass("active");
    });
  
    $("#nextBtn").click(function() {
      $images.eq(currentIndex).removeClass("active");
      currentIndex = (currentIndex + 1) % $images.length;
      $images.eq(currentIndex).addClass("active");
    });
  });