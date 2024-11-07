// const form=document.getElementById('contact-form');
// const Name=document.getElementById('Name');
// const email=document.getElementById('email');
// const phone=document.getElementById('phone');

// const name_error=document.getElementById('name_error');
// const email_error=document.getElementById('email_error');

// contact-form.addEventListener('submit',(e) => {

//    var email_check =  (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
//    if (Name.value === '' || Name.value==null )
//    {
//       e.preventDefault();
//       name_error.innerHTML = "Name is requred";
//    }
//    if (!email.value.match(email_check)){
//       e.preventDefault();
//       email_error.innerHTML = "Valid email is required";

//    }

   
// })




































// function checkInputs(){
//    //get values from the inputs

//    const NameValue = Name.value.trim();
//    const emailValue = email.value.trim();
//    const phoneValue = phone.value.trim();

//    if(NameValue=== ''){
//       //show error
//       //add error class
//       setErrorFor(Name ,'Name cannot be blank');
//    } else{
//       //add success class
//       setSuccessFor(Name);
//    }

// }
// function setErrorFor(input,message){
//    const formControl = input.parentElement;//.form-group
//    const small = formControl.querySelector('small');

//    //add error message inside small
//    small.innerText=message;
//    //add error class
//    formControl.className = 'form-group ';
// }
// function setSuccessFor(input){
//    const formControl = input.parentElement;//.form-group
//    //add error class
//    formControl.className = 'form-group';

// }