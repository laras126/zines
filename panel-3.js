import { html, render } from './node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`
	<h2>${name} says...</h2>
	<blockquote>
		<p>Yeah, I know I'm sweet. R u also sweet?</p>
	</blockquote>
	`;

	// Render the template to the document
	render( myTemplate( 'Monster Bobo' ), document.querySelector( '.panel-3' ) );
} )();