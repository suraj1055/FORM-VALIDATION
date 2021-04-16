// Accessing all the elements

const Form = document.getElementById("form");
const Username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Mobile = document.getElementById("Mobile");
const Age = document.getElementById("Age");
const Password = document.getElementById("Password");
const CPassword = document.getElementById("CPassword");

//Events

Form.addEventListener("submit", (event) => {
    // event.preventDefault();
    validate();
})

//Defining the isEmail function

const isEmail = (EmailVal) => {
    var atSymbol = EmailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = EmailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === EmailVal.length - 1) return false;
    return true;
}

//Defining the Validate function

const validate = () => {
    const UsernameVal = Username.value.trim();
    const EmailVal = Email.value.trim();
    const MobileVal = Mobile.value.trim();
    const AgeVal = Age.value.trim();
    const PasswordVal = Password.value.trim();
    const CPasswordVal = CPassword.value.trim();

    //Validate Username
    if(UsernameVal === ""){
        setErrorMsg(Username, 'username cannot be blank');
    }
    else if(UsernameVal.length <= 2){
        setErrorMsg(Username, 'username should be min 3 characters');
    }
    else{
        setSuccessMsg(Username);
    }

    //Validate Email
    if(EmailVal === ""){
        setErrorMsg(Email, 'email cannot be blank');
    }
    else if(!isEmail(EmailVal)){
        setErrorMsg(Email, 'email not valid');
    }
    else{
        setSuccessMsg(Email);
    }

    //Validate Mobile
    if(MobileVal === ""){
        setErrorMsg(Mobile, 'Mobile cannot be blank');
    }
    else if(MobileVal < 10){
        setErrorMsg(Mobile, 'Mobile Number Not Valid');
    }
    else{
        setSuccessMsg(Mobile);
    }

    //Validate Age
    if(AgeVal === ""){
        setErrorMsg(Age, 'Age cannot be blank');
    }
    else if(AgeVal.length > 2){
        setErrorMsg(Age, 'Age not valid');
    }
    else{
        setSuccessMsg(Age);
    }

    //Validate Password
    if(PasswordVal === ""){
        setErrorMsg(Password, 'Password cannot be blank');
    }
    else if(PasswordVal < 8){
        setErrorMsg(Password, 'Passowrd Should Be Min 8 Char');
    }
    else{
        setSuccessMsg(Password);
    }

    //Validate Confirm Password
    if(CPasswordVal === ""){
        setErrorMsg(CPassword, 'Please Enter Confirm Password');
    }
    else if(CPasswordVal != PasswordVal){
        setErrorMsg(CPassword, 'Password Does not Match');
    }
    else{
        setSuccessMsg(CPassword);
    }

}

//Defining the Error function

function setErrorMsg(input, msg){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = msg;
    formcontrol.className = "form-control error"
}

//Defining the success function

function setSuccessMsg(input){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control success"
}
