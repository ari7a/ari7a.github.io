function agregar_estilo(){
	var l = document.createElement("link")
	var parte = location.href.split("/").slice(-2)[0]=="ari7a.github.io"?"":"../"
	l.href = parte+"css/estilo.css" + "?" + r(10000000000)
	l.rel = "stylesheet"
	document.head.appendChild(l)
}
function mostrar(){
	document.body.style.display="block"
}
function principal(){
	document.querySelector("a").innerHTML = document.querySelector("meta[property='og:description']").content
	document.title = document.querySelector("meta[property='og:site_name']").content
	agregar_estilo()
	setTimeout(mostrar,100)
}
principal()
