function accountInfo(){
    console.log(sessionStorage.getItem('username'))
    var spanElement = document.getElementById("account");

      // Change the text content
      if(sessionStorage.getItem('username')){
         spanElement.textContent = sessionStorage.getItem('username');
       }
      else{
             spanElement.textContent = "Account";
      }
  
}

accountInfo();

// script.js
document.getElementById('mySpan').addEventListener('click', function() {
    // Your function to be triggered when the span is clicked

    sessionStorage.clear();
      alert('Logged out successfully!');
       document.getElementById('loginUsername').value = "";
         document.getElementById('loginPassword').value = "";
          loginForm.style.display = 'block';
        signupForm.style.display = 'none';
  
});

if(sessionStorage.getItem('username')){
    mySpan.style.display = 'block';
}
else{
    mySpan.style.display = 'none';
}


//scroll to top button function
 var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {
     scrollFunction();
 };

function scrollFunction() {
     // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     //     scrollToTopBtn.style.display = "block";
     // } else {
     //     scrollToTopBtn.style.display = "none";
     // }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});