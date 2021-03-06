X.extend({
	m4: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {
		var m4 = function(){
			this.elements = new Float32Array( 16 );
			this.set(
					
					( n11 !== undefined ) ? n11 : 1, n12 || 0, n13 || 0, n14 || 0,
					n21 || 0, ( n22 !== undefined ) ? n22 : 1, n23 || 0, n24 || 0,
					n31 || 0, n32 || 0, ( n33 !== undefined ) ? n33 : 1, n34 || 0,
					n41 || 0, n42 || 0, n43 || 0, ( n44 !== undefined ) ? n44 : 1

				);
		};
		m4.prototype = {
				constructor: m4,
				set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

					var te = this.elements;

					te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
					te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
					te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
					te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;

					return this;

				},

				identity: function () {

					this.set(

						1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1

					);

					return this;

				},

				copy: function ( m ) {

					var me = m.elements;

					this.set(

						me[0], me[4], me[8], me[12],
						me[1], me[5], me[9], me[13],
						me[2], me[6], me[10], me[14],
						me[3], me[7], me[11], me[15]

					);

					return this;

				},
				multiply: function ( a, b ) {

					var ae = a.elements;
					var be = b.elements;
					var te = this.elements;

					var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
					var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
					var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
					var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

					var b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
					var b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
					var b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
					var b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];

					te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
					te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
					te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
					te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

					te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
					te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
					te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
					te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

					te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
					te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
					te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
					te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

					te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
					te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
					te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
					te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

					return this;

				},

				multiplySelf: function ( m ) {

					return this.multiply( this, m );

				},
				multiplyVector3: function ( v ) {

					var te = this.elements;

					var vx = v.x, vy = v.y, vz = v.z;
					var d = 1 / ( te[3] * vx + te[7] * vy + te[11] * vz + te[15] );

					v.x = ( te[0] * vx + te[4] * vy + te[8] * vz + te[12] ) * d;
					v.y = ( te[1] * vx + te[5] * vy + te[9] * vz + te[13] ) * d;
					v.z = ( te[2] * vx + te[6] * vy + te[10] * vz + te[14] ) * d;

					return v;

				},

				multiplyVector4: function ( v ) {

					var te = this.elements;
					var vx = v.x, vy = v.y, vz = v.z, vw = v.w;

					v.x = te[0] * vx + te[4] * vy + te[8] * vz + te[12] * vw;
					v.y = te[1] * vx + te[5] * vy + te[9] * vz + te[13] * vw;
					v.z = te[2] * vx + te[6] * vy + te[10] * vz + te[14] * vw;
					v.w = te[3] * vx + te[7] * vy + te[11] * vz + te[15] * vw;

					return v;

				},

				rotateAxis: function ( v ) {

					var te = this.elements;
					var vx = v.x, vy = v.y, vz = v.z;

					v.x = vx * te[0] + vy * te[4] + vz * te[8];
					v.y = vx * te[1] + vy * te[5] + vz * te[9];
					v.z = vx * te[2] + vy * te[6] + vz * te[10];

					v.normalize();

					return v;

				},

				crossVector: function ( a ) {

					var te = this.elements;
					var v = new X.v4();

					v.x = te[0] * a.x + te[4] * a.y + te[8] * a.z + te[12] * a.w;
					v.y = te[1] * a.x + te[5] * a.y + te[9] * a.z + te[13] * a.w;
					v.z = te[2] * a.x + te[6] * a.y + te[10] * a.z + te[14] * a.w;

					v.w = ( a.w ) ? te[3] * a.x + te[7] * a.y + te[11] * a.z + te[15] * a.w : 1;

					return v;

				},

				transpose: function () {

					var te = this.elements;
					var tmp;

					tmp = te[1]; te[1] = te[4]; te[4] = tmp;
					tmp = te[2]; te[2] = te[8]; te[8] = tmp;
					tmp = te[6]; te[6] = te[9]; te[9] = tmp;

					tmp = te[3]; te[3] = te[12]; te[12] = tmp;
					tmp = te[7]; te[7] = te[13]; te[13] = tmp;
					tmp = te[11]; te[11] = te[14]; te[14] = tmp;

					return this;

				},

				getPosition: function () {

					var te = this.elements;
					return m4.__v1.set( te[12], te[13], te[14] );

				},

				setPosition: function ( v ) {

					var te = this.elements;

					te[12] = v.x;
					te[13] = v.y;
					te[14] = v.z;

					return this;

				},

				getColumnX: function () {

					var te = this.elements;
					return X.m4.__v1.set( te[0], te[1], te[2] );

				},

				getColumnY: function () {

					var te = this.elements;
					return X.m4.__v1.set( te[4], te[5], te[6] );

				},

				getColumnZ: function() {

					var te = this.elements;
					return X.m4.__v1.set( te[8], te[9], te[10] );

				},

				getInverse: function ( m ) {

					// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
					var te = this.elements;
					var me = m.elements;

					var n11 = me[0], n12 = me[4], n13 = me[8], n14 = me[12];
					var n21 = me[1], n22 = me[5], n23 = me[9], n24 = me[13];
					var n31 = me[2], n32 = me[6], n33 = me[10], n34 = me[14];
					var n41 = me[3], n42 = me[7], n43 = me[11], n44 = me[15];

					te[0] = n23*n34*n42 - n24*n33*n42 + n24*n32*n43 - n22*n34*n43 - n23*n32*n44 + n22*n33*n44;
					te[4] = n14*n33*n42 - n13*n34*n42 - n14*n32*n43 + n12*n34*n43 + n13*n32*n44 - n12*n33*n44;
					te[8] = n13*n24*n42 - n14*n23*n42 + n14*n22*n43 - n12*n24*n43 - n13*n22*n44 + n12*n23*n44;
					te[12] = n14*n23*n32 - n13*n24*n32 - n14*n22*n33 + n12*n24*n33 + n13*n22*n34 - n12*n23*n34;
					te[1] = n24*n33*n41 - n23*n34*n41 - n24*n31*n43 + n21*n34*n43 + n23*n31*n44 - n21*n33*n44;
					te[5] = n13*n34*n41 - n14*n33*n41 + n14*n31*n43 - n11*n34*n43 - n13*n31*n44 + n11*n33*n44;
					te[9] = n14*n23*n41 - n13*n24*n41 - n14*n21*n43 + n11*n24*n43 + n13*n21*n44 - n11*n23*n44;
					te[13] = n13*n24*n31 - n14*n23*n31 + n14*n21*n33 - n11*n24*n33 - n13*n21*n34 + n11*n23*n34;
					te[2] = n22*n34*n41 - n24*n32*n41 + n24*n31*n42 - n21*n34*n42 - n22*n31*n44 + n21*n32*n44;
					te[6] = n14*n32*n41 - n12*n34*n41 - n14*n31*n42 + n11*n34*n42 + n12*n31*n44 - n11*n32*n44;
					te[10] = n12*n24*n41 - n14*n22*n41 + n14*n21*n42 - n11*n24*n42 - n12*n21*n44 + n11*n22*n44;
					te[14] = n14*n22*n31 - n12*n24*n31 - n14*n21*n32 + n11*n24*n32 + n12*n21*n34 - n11*n22*n34;
					te[3] = n23*n32*n41 - n22*n33*n41 - n23*n31*n42 + n21*n33*n42 + n22*n31*n43 - n21*n32*n43;
					te[7] = n12*n33*n41 - n13*n32*n41 + n13*n31*n42 - n11*n33*n42 - n12*n31*n43 + n11*n32*n43;
					te[11] = n13*n22*n41 - n12*n23*n41 - n13*n21*n42 + n11*n23*n42 + n12*n21*n43 - n11*n22*n43;
					te[15] = n12*n23*n31 - n13*n22*n31 + n13*n21*n32 - n11*n23*n32 - n12*n21*n33 + n11*n22*n33;
					this.multiplyScalar( 1 / m.determinant() );

					return this;

				},

				compose: function ( translation, rotation, scale ) {

					var te = this.elements;
					var mRotation = X.m4.__m1;
					var mScale = X.m4.__m2;

					mRotation.identity();
					mRotation.setRotationFromQuaternion( rotation );

					mScale.makeScale( scale.x, scale.y, scale.z );

					this.multiply( mRotation, mScale );

					te[12] = translation.x;
					te[13] = translation.y;
					te[14] = translation.z;

					return this;

				},

				decompose: function ( translation, rotation, scale ) {

					var te = this.elements;

					// grab the axis vectors
					var x = X.m4.__v1;
					var y = X.m4.__v2;
					var z = X.m4.__v3;

					x.set( te[0], te[1], te[2] );
					y.set( te[4], te[5], te[6] );
					z.set( te[8], te[9], te[10] );

					translation = ( translation instanceof X.v3 ) ? translation : new X.v3();
					rotation = ( rotation instanceof THREE.Quaternion ) ? rotation : new THREE.Quaternion();
					scale = ( scale instanceof X.v3 ) ? scale : new X.v3();

					scale.x = x.length();
					scale.y = y.length();
					scale.z = z.length();

					translation.x = te[12];
					translation.y = te[13];
					translation.z = te[14];

					// scale the rotation part

					var matrix = X.m4.__m1;

					matrix.copy( this );

					matrix.elements[0] /= scale.x;
					matrix.elements[1] /= scale.x;
					matrix.elements[2] /= scale.x;

					matrix.elements[4] /= scale.y;
					matrix.elements[5] /= scale.y;
					matrix.elements[6] /= scale.y;

					matrix.elements[8] /= scale.z;
					matrix.elements[9] /= scale.z;
					matrix.elements[10] /= scale.z;

					rotation.setFromRotationMatrix( matrix );

					return [ translation, rotation, scale ];

				},

				extractPosition: function ( m ) {

					var te = this.elements;
					var me = m.elements;

					te[12] = me[12];
					te[13] = me[13];
					te[14] = me[14];

					return this;

				},

				extractRotation: function ( m ) {

					var te = this.elements;
					var me = m.elements;

					var vector = X.m4.__v1;

					var scaleX = 1 / vector.set( me[0], me[1], me[2] ).length();
					var scaleY = 1 / vector.set( me[4], me[5], me[6] ).length();
					var scaleZ = 1 / vector.set( me[8], me[9], me[10] ).length();

					te[0] = me[0] * scaleX;
					te[1] = me[1] * scaleX;
					te[2] = me[2] * scaleX;

					te[4] = me[4] * scaleY;
					te[5] = me[5] * scaleY;
					te[6] = me[6] * scaleY;

					te[8] = me[8] * scaleZ;
					te[9] = me[9] * scaleZ;
					te[10] = me[10] * scaleZ;

					return this;

				},

				translate: function ( v ) {

					var te = this.elements;
					var x = v.x, y = v.y, z = v.z;

					te[12] = te[0] * x + te[4] * y + te[8] * z + te[12];
					te[13] = te[1] * x + te[5] * y + te[9] * z + te[13];
					te[14] = te[2] * x + te[6] * y + te[10] * z + te[14];
					te[15] = te[3] * x + te[7] * y + te[11] * z + te[15];

					return this;

				},

				rotateX: function ( angle ) {

					var te = this.elements;
					var m12 = te[4];
					var m22 = te[5];
					var m32 = te[6];
					var m42 = te[7];
					var m13 = te[8];
					var m23 = te[9];
					var m33 = te[10];
					var m43 = te[11];
					var c = Math.cos( angle );
					var s = Math.sin( angle );

					te[4] = c * m12 + s * m13;
					te[5] = c * m22 + s * m23;
					te[6] = c * m32 + s * m33;
					te[7] = c * m42 + s * m43;

					te[8] = c * m13 - s * m12;
					te[9] = c * m23 - s * m22;
					te[10] = c * m33 - s * m32;
					te[11] = c * m43 - s * m42;

					return this;

				},

				rotateY: function ( angle ) {

					var te = this.elements;
					var m11 = te[0];
					var m21 = te[1];
					var m31 = te[2];
					var m41 = te[3];
					var m13 = te[8];
					var m23 = te[9];
					var m33 = te[10];
					var m43 = te[11];
					var c = Math.cos( angle );
					var s = Math.sin( angle );

					te[0] = c * m11 - s * m13;
					te[1] = c * m21 - s * m23;
					te[2] = c * m31 - s * m33;
					te[3] = c * m41 - s * m43;

					te[8] = c * m13 + s * m11;
					te[9] = c * m23 + s * m21;
					te[10] = c * m33 + s * m31;
					te[11] = c * m43 + s * m41;

					return this;

				},

				rotateZ: function ( angle ) {

					var te = this.elements;
					var m11 = te[0];
					var m21 = te[1];
					var m31 = te[2];
					var m41 = te[3];
					var m12 = te[4];
					var m22 = te[5];
					var m32 = te[6];
					var m42 = te[7];
					var c = Math.cos( angle );
					var s = Math.sin( angle );

					te[0] = c * m11 + s * m12;
					te[1] = c * m21 + s * m22;
					te[2] = c * m31 + s * m32;
					te[3] = c * m41 + s * m42;

					te[4] = c * m12 - s * m11;
					te[5] = c * m22 - s * m21;
					te[6] = c * m32 - s * m31;
					te[7] = c * m42 - s * m41;

					return this;

				},

				rotateByAxis: function ( axis, angle ) {

					var te = this.elements;

					// optimize by checking axis

					if ( axis.x === 1 && axis.y === 0 && axis.z === 0 ) {

						return this.rotateX( angle );

					} else if ( axis.x === 0 && axis.y === 1 && axis.z === 0 ) {

						return this.rotateY( angle );

					} else if ( axis.x === 0 && axis.y === 0 && axis.z === 1 ) {

						return this.rotateZ( angle );

					}

					var x = axis.x, y = axis.y, z = axis.z;
					var n = Math.sqrt(x * x + y * y + z * z);

					x /= n;
					y /= n;
					z /= n;

					var xx = x * x, yy = y * y, zz = z * z;
					var c = Math.cos( angle );
					var s = Math.sin( angle );
					var oneMinusCosine = 1 - c;
					var xy = x * y * oneMinusCosine;
					var xz = x * z * oneMinusCosine;
					var yz = y * z * oneMinusCosine;
					var xs = x * s;
					var ys = y * s;
					var zs = z * s;

					var r11 = xx + (1 - xx) * c;
					var r21 = xy + zs;
					var r31 = xz - ys;
					var r12 = xy - zs;
					var r22 = yy + (1 - yy) * c;
					var r32 = yz + xs;
					var r13 = xz + ys;
					var r23 = yz - xs;
					var r33 = zz + (1 - zz) * c;

					var m11 = te[0], m21 = te[1], m31 = te[2], m41 = te[3];
					var m12 = te[4], m22 = te[5], m32 = te[6], m42 = te[7];
					var m13 = te[8], m23 = te[9], m33 = te[10], m43 = te[11];
					var m14 = te[12], m24 = te[13], m34 = te[14], m44 = te[15];

					te[0] = r11 * m11 + r21 * m12 + r31 * m13;
					te[1] = r11 * m21 + r21 * m22 + r31 * m23;
					te[2] = r11 * m31 + r21 * m32 + r31 * m33;
					te[3] = r11 * m41 + r21 * m42 + r31 * m43;

					te[4] = r12 * m11 + r22 * m12 + r32 * m13;
					te[5] = r12 * m21 + r22 * m22 + r32 * m23;
					te[6] = r12 * m31 + r22 * m32 + r32 * m33;
					te[7] = r12 * m41 + r22 * m42 + r32 * m43;

					te[8] = r13 * m11 + r23 * m12 + r33 * m13;
					te[9] = r13 * m21 + r23 * m22 + r33 * m23;
					te[10] = r13 * m31 + r23 * m32 + r33 * m33;
					te[11] = r13 * m41 + r23 * m42 + r33 * m43;

					return this;

				},

				scale: function ( v ) {

					var te = this.elements;
					var x = v.x, y = v.y, z = v.z;

					te[0] *= x; te[4] *= y; te[8] *= z;
					te[1] *= x; te[5] *= y; te[9] *= z;
					te[2] *= x; te[6] *= y; te[10] *= z;
					te[3] *= x; te[7] *= y; te[11] *= z;

					return this;

				},

				makeTranslation: function ( x, y, z ) {

					this.set(

						1, 0, 0, x,
						0, 1, 0, y,
						0, 0, 1, z,
						0, 0, 0, 1

					);

					return this;

				},

				makeRotationX: function ( theta ) {

					var c = Math.cos( theta ), s = Math.sin( theta );

					this.set(

						1, 0,  0, 0,
						0, c, -s, 0,
						0, s,  c, 0,
						0, 0,  0, 1

					);

					return this;

				},

				makeRotationY: function ( theta ) {

					var c = Math.cos( theta ), s = Math.sin( theta );

					this.set(

						 c, 0, s, 0,
						 0, 1, 0, 0,
						-s, 0, c, 0,
						 0, 0, 0, 1

					);

					return this;

				},

				makeRotationZ: function ( theta ) {

					var c = Math.cos( theta ), s = Math.sin( theta );

					this.set(

						c, -s, 0, 0,
						s,  c, 0, 0,
						0,  0, 1, 0,
						0,  0, 0, 1

					);

					return this;

				},

				makeRotationAxis: function ( axis, angle ) {

					// Based on http://www.gamedev.net/reference/articles/article1199.asp

					var c = Math.cos( angle );
					var s = Math.sin( angle );
					var t = 1 - c;
					var x = axis.x, y = axis.y, z = axis.z;
					var tx = t * x, ty = t * y;

					this.set(

						tx * x + c, tx * y - s * z, tx * z + s * y, 0,
						tx * y + s * z, ty * y + c, ty * z - s * x, 0,
						tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
						0, 0, 0, 1

					);

					 return this;

				},

				makeScale: function ( x, y, z ) {

					this.set(

						x, 0, 0, 0,
						0, y, 0, 0,
						0, 0, z, 0,
						0, 0, 0, 1

					);

					return this;

				},
				clone: function () {

					var te = this.elements;

					return new m4(

						te[0], te[4], te[8], te[12],
						te[1], te[5], te[9], te[13],
						te[2], te[6], te[10], te[14],
						te[3], te[7], te[11], te[15]

					);

				}

		};
		m4.__v1 = new X.v3();
		m4.__v2 = new X.v3();
		m4.__v3 = new X.v3();
		m4.__m1 = new m4();
		m4.__m2 = new m4();
		return new m4();
		
	}
});