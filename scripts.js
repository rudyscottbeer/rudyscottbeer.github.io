$(document).ready(function() {
    $(".view-more").on("click", function() {
      const list = $(this).siblings("ul");
      list.toggleClass("hidden");
  
      if (list.hasClass("hidden")) {
        $(this).text("View More");
      } else {
        $(this).text("View Less");
      }
    });
  });
  