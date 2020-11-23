getClass = className => document.querySelector(className);
getId = id => document.getElementById(id);

function validateInput(el) {
	const template = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return template.test(String(el.value).toLowerCase());
}

function validateEmpty(el) {
	return el.value !== '' ? true : false;
}

getId('email').addEventListener('change', function() {
	if (!validateInput(this)) {
		getClass('.error').classList.add('active');
		getClass('.error').innerHTML = 'Your email was entered incorrectly!';
	} else {
		getClass('.error').classList.remove('active');
		getClass('.error').innerHTML = '';
	}
});