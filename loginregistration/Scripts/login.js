function Verify() {
  // Retrieve user registration data from local storage
  var storedUserData = JSON.parse(localStorage.getItem("registrationData"));

  if (storedUserData) {
    var userRef = storedUserData.email;
    var passRef = storedUserData.password; 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === userRef && pass === passRef) {
      window.location.href = "Dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  } else {
    alert("No user data found. Please register first.");
  }
}
