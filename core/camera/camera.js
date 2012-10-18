///////////////////////////////////////////////////////////////////////////
//	Name	: Camera
//	Author 	: DuyAnh
//	Date	: 08/11/2012
///////////////////////////////////////////////////////////////////////////

X.camera = function(args){
	this.fov = args.fov || 50;	//field of view ( trường ảnh )
	this.aspect = args.aspect || 1;
	this.near = args.near || 0.1;
	this.far = args.far || 2000;
	this.matrixWorldInverse = new X.m4();		// ma tran nghich dao cua World space, đây là hình tu được sau thấu kính nên đây phải là hình ngược với World
	this.projectionMatrix = new X.m4();			// ma tran hinh chieu cua camera
	this.projectionMatrixInverse = new X.m4();	// ma tran hinh chieu nghich dao cua camera
	this.updateProjectionMatrix();
}
X.camera.prototype = new X.Object3D();
X.camera.prototype = {
	constructor : X.camera,
	setLens : function ( focalLength,frameHeight ){
		frameHeight = frameHeight || 24;
		this.fov = 2 * Math.atan( frameHeight / ( focalLength * 2 ) ) * ( 180 / Math.PI );
		this.updateProjectionMatrix();
	},
	setViewOffset : function(fullWidth,fullHeight,x,y,width,height){	
		this.fullWidth = fullWidth;
		this.fullHeight = fullHeight;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.updateProjectionMatrix();
	},
	updateProjectionMatrix : function(){
		if ( this.fullWidth ) {

		var aspect = this.fullWidth / this.fullHeight;
		var top = Math.tan( this.fov * Math.PI / 360 ) * this.near;
		var bottom = -top;
		var left = aspect * bottom;
		var right = aspect * top;
		var width = Math.abs( right - left );
		var height = Math.abs( top - bottom );

		this.projectionMatrix.makeFrustum(
			left + this.x * width / this.fullWidth,
			left + ( this.x + this.width ) * width / this.fullWidth,
			top - ( this.y + this.height ) * height / this.fullHeight,
			top - this.y * height / this.fullHeight,
			this.near,
			this.far
		);

	} else {

		this.projectionMatrix.makePerspective( this.fov, this.aspect, this.near, this.far );

	}

	}

}