X.extend({
	Rectangle: function(){
		var rec = function(v3_1,v3_2){
			this.v3_1 = v3_1;
			this.v3_2 = v3_2;
		};
		rec.prototype = {
			constructor: rec,
			getFirstPoint: function(){
				return this.v3_1;
			},
			getSecondPoint: function(){
				return this.v3_2;
			}
		};
		return new rec();
	}
});