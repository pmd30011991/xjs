X.extend({
	Rectangle: function(v3_1,v3_4){
		var rec = function(){
			X.inherit(X.Object3D(),this);
			var v3_3 = X.v3(v3_4.x,v3_1.y,v3_1.z);
			var v3_2 = X.v3(v3_1.x,v3_4.y,v3_4.z);
			this.elements = [
			                 v3_1,
			                 v3_2,
			                 v3_3,
			                 v3_4 ];
		};
		rec.prototype = {
			constructor: rec,
			getFirstPoint: function(){
				return this.elements[0];
			},
			getSecondPoint: function(){
				return this.elements[1];
			},
			getCenterPoint: function(){
				var center = X.v3();
				for(i in this.elements){
					center.x +=this.elements[i].x;
					center.y +=this.elements[i].y;
				}
				center.x = center.x/this.elements.length;
				center.y = center.y/this.elements.length;
				return center;
			},
			draw: function(ctx){
				ctx.beginPath();
				ctx.moveTo(this.elements[0].x,this.elements[0].y);
				ctx.lineTo(this.elements[1].x,this.elements[1].y);
				ctx.lineTo(this.elements[2].x,this.elements[2].y);
				ctx.lineTo(this.elements[3].x,this.elements[3].y);
				ctx.lineTo(this.elements[0].x,this.elements[0].y);
				ctx.stroke();
				ctx.closePath();
			}
		};

		
		return new rec();
	}
});