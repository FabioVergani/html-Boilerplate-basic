(function($){
	function at(a,b,c){
		function f(){a.removeEventListener(b,c)}
		f();
		a.addEventListener(b,c);
		return f;
	}
	let f=at($,'DOMContentLoaded',function(x){
		f();
		f=null;
		const $d=x.target;
		console.dir($d);
		//console.dir(getEventListeners(window));
	});
})(window);

