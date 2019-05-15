//condition: last tag before '</body>'
(w=>{
	const d=w.document;
	//$id=x=>d.getElementById(x);
	//..
	d.getElementById('script').remove();
	//..
	d.documentElement.classList.add('loaded');
})(this);