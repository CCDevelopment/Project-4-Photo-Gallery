

// Capture the click event on a link to an image
$('a[href$=".jpg"]').click ( function ( event ) {

// get childs alt atrribute and set caption
var selectedpicture = $( this ).attr('href');
var caption = $(this).children().attr('alt');

// update the overlay with the image linked in the link
var html =  '<div id="lightbox"><img src="'+ selectedpicture +'"></div>';
console.log(selectedpicture);
console.log(caption);
event.preventDefault();
console.log('got it');
// $('#gallery').fadeOut(600);
$('body').append(html);

// show the overlay
$('#lightbox').show();
console.log(html);

//when overlay is clicked, hide the overlay
$('#lightbox').click( function () {
  $(this).remove();
  });



});


//2. Add Overlay
  //2.1 an image
  //2.2 a caption
