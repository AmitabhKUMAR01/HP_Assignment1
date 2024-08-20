   $(document).ready(function(){
      $('#myForm').submit(function(event){
        event.preventDefault();
        var email = $('#email').val();
        var pass1 = $('#pass1').val();
        var pass2 = $('#pass2').val();
        var termsChecked = $('#terms').is(':checked');
        //form validation
        if (email === '') {
          alert('Error: Email field cannot be empty.');
        } else if (pass1 === '' || pass2 === '') {
          alert('Error: Password fields cannot be empty.');
        } else if (pass1 !== pass2) {
          alert('Error: Passwords do not match.');
        } else if (!termsChecked) {
          alert('Please agree to Terms and Conditions.');
        } else {
          alert('Form submitted successfully!');
          location.reload();
        }
      });
    });
  