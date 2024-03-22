

function ShowContactForm() {
    let contactDiv = document.getElementById("contactForm");
    contactDiv.style.display = contactDiv.style.display == "block" ? "none" : "block";

    
}
document.addEventListener('DOMContentLoaded', function() {
    const btnCancel = document.querySelector('.btnCancel');
    const contactForm = document.getElementById('contactForm');
  
    btnCancel.addEventListener('click', function() {
      contactForm.style.display = 'none';
      contactForm.reset();
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const menuItemContact = document.querySelector('.menuItemContact');
    const formContact = document.getElementById('formContact');
  
    menuItemContact.addEventListener('click', function(event) {
      event.preventDefault();
      formContact.reset();
    });
  });
