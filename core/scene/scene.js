X.scene = function(){
	X.Object3D.call( this );
	this.fog = null;
	this.overrideMaterial = null;
	this.matrixAutoUpdate = false;
	this.objects = [];	// cac obj cua user them vao
	this.cameraActived = null;
}
X.scene.prototype ={
	addCamera : function(o)
	{
		if(o instanceof X.camera)
		{
			this.objects.push(o); // them vao mang object
			this.cameraActived = o;  // set default camera
		}
	},
	
}