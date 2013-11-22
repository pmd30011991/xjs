X.extend({
	Object3D :function(){
		var o3 = function(){
			this.position = X.v3(); // vi tri cua Object3D 
			this.scale = X.v3(1,1,1);  // ti le cua obj , mac dinh la 1,1,1 hay con goi la chua ty le
			this.rotation =X.v3();  // vector quay cua obj
			this.matrix = X.m4(); // ma tran bien doi cua obj
			this._vector = X.v3(); // bien temp de xai khi can
			this._m4 = X.m4();
			this.elements = [];
		};
		o3.prototype={
			constructor: o3,
			applyMatrix: function(m4)	// ap dung ma tran cho Object3D này
			{
				this.matrix.multiply(m4,this.matrix);	// o day chung ta thuc hien nhan ma tran de chuyen doi he truc toa do
				this.scale.getScaleFromMatrix(this.matrix); // lay vector ti le tu ma tran duoc cho
				this.rotation.getRotationFromMatrix(this.matrix); // tuong tu nhu tren
				this.position.getPositionFromMatrix(this.matrix); // lay vi tri cua object3D
				this.update(m4);
			},
			update: function(m4){
				for(e in this.elements){
					this.elements[e] = m4.multiplyVector3(this.elements[e]);
				}
			},
			setPosition: function(v3){
				this._m4.set(
						1, 0, 0, v3.x,
						0,1, 0, v3.y,
						0, 0,1, v3.z,
						0, 0, 0, 1

					);
				this.applyMatrix(this._m4);
			},
			rotateX: function(deg){
				this._m4.makeRotationX(deg);
				this.applyMatrix(this._m4);
			},
			rotateY: function(deg){
				this._m4.makeRotationY(deg);
				this.applyMatrix(this._m4);
			},
			rotateZ: function(deg){
				this._m4.makeRotationZ(deg);
				this.applyMatrix(this._m4);
			},
			// ham di chuyen Object3D theo truc axis va khoang cach distance
			translate: function ( distance, axis ) {

			this.matrix.rotateAxis( axis );
			this.position.addSelf( axis.multiplyScalar( distance ) );
			this.update();
			},
			translateX: function ( distance ) {	// bien doi theo truc X

				this.translate( distance, this._vector.set( 1, 0, 0 ) );

			},

			translateY: function ( distance ) {	// bien doi theo truc Y

				this.translate( distance, this._vector.set( 0, 1, 0 ) );

			},

			translateZ: function ( distance ) { // bien doi theo truc Z

				this.translate( distance, this._vector.set( 0, 0, 1 ) );

			}

			

		};
		return new o3();
	} 
});
