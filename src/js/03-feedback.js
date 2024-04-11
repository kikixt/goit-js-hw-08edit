import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormStateToLocalStorage = throttle(() => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);


feedbackForm.addEventListener('input', saveFormStateToLocalStorage);

window.addEventListener('DOMContentLoaded', () => {
    const storedFormState = localStorage.getItem('feedback-form-state');
    if (storedFormState) {
        const { email, message } = JSON.parse(storedFormState);
        emailInput.value = email;
        messageInput.value = message;
    }
});

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    console.log({
        email: emailInput.value,
        message: messageInput.value
    });

    const formState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));

    emailInput.value = '';
    messageInput.value = '';
});
