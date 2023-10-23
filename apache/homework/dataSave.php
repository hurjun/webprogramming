<html>
<body>
저장되었습니다.
이름:<?php echo $_GET["name"]; ?><br>
키:<?php echo $_GET["height"]; ?>

<?php
$myfile = fopen("data.txt", "a") or die("Unable to open file!");
fwrite($myfile,$_GET["name"]."|".$_GET["height"]."\n");
fclose($myfile);
?>
</body>
</html>