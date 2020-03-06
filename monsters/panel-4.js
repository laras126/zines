import { html, render } from '../node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`
	<h2 class="label lrv-u-margin-t-auto tilt-n15deg">Hey, ${name}!</h2>
	`;

	// Render the template to the document
	render( myTemplate( 'Monster Maxine' ), document.querySelector( '.panel-4' ) );
} )();