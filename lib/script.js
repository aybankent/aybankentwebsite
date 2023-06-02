/* Scroll Javascript */

let menu = document.querySelector
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true

});

sr.reveal ('.hero-text',{delay:200, origin: 'top'});
 
/* Button Javascript */

const aboutButton = document.querySelector('.btn:nth-of-type(1)');
aboutButton.addEventListener('click', scrollToAbout);

const projectsButton = document.querySelector('.btn:nth-of-type(2)');
projectsButton.addEventListener('click', scrollToProjects);

function scrollToAbout(event) {
  event.preventDefault();

const aboutSectionId = '#about';

  document.querySelector(aboutSectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToProjects(event) {
  event.preventDefault();
  
  const gallerySectionId = '#portfolio';

  document.querySelector(gallerySectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

/* Navi Javascript */

      document.addEventListener('DOMContentLoaded', function() {
          // Get the navigation links
          var navLinks = document.querySelectorAll('.navlist a');

          navLinks.forEach(function(link) {
              link.addEventListener('click', function(event) {
                  event.preventDefault(); // Prevent default link behavior

                  var targetSection = link.getAttribute('href'); // Get the target section ID
                  var targetElement = document.querySelector(targetSection); // Get the target section element

                  targetElement.scrollIntoView({ behavior: 'smooth' });
              });
          });
      });

/* Contacts Javascript */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

input.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener('blur', blurFunc);
});

// Initialize fields object
let fields = {};

// Function to check if a value is not empty
function isNotEmpty(value) {
  return value.trim().length > 0;
}

// Function to check if a value is a number
function isNumber(num) {
  return !isNaN(num);
}

// Function to check if a value is a valid email address
function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

// Function to perform field validation
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.classList.add('placeholderRed');
  } else {
    field.classList.remove('placeholderRed');
  }

  return isFieldValid;
}

// Function to validate the form
function isValid() {
  let valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.phoneNumber, isNumber);
  valid &= fieldValidation(fields.question, isNotEmpty);

  return valid;
}

// User class
class User {
  constructor(firstName, lastName, email, phone, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.question = question;
  }
}

// Function to handle form submission
function sendMessage() {

  if (isValid()) {
    let usr = new User(
      fields.firstName.value,
      fields.lastName.value, 
      fields.email.value,
      fields.phoneNumber.checked,
      fields.question.value
    );

    alert(`${usr.firstName}, Thanks For Your Message.`);
  } else {
    alert("There was an error.");
  }
}
