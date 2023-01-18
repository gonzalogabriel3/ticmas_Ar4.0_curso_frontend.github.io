document.getElementById('boton_contacto').addEventListener('click', function() {
	
	if(document.getElementById('box_model_contacto').style.visibility == "hidden"){
		document.getElementById('box_model_contacto').style.visibility = "visible";
	}else{
		document.getElementById('box_model_contacto').style.visibility = "hidden";
	}
	
})
