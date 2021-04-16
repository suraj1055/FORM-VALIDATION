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
    const UsernameVal = Username.value;
    const EmailVal = Email.value;
    const MobileVal = Mobile.value;
    const AgeVal = Age.value;
    const PasswordVal = Password.value;
    const CPasswordVal = CPassword.value;

    //Validate Username
    if (UsernameVal === "") {
        setErrorMsg(Username, 'username cannot be blank');
        event.preventDefault();
    }
    else if (UsernameVal.length <= 2) {
        setErrorMsg(Username, 'username should be min 3 characters');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Username);
    }

    //Validate Email
    if (EmailVal === "") {
        setErrorMsg(Email, 'email cannot be blank');
        event.preventDefault();
    }
    else if (!isEmail(EmailVal)) {
        setErrorMsg(Email, 'email not valid');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Email);
    }

    //Validate Mobile
    if (MobileVal === "") {
        setErrorMsg(Mobile, 'Mobile cannot be blank');
        event.preventDefault();
    }
    else if (MobileVal < 10) {
        setErrorMsg(Mobile, 'Mobile Number Not Valid');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Mobile);
    }

    //Validate Age
    if (AgeVal === "") {
        setErrorMsg(Age, 'Age cannot be blank');
        event.preventDefault();
    }
    else if (AgeVal.length > 2) {
        setErrorMsg(Age, 'Age not valid');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Age);
    }

    //Validate Password
    if (PasswordVal === "") {
        setErrorMsg(Password, 'Password cannot be blank');
        event.preventDefault();
    }
    else if (PasswordVal < 8) {
        setErrorMsg(Password, 'Passowrd Should Be Min 8 Char');
        event.preventDefault();
    }
    else {
        setSuccessMsg(Password);
    }

    //Validate Confirm Password
    if (CPasswordVal === "") {
        setErrorMsg(CPassword, 'Please Enter Confirm Password');
        event.preventDefault();
    }
    else if (CPasswordVal != PasswordVal) {
        setErrorMsg(CPassword, 'Password Does not Match');
        event.preventDefault();
    }
    else {
        setSuccessMsg(CPassword);
    }

})

//Defining the isEmail function

const isEmail = (EmailVal) => {
    var atSymbol = EmailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = EmailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === EmailVal.length - 1) return false;
    return true;
}

//Defining the Error function

function setErrorMsg(input, msg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = msg;
    formcontrol.className = "form-control error"
}

//Defining the success function

function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control success"
}
