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