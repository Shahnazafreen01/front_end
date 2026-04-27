let form = document.getElementById("myform");

form.addEventListener("submit",function(e){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message");

    if(name === "" || email === "" || password === "" || confirm === "" || mobile === "") {
        message.innerText = "Complete all the required fields.";
        e.preventDefault();
    }

    else if(!email.includes("@")) {
        message.innerText = "Invalid email";
        e.preventDefault();
    }

    else if(password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        e.preventDefault();
    }

    else if(password !== confirm) {
        message.innerText = "Password do not match";
        e.preventDefault();
    }

    else if(mobile.length != 10 || isNaN(mobile)) {
        message.innerText = "Invalid mobile number";
        e.preventDefault();
    }

    else {
        message.innerText = "Form submitted successfully";
    }

});