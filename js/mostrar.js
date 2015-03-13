var $contacto = $("#contactenos-slide"),
	$contenido = $("#contenido-ocultar"),
	$cerrar = $("#cerrar-contacto"),
	$button = $("#mostrar-con"),
	$button2 = $("#mostrar-con2").first();


	function mostrarContacto(){
	$contacto.slideToggle();
	$contenido.slideToggle();
	
	return false;
}

	function ocultarContacto(){
	mostrarContacto();
}

//Eventos
$button.click( mostrarContacto);
$button2.click( mostrarContacto);
$('#cerrar-contacto').click( ocultarContacto);