var $menu = $(".content"),
	$button = $(".expander").first();

	function expandir(){
	$('.expander').simpleexpand();
	return false;
}
//Eventos
$button.click( expandir);