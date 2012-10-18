X.v4= function(x, y, z, w){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = ( w !== undefined )?w : 1;
	
	this.set = function ( x, y, z, w ) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;

	};
	this.copy= function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;
		return this;

	}

	this.add = function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	};

	this.addSelf = function ( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	};

	this.sub= function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	};

	this.subSelf= function ( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	};

	this.multiplyScalar= function ( s ) {

		this.x *= s;
		this.y *= s;
		this.z *= s;
		this.w *= s;

		return this;

	};

	this.divideScalar= function ( s ) {

		if ( s ) {

			this.x /= s;
			this.y /= s;
			this.z /= s;
			this.w /= s;

		} else {

			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 1;

		}

		return this;

	};


	this.negate= function() {

		return this.multiplyScalar( -1 );

	};

	this.dot= function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	};

	this.lengthSq= function () {

		return this.dot( this );

	};

	this.length= function () {

		return Math.sqrt( this.lengthSq() );

	};

	this.normalize= function () {

		return this.divideScalar( this.length() );

	};

	this.setLength= function ( l ) {

		return this.normalize().multiplyScalar( l );

	};
	this.lerpSelf = function ( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	};

	this.clone = function () {

		return new v4( this.x, this.y, this.z, this.w );

	};

}