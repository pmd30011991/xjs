(function(window, undefined){
	// containt all of constantants of X framework
	DOMReady = function(callback)
	{
		var done = false;
		var checkLoaded = setInterval(function(){ if(document.body && document.getElementById){done = true;}},10);
		var checkInter = setInterval(function(){if(done){clearInterval(checkLoaded);clearInterval(checkInter);callback();}},10);
	}
	
	isDefined = function(o){
		return typeof o !== 'undefined' 
	}
	
	exec=function(obj, fname, opt) {
	if (obj && (typeof obj[fname] == 'function')) obj[fname](opt);
	}
	
	// begin X framework
	X = function(selector,context) {
		return new X.fn.init(selector,context);
	}
	X.fn = X.prototype = {
		constructor: X,
		init : function(selector,context){
		}
	}
	// get fn into fn.init to create new object.
	X.fn.init.prototype = X.fn;
	
	// extend feature into X framework by this function
	X.extend = X.fn.extend = function(opts) {
			for (var x in opts) 
			this[x] = opts[x];
		return this;
	}
	window.X =  X;
})(window);
