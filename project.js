<script>
document.getElementById("registrationForm").onsubmit = function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username.trim() === "" || email.trim() === "") {
        alert("Name and E-mail fields cannot be empty.");
        event.preventDefault(); // Prevent form from submitting
    }
};
</script>