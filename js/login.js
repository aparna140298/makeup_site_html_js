 //  if(sessionStorage.getItem('username')){
 //   document.getElementById('loginUsername').value = sessionStorage.getItem('username');
 //         document.getElementById('loginPassword').value = sessionStorage.getItem('password');
 //         loginForm.style.display = 'block';
 //        signupForm.style.display = 'none';
 //          logIn.style.display = 'none';
 //        logOut.style.display = 'block';
 //  }
 //  else{
 // loginForm.style.display = 'none';
 //        signupForm.style.display = 'block';
 //  }
  function logOut(){
    sessionStorage.clear();
      alert('Logged out successfully!');
       document.getElementById('loginUsername').value = "";
         document.getElementById('loginPassword').value = "";
  }

   function toggleForm(formId) {
      const loginForm = document.getElementById('loginForm');
      const signupForm = document.getElementById('signupForm');

      if (formId === 'signupForm') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
      } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
      }
    }

     function login(event) {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      // Check credentials (you can replace this with your authentication logic)
      if (username && password) {
        if(username === sessionStorage.getItem('username') && password ===  sessionStorage.getItem('password')){
              alert('Login successful!');
              window.location.href = "../html/index.html"
        }
        
        else{
          alert('Invalid credentials. Please try again.');
        }

      } else {
        alert('Invalid credentials. Please try again.');
      }
    }

    function signup(event) {
      event.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;
      // Add password validation logic (for example, requiring a minimum length)
      if (username && password && password.length >= 8) {
        alert('Signup successful!');
        // Save user information in session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        document.getElementById('signupUsername').value = "";
         document.getElementById('signupPassword').value = "";
          loginForm.style.display = 'block';
        signupForm.style.display = 'none';
      } else {
        alert('Invalid credentials. Please try again.check the length8 ');
      }


    }
         var myInput = document.getElementById("signupPassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    // Check if all criteria are met, then hide the message box
    if (letter.classList.contains("valid") &&
        capital.classList.contains("valid") &&
        number.classList.contains("valid") &&
        length.classList.contains("valid")) 
    {
      message.style.display = "none";
    }
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    message.style.display = "block";
  }



}