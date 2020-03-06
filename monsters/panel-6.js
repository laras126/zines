import { html, render } from '../node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`
	`;

	// Render the template to the document
	render( myTemplate( 'Monster Bobo' ), document.querySelector( '.panel-6' ) );
} )();