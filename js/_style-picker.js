(function() {
	"use strict";

	$(".style-picker").on("click", "> div", function (e) {
		var $el = $(e.currentTarget),
			id = $el.data("itemId"),
			$parent = $el.closest(".styles");

		$parent.children(".style").hide();
		$parent.children(".style[data-item-id=" + id + "]").show();
	});
})();
$(function(){
	var navbar = $('header>.container');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});