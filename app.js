function validate() {
    // alert("working")

    const firstname = document.myForm.firstname.value;
    const email = document.myForm.email.value;
    const message = document.myForm.message.value;

    //error
    const name_err = document.querySelector(".name-err")
    const email_err = document.querySelector(".email-err")
    const text_err = document.querySelector(".text-err")

    if (firstname == '') {
        name_err.textContent = "Name field is required";
        return false;
    } else {
        name_err.textContent = '';
    }
    if (email == '') {
        email_err.textContent = "Email field is required";
        return false;
    }
    if (message == '') {
        text_err.textContent = "Text field is required";
        return false;
    }

}
function sendMail() {
    var params = {
        name: document.getElementById("firstname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_569izq7";
    const templateID = "template_ozerp8t";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("firstname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully");
            })
        .catch(err => console.log(err))
}
