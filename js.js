function r(x){
	return Math.floor(Math.random()*x)
}
function agregar_estilo()
{
	var l = document.createElement("link")
	l.href = "estilo.css" + "?" + r(10000000000)
	l.rel = "stylesheet"
	document.head.appendChild(l)	
}
function js()
{
	agregar_estilo()
	document.body.style.display="block"
}