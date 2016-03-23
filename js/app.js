// $(document).ready(function() {
//   for (var count = 1; count <= 100; count++) {
//     //   $('.target').append(count + "<br/>");
//     if ( count % 3 == 0 && count % 5 == 0 ) {
//         $('.target').append("fizz buzz<br/>");
//     }
//     else if ( count % 3 == 0) {
//         $('.target').append("fizz<br/>");   
//     }
//     else if ( count % 5 == 0) {
//         $('.target').append("buzz<br/>");
//     }
//     else {
//         $('.target').append(count + "<br/>");
//     }
//   }
// });
$(document).ready(function() {
   $("#target").submit(function(event){
      event.preventDefault();
      var input = $('.target input').val();
      input  +input;
      $('.target input').val("");
      if (parseInt(input)) {
          for (var count = 1; count <= input; count++) {
              if ( count % 3 == 0 && count % 5 == 0 ) {
                  $('.target').append("fizz buzz<br/>");
               }
               else if ( count % 3 == 0) {
                  $('.target').append("fizz<br/>");   
               }
               else if ( count % 5 == 0) {
                  $('.target').append("buzz<br/>");
               }
               else {
                  $('.target').append(count + "<br/>");
               }
          }
      }
      else {
         $('.target').append("Your input, " + input + ", is not valid <br/>");
      }
   });
});