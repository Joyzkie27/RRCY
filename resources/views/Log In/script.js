// JavaScript for form validation
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent default form submission
    
    // Fetch username and password values
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    
    // You can add your logic for validation here
    // For a simple example, check if both fields are filled
    if(username !== "" && password !== ""){
      alert("Logged in successfully as " + username);
      // Here you can redirect to another page or perform other actions upon successful login
    } else {
      alert("Please enter username and password");
    }
  });
  