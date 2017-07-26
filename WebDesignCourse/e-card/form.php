<?php 
$content = file_get_contents('https://docs.google.com/forms/d/e/1FAIpQLSd1lbrSgQkUbT3YU45EoaEhtUokendP9wuqlSpy6IU-k9g5KQ/viewform?embedded=true#start=embed');
$content = str_replace('</title>','</title><base href="https://docs.google.com/forms/" />', $content);
$content = str_replace('</head>','<link rel="stylesheet" href="https://youritassistant.github.io/css/form.css" /></head>', $content);
echo $content;
