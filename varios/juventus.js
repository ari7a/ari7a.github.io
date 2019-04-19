function cambiar_juventus(){
	nom_juventus_a.innerHTML = document.querySelector("#nom_juventus").value
	num_juventus_a.innerHTML = document.querySelector("#num_juventus").value
}
function cambiar_juventus_2(){
	var x = document.querySelector("#num_juventus").value
	var y = document.querySelector("#nom_juventus").value
	var texto = ("https://res.cloudinary.com/assetmanagerpim/images/co_rgb:000000,fl_text_no_trim.relative,g_center,l_text:Juventus%20FC%20-%20Season%202018-2019%20-%20Back%20numbers.ttf_900_center:" + x + "/a_0,fl_layer_apply,x_44,y_-100/co_rgb:000000,fl_text_no_trim.relative,g_center,l_text:Juventus%20Fans-Regular.otf_210_center:" + y + "/a_0,fl_layer_apply,x_-58,y_-697/c_scale,h_1000,w_1000/q_98/a660aada8d6942719cf9a97b014dae91_9366/EA0472.jpg");
	document.body.querySelector("img").src = texto
}

function principal_juventus(){
	if(location.href.includes("Juventus.html")){
		setInterval(cambiar_juventus,500)
	}
}

principal_juventus()
