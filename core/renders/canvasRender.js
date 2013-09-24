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
					var colorStep1 = 0;
					var colorStep2 = 0;
					var colorStep3 = 0;
					var countStep = 0;
					ctx.strokeStyle="#000000";
						
						var step =-180;
						setInterval(function(){
							var bv1 = new X.v3(0,0,0),
							bv2 = new X.v3(1,0,0),
							bv3 = new X.v3(1,2,0),
							bv4 = new X.v3(0,1,0,0);
						var mx = new X.m4();
					
							mx.translate(new X.v3(500,300,0));
							mx.scale(new X.v3(100,100,0));
							if(step>360)
								step=-180;
							mx.rotateZ(step);
							bv1 = mx.multiplyVector3(bv1);
							bv2 = mx.multiplyVector3(bv2);
							bv3 = mx.multiplyVector3(bv3);
							bv4 = mx.multiplyVector3(bv4);
						  ctx.beginPath();
						    ctx.lineTo(bv2.x,bv2.y);
						    ctx.lineTo(bv3.x,bv3.y);
						    ctx.lineTo(bv4.x,bv4.y);
						  	ctx.lineTo(bv1.x,bv1.y);
						    ctx.closePath();
						    ctx.lineWidth = 1;
				
						    ctx.strokeStyle = "rgb("+colorStep1+","+colorStep2+","+colorStep3+")";
				
						    ctx.stroke();
						    if(countStep%2 == 0 )
						    	colorStep1++;
						    else if(countStep%3 == 0 )
						    	colorStep2++;
						    else
						    	colorStep3++;
						    if(colorStep1 == 255)
						    	colorStep1 = 0;
						    if(colorStep2 == 255)
						    	colorStep2 = 0;
						    
						    if(colorStep2 == 255)
						    	colorStep2 = 0;
						    
						    countStep++;
							step +=1;
						},1);
						
						
						
					
						
					//	mx.translate();
						
						
				}
			};
		return renderer;
	}
});