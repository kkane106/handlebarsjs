var contact = 	{
								title : "Contact",
								header : "Contact Us",
								form: "<form name='contactForm' class='contactForm'><input type='text' placeholder='Name' name='name'/><br /><input type='email' placeholder='Email' name='email'/><br /><textarea rows='5' cols='50' placeholder='Message...' name='message'></textarea><br /><input type='submit' name='submit' value='Submit'/></form>",
								script: "<script src='js/contactHelper.js'></script>"
							};

exports.getContact = function() {
	return contact;
};