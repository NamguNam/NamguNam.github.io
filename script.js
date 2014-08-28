$(document).ready(function() {
	$('div').click(function() {
		$(this).toggleClass("highlight");
	});
	$('ul').sortable();
});