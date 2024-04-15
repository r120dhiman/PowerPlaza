document.getElementById('submitBtn').addEventListener('click', function() {
    // Check if all required fields are filled
    if (areAllFieldsFilled()) {
      // Perform your submission logic here
  
      // Display the thank you message
      document.getElementById('thankYouMessage').style.display = 'block';
  
      // Wait for 5 seconds before redirecting to main.html
      setTimeout(function() {
        window.location.href = 'main.html';
      }, 5000); 
    } else {
      
      alert('Please fill all required fields before submitting.');
    }
  });
  
  function areAllFieldsFilled() {
    // Add logic to check if all required fields are filled
    // For example, you can check if input fields have values
    var requiredFields = document.querySelectorAll('.required');
    for (var i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].value.trim() === '') {
        return false;
      }
    }
    return true;
  }