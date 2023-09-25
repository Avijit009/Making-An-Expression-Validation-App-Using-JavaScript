const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneNumberFormat = /^(\+?88)?01[0-9]{9}$/;
const postCodeFormat = /^[0-9]{4}$/;

// Get all buttons
let emailBtn = document.querySelector('.email-button');
let phoneBtn = document.querySelector('.phone-button');
let postBtn = document.querySelector('.post-button');

// Get all text boxes
let emailInp = document.querySelector('.email_inp');
let phoneInp = document.querySelector('.phone_inp');
let postInp = document.querySelector('.post_inp');

// Get all validation output section
let emailValidate = document.querySelector('.email_validate');
let phoneValidate = document.querySelector('.phone_validate');
let postValidate = document.querySelector('.post_validate');

window.onload = hideContent;


function hideContent() {
    emailInp.style.display = 'none';
    phoneInp.style.display = 'none';
    postInp.style.display = 'none';
    emailValidate.style.display = 'none';
    phoneValidate.style.display = 'none';
    postValidate.style.display = 'none';
}

// Show Email input and message
emailBtn.addEventListener('click', () => {
    hideContent();
    emailInp.style.display = 'block';
    emailValidate.style.display = 'block';
});

emailInp.addEventListener("keyup", () => {
    if (mailformat.test(emailInp.value)) {
        emailValidate.textContent = "Valid Email";
        emailValidate.style.background = 'green';
        emailValidate.style.color = 'white';
    } else {
        emailValidate.textContent = "Invalid email!";
        emailValidate.style.background = 'red';
        emailValidate.style.color = 'white';
    }
});

// Show Phone input and message
phoneBtn.addEventListener('click', () => {
    hideContent();
    phoneInp.style.display = 'block';
    phoneValidate.style.display = 'block';
});

phoneInp.addEventListener("keyup", () => {
    if (phoneNumberFormat.test(phoneInp.value)) {
        phoneValidate.textContent= "Valid Mobile Number";
        phoneValidate.style.background = 'green';
        phoneValidate.style.color = 'white';
    } else {
        phoneValidate.textContent = "Invalid Mobile Number!";
        phoneValidate.style.background = 'red';
        phoneValidate.style.color = 'white';
    }
});

// Show Post Code input and message
postBtn.addEventListener('click', () => {
    hideContent();
    postInp.style.display = 'block';
    postValidate.style.display = 'block';
});

postInp.addEventListener("keyup", () => {
    if (postCodeFormat.test(postInp.value)) {
        postValidate.textContent = "Valid Post Code!";
        postValidate.style.background = 'green';
        postValidate.style.color = 'white';
    } else {
        postValidate.textContent = "Invalid Post Code!";
        postValidate.style.background = 'red';
        postValidate.style.color = 'white';
    }
});
