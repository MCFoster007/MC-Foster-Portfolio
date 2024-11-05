const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.querySelector('.button');
const form = document.querySelector('form');
const errorElement = document.getElementById('error');

const handleFormSubmission = (event) => {
    event.preventDefault(); 

    if (username.value && title.value && content.value) {
        const contactFormData = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        const allContactData = JSON.parse (localStorage.getItem("userData")) || [];
        allContactData.push(contactFormData)
        
        localStorage.setItem("userData", JSON.stringify(allContactData));
        window.location.href = 'blog.html';
        name.value = '';
        email.value = '';
        message.value = '';
    } else {
        errorElement.textContent = "Error: Complete form."; 
      
    }
};

// button.addEventListener('click', handleFormSubmission); 
