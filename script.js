$(document).ready(function() {
	$('div').click(function() {
		$(this).toggleClass("highlight");
	});
	$('#container2').resizable();
});