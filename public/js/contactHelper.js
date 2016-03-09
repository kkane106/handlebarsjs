onload = function() {
	console.log("LOADED");
	var submit = document.contactForm.submit;
	submit.addEventListener("click", function(e){
		e.preventDefault();
		console.log(e.target.parentNode.message.value);
	});
};