var passwordTextField,passwordVerificationField;
function togglePasswordTextFieldVisibility() {
    // console.log($("#show").is(':checked'))
    // Loop on all elements of password class
    Array.prototype.forEach.call(document.getElementsByClassName("password"), function(el) {
      if (el.type == "password") {
        el.type = 'text';
      } else {
        el.type = 'password';
      }
    });
}

function validatePassword() {
    if(passwordTextField.value != passwordVerificationField.value) {
        passwordVerificationField.setCustomValidity("Passwords Don't Match");
    } else {
        passwordVerificationField.setCustomValidity('');
    } 
} 

$(document).ready(function() {
    passwordTextField = document.getElementsByName("password")[0];
    passwordTextField.onchange = validatePassword;
    passwordVerificationField = document.getElementsByName("password2")[0];
    passwordVerificationField.onkeyup = validatePassword;
    $("#show").change(togglePasswordTextFieldVisibility);
});
