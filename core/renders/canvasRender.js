///////////////////////////////////////////////////////////////////////////
//	Name	: Renderer
//	Author 	: DuyAnh
//	Date	: 08/11/2012
///////////////////////////////////////////////////////////////////////////
X.extend({
	canvasRender: function(params){
		var canvasId = params.canvas, // use Id of element
			canvas = document.getElementById(canvasId), 
			ctx = canvas.getContext('2d'), 
			scene = params.scene, 
			renderer = {
				render: function(){
					console.log("rendering");
					var MatrixPerspective = function(l,r,t,b,n,f){
					    
					    var _m4 = X.m4();
					    var depth = f - n;
					   var m4 = _m4.set( (2*n)/(r-l), 0, (r+l)/(r-l), 0,
				                         0, (2*n)/(t-b),(t+b)/(t-b), 0,
				                         0, 0, -(f+n)/depth, -2*(f*n)/depth,
				                         0, 0, -1, 0);
					  return m4;
					};
					
					
					var rotate = 0.001;
					setInterval(function(){
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						//var rec = window.rec = X.Rectangle(X.v3(-1,1,2),X.v3(1,-1,2));
						var rec = X.kimtuthap(X.v3(-1,0,0),
											  X.v3(0,0,1),
											  X.v3(1,0,0),
											  X.v3(0,1,0));
						var projectMatrix = MatrixPerspective(0,500,0,400,1,-1000);
						var worldMatrix = X.m4();
						var viewMatrix = X.camera({
							eye: X.v3(30,20,0),
							lootAt: X.v3(0,0,0)
						}).makeCameraMatrix();
						
						worldMatrix.rotateX(rotate);
						worldMatrix.rotateY(rotate);
						worldMatrix.rotateZ(rotate);
						worldMatrix.scale(X.v3(50,50,0));
						worldMatrix.setPosition(X.v3(100,100,0));
						//worldMatrix.multiplySelf(viewMatrix);
						worldMatrix.multiplySelf(projectMatrix);
						rec.applyMatrix(worldMatrix);
						rotate+=0.05;
						rec.draw(ctx);
					},100);
					//rec.setPosition(X.v3(100,100,1));
					/*var deg =0;
					setInterval(function(){
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						var worldMatrix = X.m4();
						worldMatrix.setPosition(X.v3(100,100,0));
						worldMatrix.rotateZ(90);
						
						rec.applyMatrix(worldMatrix);
						rec.update();
						rec.draw(ctx);
						deg++;
					},1000);*/
					 
					//projection 

						//console.log(rec.elements);
				}
			};
		return renderer;
	}
});