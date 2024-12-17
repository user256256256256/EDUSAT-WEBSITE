$(document).ready(function() {
    $('#sendMessageButton').on('click', function(e) {
      e.preventDefault();
  
      var senderName = $('#name').val().trim();
      var senderEmail = $('#email').val().trim();
      var senderSchool = $('#school').val().trim();  // Renaming from 'subject' to 'school'
      var senderMessage = $('#comments').val().trim();  // Renaming from 'message' to 'comments'
      var statusMessage = $('#status-message');
  
      // Prepare data for POST request
      var params = new URLSearchParams();
      params.append('senderName', senderName);
      params.append('senderEmail', senderEmail);
      params.append('senderSchool', senderSchool);  // Updated to 'senderSchool'
      params.append('senderMessage', senderMessage);  // Updated to 'senderMessage'
  
      // Sending the POST request using fetch API
      fetch('mail/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          statusMessage.addClass('show');
          statusMessage.removeClass('alert-danger').addClass('alert-success').text(data.success);
  
          // Optionally refresh the page after success
          setTimeout(function() {
            window.location.reload();
          }, 5000);
        } else {
          statusMessage.addClass('show');
          statusMessage.removeClass('alert-success').addClass('alert-danger').text(data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        statusMessage.addClass('show');
        statusMessage.removeClass('alert-success').addClass('alert-danger').text("An error occurred. Contact support.");
      });
    });
  });
  