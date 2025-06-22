<?php
// Get pixel ID from URL
$id = isset($_GET['id']) ? $_GET['id'] : 'unknown';

// Get user's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Create log entry
$log = date("Y-m-d H:i:s") . " | Pixel: " . $id . " | IP: " . $ip . "\n";

// Append to log file
file_put_contents("pixel-log.txt", $log, FILE_APPEND);

// Send a 1x1 transparent GIF so browser doesn’t break
header("Content-Type: image/gif");
echo base64_decode("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");
?>