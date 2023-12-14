
  function nextPhase() {
    if (!validateFormPhase1()) {
      return;
    }

    document.getElementById('phase1').style.display = 'none';
    document.getElementById('phase2').style.display = 'block';
  }

  function validateFormPhase1() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;

    const pincodeRegex = /^\d{6}$/;

    let isValid = true;

    if (name.trim() === '') {
      isValid = false;
      showError('name', 'Name is required');
    } else {
      hideError('name');
    }

    if (address.trim() === '') {
      isValid = false;
      showError('address', 'Address is required');
    } else {
      hideError('address');
    }

    if (!pincode.match(pincodeRegex)) {
      isValid = false;
      showError('pincode', 'Invalid pincode.Enter 6 Digit');
    } else {
      hideError('pincode');
    }

    return isValid;
  }

  function submitOrder() {
  if (!validateFormPhase2()) {
    return;
  }

  document.getElementById('phase1').style.display = 'none';
  document.querySelector('.progress').style.display = 'block';
// showConfirmation();
  let progress = 0;
  const progressBar = document.querySelector('.progress');
  const confirmationBox = document.getElementById('confirmation-box2');

  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
       resetForm();
      showConfirmation();
     
    }
  }, 500);
}


  function validateFormPhase2() {
    const email = document.getElementById('email').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!email.match(emailRegex)) {
      isValid = false;
      showError('email', 'Invalid email');
    } else {
      hideError('email');
    }

    return isValid;
  }

  function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.textContent = message;
  }

  function hideError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.textContent = '';
  }
function showConfirmation() {
  const confirmationBox = document.getElementById('confirmation-box'); // Corrected class name
   document.getElementById('email-label').style.display = 'none';
     document.getElementById('phase1').style.display = 'none';
     document.getElementById('order-now').style.display = 'none';

       const elementsWithClass = document.getElementsByClassName('progress-bar');

        // Loop through the collection and set display to 'none'
        for (const element of elementsWithClass) {
            element.style.display = 'none';
        }
  confirmationBox.style.display = 'block';
}

function closeConfirmation() {
  const confirmationBox = document.getElementById('confirmation-box'); // Corrected class name
  confirmationBox.style.display = 'none';
  shoppingCart.clearCart();
   window.location.href = "../html/index.html"
}
  // function showConfirmation() {
  //   const confirmationBox = document.getElementById('confirmation-box2');
  //   confirmationBox.style.display = 'block';
  // }

  // function closeConfirmation() {
  //   const confirmationBox = document.getElementById('confirmation-box2');
  //   confirmationBox.style.display = 'none';
  // }

  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pincode').value = '';
    document.getElementById('email').value = '';
    document.getElementById('progress').style.width = '0%';
    document.getElementById('progress').textContent = '0%';
    // document.getElementById('phase1').style.display = 'block';
   // document.getElementById('progress').style.display = 'none';
  }
