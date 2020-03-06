import { html, render } from '../node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`
	<h2 class="tilt-15deg label lrv-u-margin-t-auto">${name} is not offended by Monster Maxine's candid comment!</h2>
	`;

	// Render the template to the document
	render( myTemplate( 'Monster Bobo' ), document.querySelector( '.panel-7' ) );
} )();