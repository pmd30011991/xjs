X.extend({
	kimtuthap: function(v1,v2,v3,v4){
		var p = function(){
			X.inherit(X.Object3D(),this);
			
			this.elements = [
			                 v1,
			                 v2,
			                 v3,
			                 v4 ];
		};
		p.prototype = {
			constructor: p,
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
				ctx.lineTo(this.elements[1].x,this.elements[1].y);
				ctx.moveTo(this.elements[3].x,this.elements[3].y);
				ctx.lineTo(this.elements[0].x,this.elements[0].y);
				ctx.stroke();
				ctx.closePath();
			}
		};

		
		return new p();
	}
});