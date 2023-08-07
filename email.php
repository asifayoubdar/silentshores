<?php
$email = $_POST['email'];
$mobile = $_POST['phone'];
$date = $_POST['date'];
$name = $_POST['username'];
$desc = $_POST['desc'];
include('smtp/PHPMailerAutoload.php');
$msg = 'email: ' . $email . '<br>';
$msg .= 'mobile: ' . $mobile . '<br>';
$msg .= 'date: ' . $date . '<br>';
$msg .= 'name: ' . $name . '<br>';
$msg .= 'desc: ' . $desc . '<br>';

smtp_mailer('contact.silentshores@gmail.com', 'New enquiry found', $msg);
function smtp_mailer($to, $subject, $msg)
{
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    //$mail->SMTPDebug = 2; 
    $mail->Username = "contact.silentshores@gmail.com";
    $mail->Password = "caykvlvjpchdgzid";
    $mail->SetFrom("contact.silentshores@gmail.com");
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => false
        )
    );
    if (!$mail->Send()) {
        echo $mail->ErrorInfo;
    } else {
        echo 'sent';
    }
    die;
}
?>