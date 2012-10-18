///////////////////////////////////////////////////////////////////////////
//	Name	: Renderer
//	Author 	: DuyAnh
//	Date	: 08/11/2012
///////////////////////////////////////////////////////////////////////////
	
X.extend({
	canvasRender : function(args){
		var render = function(){
			this.canvasId = args.canvas; // use Id of element
			this.canvas = document.getElementById(this.canvasId);
			this.context = this.canvas.getContext('2d');
			
			this.scene = args.scene;
			this.render = function(){
			}
		};
		return new render(args);
	}

});