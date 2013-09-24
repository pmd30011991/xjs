(function(window, undefined) {
	var document = window.document, 
		isFunction = function(fnc) {return (typeof fnc == 'function');};
		
		
	X = function(selector) {
		return new X.fn.init(selector);
	};
	X.fn = X.prototype = {
		constructor : X,
		init : function(selector) {
			console.log("init");
			if (!selector) {
				return this;
			} else if (isFunction(selector)) {
				document.onreadystatechange = function() {
					if (this.readyState === "complete") {
						selector();
					}
				};
			}
		},
		length : 0,
		push : [],
		splice : [].splice
	};

	X.fn.init.prototype = X.fn;

	X.extend = X.fn.extend = function(opts) {
		for ( var x in opts)
		this[x] = opts[x];
		return this;
	};
	window.X = X;
})(window);
