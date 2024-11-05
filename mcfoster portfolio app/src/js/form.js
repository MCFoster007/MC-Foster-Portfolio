
function test(){
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;
// var button = document.querySelector('.button').value;
// var form = document.querySelector('form').value;
// var errorElement = document.getElementById('error');

// const handleFormSubmission = (event) => {
//     event.preventDefault(); 

    // if (username.value && title.value && content.value) {
    //     const contactFormData = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value
    //     };
    //     const allContactData = JSON.parse (localStorage.getItem("userData")) || [];
    //     allContactData.push(contactFormData)
        
    //     localStorage.setItem("userData", JSON.stringify(allContactData));
    //     window.location.href = 'contactform.html';
    //     name.value = '';
    //     email.value = '';
    //     message.value = '';
    // } else {
    //     errorElement.textContent = "Error: Complete form."; 
      
    // }
    var name = localStorage.setItem("name", name);
    var email = localStorage.setItem("email", email);
    var message = localStorage.setItem("message", message);
};

// button.addEventListener('click', handleFormSubmission); 
