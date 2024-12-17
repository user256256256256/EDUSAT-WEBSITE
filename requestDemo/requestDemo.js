$(document).ready(function() {
    $('#sendRequestButton').on('click', function(e) {
        e.preventDefault();

        // Grab form data
        var senderName = $('#name').val().trim();
        var senderEmail = $('#email').val().trim();
        var senderSchool = $('#school').val().trim();
        var senderPhone = $('#phone').val().trim();
        var senderAddress = $('#address').val().trim();
        var senderMessage = $('#comments').val().trim();
        var statusMessage = $('#status-message');

        // Prepare the form data for sending to the server
        var params = new URLSearchParams();
        params.append('senderName', senderName);
        params.append('senderEmail', senderEmail);
        params.append('senderSchool', senderSchool);
        params.append('senderPhone', senderPhone);
        params.append('senderAddress', senderAddress);
        params.append('senderMessage', senderMessage);

        // Send the data via POST using fetch API
        fetch('requestDemo/requestDemo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                statusMessage.addClass('show')
                    .removeClass('alert-danger').addClass('alert-success')
                    .text(data.success);

                // Optionally, reset the form or reload the page
                setTimeout(function() {
                    $('#requestDemoform')[0].reset();
                    statusMessage.removeClass('show');
                }, 5000);
            } else {
                statusMessage.addClass('show')
                    .removeClass('alert-success').addClass('alert-danger')
                    .text(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            statusMessage.addClass('show')
                .removeClass('alert-success').addClass('alert-danger')
                .text("An error occurred. Contact support.");
        });
    });
});
