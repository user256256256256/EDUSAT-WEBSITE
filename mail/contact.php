<?php 
// Set the response header to JSON format
header('Content-Type: application/json');

// Initialize response array
$response = array();

// Check if the required POST data is available
if (isset($_POST['senderName'], $_POST['senderEmail'], $_POST['senderMessage'])) {
    // Sanitize the incoming data to prevent XSS and other attacks
    $senderName = htmlspecialchars(trim($_POST['senderName']));
    $senderEmail = filter_var(trim($_POST['senderEmail']), FILTER_SANITIZE_EMAIL);
    $senderSchool = isset($_POST['senderSchool']) ? htmlspecialchars(trim($_POST['senderSchool'])) : 'Not provided'; // Optional field
    $senderMessage = htmlspecialchars(trim($_POST['senderMessage']));

    // Check if any of the  fields are empty
    if (empty($senderName) || empty($senderEmail) || empty($senderMessage)) {
        $response['error'] = "All  fields must be filled.";
        echo json_encode($response);
        exit();
    }

    // Validate the email address
    if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
        $response['error'] = "Invalid email format.";
        echo json_encode($response);
        exit();
    }

    // Check if the message exceeds 250 words
    $wordCount = str_word_count($senderMessage);
    if ($wordCount > 250) {
        $response['error'] = "Your message exceeds the 250-word limit. Please shorten it.";
        echo json_encode($response);
        exit();
    }

    // Setup email parameters
    $to = "sales@eurosatgroup.com"; 
    $subject = "New Message from: $senderName";
    $message = "You have received a new message from the contact form:\n\n";
    $message .= "Name: $senderName\n";
    $message .= "Email: $senderEmail\n";
    $message .= "School: $senderSchool\n\n";
    $message .= "Message:\n$senderMessage\n";

    // Email headers
    $headers = "From: $senderEmail\r\n";
    $headers .= "Reply-To: $senderEmail\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Success response
        $response['success'] = "Your message has been sent successfully!";
    } else {
        // Failure response
        $response['error'] = "There was an error sending your message. Please try again later.";
    }
} else {
    // Missing required fields
    $response['error'] = "All required fields must be filled.";
}

// Return the JSON response
echo json_encode($response);
?>
