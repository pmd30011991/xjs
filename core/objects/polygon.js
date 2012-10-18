X.polygon = function(){
	X.o3.call(this);
	this.edges =[];
	this.vertices =[];
}
X.polygon.prototype = new X.o3();
X.polygon.prototype.addVertex = function(v3,connectors)
{
	this.vertices.push(v3);
	for(var i=0; i<connectors.length;i++)
	{
		if(typeof this.vertices[connectors] !=='undefined')
			this.edges({start:v3,end:this.vertices[connectors]});
	}
}