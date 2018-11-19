$(document).ready(function () {
    console.log("js work, good");

     // mobail nav
	$("#navToggle").click(function() {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    // this line ▼ prevents content scroll-behind
	    $("body").toggleClass("locked"); 
	});

	$(".overlayMenu a").click(function() {
		$("#navToggle").toggleClass("active");
	    $(".overlay").toggleClass("open");
	    $("body").toggleClass("locked"); 
	});



});