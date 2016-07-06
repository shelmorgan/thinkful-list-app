$(document).ready(function() {

   /*console.log check element functionality*/
   console.log('Welcome to console');
   
   $('#view-source').mouseover(function() {
      console.log('mouse over');
   });
   
   $('#addButton').mouseover(function() {
      console.log('mouse over add button');
      // var input = $('.itemDescription').val();
      // $(input).appendTo('.itemList');

   });

});