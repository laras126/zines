import { html, render } from '../node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`
	<h2>${name} says...</h2>
	<blockquote>
		<p>Yes, Bobo, you dumb shit, I am also sweet.</p>
	</blockquote>
	`;

	// Render the template to the document
	render( myTemplate( 'Monster Maxine' ), document.querySelector( '.panel-5' ) );
} )();