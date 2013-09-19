(function(window, undefined){
	var
		document = window.document,
	isDefined = function(o){
		return typeof o !== 'undefined';
	};
	isFunction = function(fnc){
		return (typeof fnc == 'function');
	};
	exec=function(obj, fname, opt) {
	if (obj && (typeof obj[fname] == 'function')) obj[fname](opt);
	};
	X = function(selector,context) {
			return new X.fn.init(selector,context);
	};
	X.fn = X.prototype = {
			constructor:X,
			init: function(selector,context){
				if ( !selector ) {
					return this;
				} else if ( isFunction( selector ) ) {
					document.onreadystatechange = function() {
						   if (this.readyState === "complete"){
							   selector();
						   }
						};
				}
				return this;
			},
			length:0,
			push : [],
			splice : [].splice
	};
	
	X.fn.init.prototype = X.fn;
	
	X.extend = X.fn.extend = function(opts) {
			for (var x in opts) 
				console.log(opts[x]);
				this[x] = opts[x];
		return this;
	};
	window.X = X;
})(window);
