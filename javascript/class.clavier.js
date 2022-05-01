// JavaScript Document

function Clavier () {
	
	// console.log('----- class.clavier.js');
	
	var HAUT					= 38;
	var DROITE					= 39;
	var BAS						= 40;
	var GAUCHE					= 37;
	var Z                       = 90;
	var Q                       = 81;
	var S                       = 83;
	var D                       = 68;
	var W                       = 87;
	var X                       = 88;
	
	var _touche					= this;
	_touche.press				= false;
	_touche.haut				= false;
	_touche.droite				= false;
	_touche.bas					= false;
	_touche.gauche				= false;
	_touche.z                   = false;
	_touche.q                   = false; 
	_touche.s                   = false;
	_touche.d                   = false;
	_touche.w                   = false;
	_touche.x                   = false;
	
	var _evt					= null;
	var _statut					= false;
	
	document.onkeydown = function (evt) {
		_evt = evt || window.event;
		// console.log('document.onkeydown ' + _evt.keyCode);
		touche(_evt.keyCode, _evt.type);
	};
	
	document.onkeyup = function (evt) {
		_evt = evt || window.event;
		touche(_evt.keyCode, _evt.type);
	};
	
	// METHODES
	
	function touche(code, statut) {
		
		_statut = false;
		if (statut == 'keydown') {
			_statut				= true;
		};
		
		switch (code) {
			case HAUT :
				_touche.press	= _statut;
				_touche.haut	= _statut;
				break;
			case DROITE :
				_touche.press	= _statut;
				_touche.droite	= _statut;
				break;
			case BAS :
				_touche.press	= _statut;
				_touche.bas		= _statut;
				break;
			case GAUCHE :
				_touche.press	= _statut;
				_touche.gauche	= _statut;
				break;
			case Z :
				_touche.press	= _statut;
                _touche.z	    = _statut;
                break;
            case D :
            	_touche.press	= _statut;
                _touche.d	    = _statut;
                break;
            case S :
            	_touche.press	= _statut;
                _touche.s	    = _statut;
                break;
            case Q :
            	_touche.press	= _statut;
                _touche.q	    = _statut;
                break;
            case W :
            	_touche.press	= _statut;
                _touche.w	    = _statut;
                break;
            case X :
            	_touche.press	= _statut;
                _touche.x	    = _statut;
                break;
			default :
				break;
		};
	};
	
};