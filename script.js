import { html, render } from './node_modules/lit-html/lit-html.js';

( function () {
	// Define a template
	const myTemplate = ( name ) => html`<p class="special-panel">Hello ${name}</p>`;

	// Render the template to the document
	render( myTemplate( 'World' ), document.querySelector( '.panel-front' ) );
} )();