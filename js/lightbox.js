

//1. Capture the click event on a link to an image

$('a[href$=".jpg"]').click ( function ( event ) {
var selectedpicture = $( this ).attr('href');
// get childs alt atrribute and set caption
var caption = $(this).children().attr('alt');
var html =  '<div id="lightbox"><img src="'+ selectedpicture +'"></div>';
console.log(selectedpicture);
console.log(caption);
event.preventDefault();
console.log('got it');
$('#gallery').fadeOut(600);
$('body').append(html);
$('#lightbox').show();
console.log(html);
});





  //1.1 show the overlay

  //1.2 update the overlay with the image linked in the link

//2. Add Overlay
  //2.1 an image
  //2.2 a caption
//3. when overlay is clicked
  //3.1 hide the overlay
