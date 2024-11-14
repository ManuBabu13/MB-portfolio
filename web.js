
emailjs.init("Q0E7mOuLLGtVrhcNr");  // Replace with your actual EmailJS user ID

// Validation function
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }
    return true;
}

// Email sending function
function sendmail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceId = "service_z5p0eb5";
    const templateId = "template_qtnzgyw";

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            console.log(res);
            alert("Message sent successfully");

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send message. Please try again.");
        });
}

// Handle submit event
function handleSubmit() {
    if (validateForm()) {
        sendmail();
    }
}


































// function checkInputs(){
//    //get values from the inputs

//    const NameValue = Name.value.trim();
//    const emailValue = email.value.trim();
//    const phoneValue = phone.value.trim();

//    if(NameValue=== ''){
//       //show error
//       //add error class
