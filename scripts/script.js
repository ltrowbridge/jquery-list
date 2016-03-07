$(document).ready(function() {
    $(".button").click(function(){
        event.preventDefault();
    
        console.log("new item"+$(".list-item").val());
        var item= $(".list-item").val();
        console.log("variable "+ item);
$('.list').append('<li>'+item+'<img src="images/checkmark.png" class="checkmark" /><img src="images/xmark.png" class="xmark" /></li>');
    }); //end display li 
   
                                     
     $( ".checkmark" ).click(function() {
  $(this).closest('li').toggleClass('stroked');
  });//create a toggle strike through using the X button
        
$( ".xmark" ).click(function() {
  $(this).closest('li').hide();
  });//create a strike through using the X button
    
});//end doc ready
    
    