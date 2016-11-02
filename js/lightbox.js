

// Capture the click event on a link to an image
$('a[href$=".jpg"]').click ( function ( event ) {

// get childs alt atrribute and set caption
var selectedpicture = $( this ).attr('href');
var caption = $(this).children().attr('alt');
var navigationright = '<span class="navright">&#8250;</span>';
var navigationleft = '<span class="navleft">&#8249;</span>';

// /Creat and Update the overlay with the image linked in the link, check values in console.
var html =  '<div id="lightbox">'+ navigationleft + '<img src="'+ selectedpicture +'">' + navigationright + '<p>'+ caption + '</p></div>';
console.log(selectedpicture);
console.log(caption);
console.log(html);
console.log('got it');

event.preventDefault();


//Add the overlay on page
$('body').append(html);

// show the overlay
$('#lightbox').show();

//when overlay is clicked, hide the overlay
$('#lightbox').click( function () {
  $(this).remove();
  });



});

// navigation functionality


  //2.1 an image
  //2.2 a caption
