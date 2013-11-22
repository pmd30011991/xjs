(function(){
	include = function(_dir_){
		script = document.createElement('script');
		script.setAttribute('src',_dir_);
		head = document.head;
		document.head.appendChild(script);	
	};
	include('core/core.js');
	include('core/renders/canvasRender.js');
	include('core/math/v3.js');
	include('core/camera/camera.js');
	//include('core/math/v4.js');
	//include('core/math/m3.js');
	include('core/math/m4.js');
	include('core/objects/Rectangle.js');
	include('core/objects/kimtuthap.js');
//	include('core/scene/scene.js');

	include('core/objects/Object3D.js');

	
})();