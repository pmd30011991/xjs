X.extend({
	camera: function(params){
		var c = function(){
			this.eye = params.eye;
			this.lootAt = params.lookAt;
			this.u = X.v3();
			this.v = X.v3();
			this.w = X.v3();
		};
		c.prototype = {
			constructor: c,
			setPosition: function(v){
				this.eye = v;
			},
			setLootAt: function(v){
				this.lootAt = v;
			},
			makeCameraMatrix: function(){
				this.w.sub(this.eye,this.lootAt);
				this.w.normalize();
				this.u.sub(X.v3(0,0,1),this.w);
				this.u.normalize();
				this.v.cross(this.w,this.v);
				this.v.normalize();
				
				var rotateM = X.m4(
				this.u.x,this.u.y,this.u.z,0,
				this.v.x,this.v.y,this.v.z,0,
				this.w.x,this.w.y,this.w.z,0,
				0		,0		 ,0		  ,0);
				
				var translateM = X.m4(1,0,0,-this.eye.x,
									  0,1,0,-this.eye.y,
									  0,0,1,-this.eye.z,
									  0,0,0,1);
				var cameraM = X.m4();
				return cameraM.multiply(rotateM,translateM);
			}
		};
		return new c();
	}
});