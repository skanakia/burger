$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).attr("data-newEaten");
      console.log(newDevoured);
      var newEatenState = {
        devoured: newDevoured
      };
      console.log(newEatenState);
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEatenState,

      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        "burger_name": $("#burg").val().trim(),
        "devoured": "false" 
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger,
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  