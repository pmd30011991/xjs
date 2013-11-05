///////////////////////////////////////////////////////////////////////////
//	Name	: 3D Object
//	Author 	: DuyAnh
//	Date	: 08/11/2012
///////////////////////////////////////////////////////////////////////////
	X.Object3D = function(){
		this.up = new X.v3(0,1,0);	// day chinh la truc Up cua doi tuong , nham xac dinh huong cua doi tuong
		this.position = new X.v3(); // vi tri cua Object3D 
		this.scale = new X.v3(1,1,1);  // ti le cua obj , mac dinh la 1,1,1 hay con goi la chua ty le
		this.rotation = new X.v3();  // vector quay cua obj
		this.visible = true; // bien nay kiem tra xem doi tuong co duoc hien thi hay khong , phuc vu cho viec khu mat khuat
		this.frustumCulled = true; // bien nay xem trong vung frustum co lay ra khong .
		this.matrix = new X.m4(); // ma tran bien doi cua obj
		this._vector = new X.v3(); // bien temp de xai khi can
	}
	X.Object3D.prototype={
		constructor: X.Object3D,
		applyMatrix: function(m4)	// ap dung ma tran cho Object3D này
		{
			this.matrix.multiply(m4,this.maxtrix);	// o day chung ta thuc hien nhan ma tran de chuyen doi he truc toa do
			this.scale.getScaleFormMatrix(this.matrix); // lay vector ti le tu ma tran duoc cho
			this.rotation.getRotationFromMatrix(this.matrix); // tuong tu nhu tren
			this.position.getPositionFromMatrix(this.matrix); // lay vi tri cua object3D
			
		},
		
		// ham di chuyen Object3D theo truc axis va khoang cach distance
		translate: function ( distance, axis ) {

		this.matrix.rotateAxis( axis );
		this.position.addSelf( axis.multiplyScalar( distance ) ); 

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

		

	}
