function r(x){
	return Math.floor(Math.random()*x)
}
function agregar_javascript()
{
	var l = document.createElement("script")
	var parte = location.href.split("/").slice(-2)[0]=="ari7a.github.io"?"":"../"
	l.src = parte+"js/js_2.js" + "?" + r(10000000000)
	document.head.appendChild(l)
}
function js()
{
	agregar_javascript()
}
