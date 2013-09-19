///////////////////////////////////////////////////////////////////////////
//	Name	: Renderer
//	Author 	: DuyAnh
//	Date	: 08/11/2012
///////////////////////////////////////////////////////////////////////////
X.canvasRender = function(params){
	this.canvasId = params.canvas; // use Id of element
	this.canvas = document.getElementById(this.canvasId);
	this.context = this.canvas.getContext('2d');
	this.scene = params.scene;
};
X.canvasRender.prototype = {
		constructor: X.canvasRender,
		init: function(){
		},
		render: function(){
			console.log("rendering");
		}
};