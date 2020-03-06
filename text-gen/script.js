// fetch( 'https://www.stands4.com/services/v2/poetry.php?uid=1001&tokenid=tk324324&term=grass&format=json', {
// 	mode: 'no-cors' // 'cors' by default
//   } ).then( ( response ) => {
// 	return response.results;
// } )
// 	.then( ( data ) => console.log( data ) );



class Controls {
	constructor( el ) {
		this.el = el;
		this.triggers = el.querySelectorAll( '.js-Controls-trigger' );
		this.onClick = this.onClick.bind( this );

		this.el.addEventListener( 'click', this.onClick );
	}

	onClick( e ) {
		
		const toggleSelector = e.target.dataset.toggleSelector || null;
		
		if ( null !== toggleSelector ) {

			[...document.querySelectorAll( toggleSelector )].forEach( ( el ) => {
				if ( 'none' === el.style.display ) {
					el.style.display = 'block';
				} else {
					el.style.display = 'none';
				}
			} );
		}
		
	}
}


[...document.querySelectorAll( '.js-Controls' )].forEach( el => el.lrvControls = new Controls( el ) );
