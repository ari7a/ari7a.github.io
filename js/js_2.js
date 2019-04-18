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
function cambiar_juventus(){
	nom_juventus_a.innerHTML = document.querySelector("#nom_juventus").value
	num_juventus_a.innerHTML = document.querySelector("#num_juventus").value
}
function principal(){
	document.querySelector("a").innerHTML = document.querySelector("meta[property='og:description']").content
	document.title = document.querySelector("meta[property='og:site_name']").content
	agregar_estilo()
	setTimeout(mostrar,100)
	if(location.href.includes("Juventus")){
		setInterval(cambiar_juventus,500)
	}
}
principal()
