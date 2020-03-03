import { html, render } from './node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`<h2>Hey sweet ${name}!</h2>`;

	// Render the template to the document
	render( myTemplate( 'Monster Bobo' ), document.querySelector( '.panel-2' ) );
} )();