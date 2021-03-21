const btnOpenSlideMenu = document.querySelector('#side-menu');
const openSlideIcon = document.querySelector('.icon-circle-right');
const btnclosedSlideMenu = document.querySelector('#closed-side-menu');

openSlideIcon.addEventListener('mouseenter', e => {
	document.querySelector('#side-menu').style.width = '245px';
	e.target.style.transition = '0.5s';
	e.target.style.display = 'none';
});

const closedSlideMenu = () => {
	btnOpenSlideMenu.style.width = '0';
	document.querySelector('#main').style.marginLeft = '0';
	openSlideIcon.style.transition = '0.5s';
	openSlideIcon.style.display = 'block';
};

window.onload = () => {
	let emailModalState = false;
	const closeModalBtn = document.getElementsByClassName(
		'email-modal__close-btn'
	)[0];
	const emailModal = document.getElementsByClassName('email-modal')[0];
	const emailInput = document.getElementsByClassName('email-modal__input')[0];
	const errorMessage = document.getElementsByClassName(
		'email-modal__error-message'
	)[0];
	const sendBtn = document.getElementsByClassName('email-modal__button')[0];
	const emailForm = document.getElementsByClassName('email-modal__form')[0];
	const notInterested = document.getElementsByClassName(
		'email-modal__decline'
	)[0];

	document.body.addEventListener('mouseleave', () => {
		if (emailModalState == false) {
			emailModal.classList.add('email-modal__visibile');
			emailModalState = true;
		}
	});

	const closeEmailModal = () => {
		emailModal.classList.remove('email-modal__visibile');
	};

	closeModalBtn.addEventListener('click', () => {
		closeEmailModal();
	});

	notInterested.addEventListener('click', () => {
		closeEmailModal();
	});

	const validEmail = email => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const addError = () => {
		errorMessage.style.transition = 'all 0.3s ease-in-out';
		errorMessage.style.visibility = 'visible';
		emailForm.classList.add('email-modal__form-error');
	};

	const removeError = () => {
		errorMessage.style.visibility = 'hidden';
		emailForm.classList.remove('email-modal__form-error');
		errorMessage.style.transition = 'all 0.3s ease-in-out';
	};

	sendBtn.addEventListener('click', () => {
		if (validEmail(emailInput.value)) {
			/*Thank you message HERE*/
			removeError();
			thankYouMessage();
			setTimeout(() => {
				closeEmailModal();
			}, 3000);
		} else {
			addError();
		}
	});

	const thankYouMessage = () => {
		document
			.getElementsByClassName('email-thankyou')[0]
			.classList.add('email-thankyou__email-submited');
	};
};
