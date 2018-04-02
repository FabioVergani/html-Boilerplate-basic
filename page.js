($=>{
	const at=(a,b,c)=>{
		const f=()=>{a.removeEventListener(b,c)};
		f();
		a.addEventListener(b,c);
		return f;
	};
	let f=at($,'DOMContentLoaded',x=>{
		f();
		f=null;
		const $d=x.target;
		console.dir($d);
	});
})(window);