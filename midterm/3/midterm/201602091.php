<?php
$name = htmlspecialchars($_POST["name"]);
$level = htmlspecialchars($_POST["level"]);
$month = htmlspecialchars($_POST["month"]);
$day = htmlspecialchars($_POST["day"]);
$milk = htmlspecialchars($_POST["milk"]);
$mandu = htmlspecialchars($_POST["mandu"]);
$ramen = htmlspecialchars($_POST["ramen"]);
if ($milk == null) {
    $milk = "없음";
}
if ($mandu == null) {
    $mandu = "없음";
}
if ($ramen == null) {
    $ramen = "없음";
}
$myfile = fopen("data.txt", "a") or die("Unable to open file!");
fwrite($myfile, $_POST["name"] . "|" . $_POST["level"] . "|2023-" . $_POST["month"] . "-" . $_POST["day"] . "|" . $_POST["milk"] . "|" . $_POST["mandu"] . "|" . $_POST["ramen"] . "|" . "\n");
fclose($myfile);
?>
