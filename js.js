function r(x){
	return Math.floor(Math.random()*x)
}
function agregar_javascript()
{
	var l = document.createElement("script")
	l.src = "js_2.js" + "?" + r(10000000000)
	document.head.appendChild(l)
}
function js()
{
	agregar_javascript()
}
