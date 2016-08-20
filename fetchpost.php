<?php

function ol_get_posts($single = false) {
  if (isset($_SERVER['HTTPS'])) {
    $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != 'off') ? 'https' : 'http';
  } else {
    $protocol = 'http';
  }
  $host = $protocol . '://' . $_SERVER['SERVER_NAME'];

  $ch      = curl_init();
  $timeout = 5;
  curl_setopt($ch, CURLOPT_URL, $host);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
  $data = curl_exec($ch);
  curl_close($ch);

  $dom = new DOMDocument();
  $dom->loadHTML($data);
  $xpath = new DOMXPath($dom);
  $id    = 'posts';
  $nodes = $xpath->query("//*[@id and contains(concat(' ', normalize-space(@id), ' '), ' $id ')]");

  $html = '';

  if ($single) {
    $nodes = $nodes[0]->getElementsByTagName('article');
    $html .= $dom->saveHTML($nodes[0]);
  } else {
    foreach ($nodes as $node) {
      $html .= $dom->saveHTML($node);
    }
  }

  return $html;
}

$single = $_GET['single'];
$single = isset($single) ? true : false;
print_r(ol_get_posts($single));
