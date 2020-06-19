
// Get HTML from the first panel and copy it to the others.
const flyers = [...document.querySelectorAll( '.js-Flyer' )];
const html = flyers[0].innerHTML;

flyers.forEach( flyer => {
	flyer.innerHTML = html;
})