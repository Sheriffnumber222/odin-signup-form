function check () {
    if (document.getElementById("user-password").value == document.getElementById("confirm-password").value) {
        console.log("valid");
        document.getElementById("user-password").setCustomValidity("")
        document.getElementById("confirm-password").setCustomValidity("")
    } else {
        console.log("invalid");
        document.getElementById("user-password").setCustomValidity("Invalid field.")
        document.getElementById("confirm-password").setCustomValidity("Invalid field.")
    }
}
