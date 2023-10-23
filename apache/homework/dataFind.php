<html>
<body>

<?php
$nameValue = "";
$heightValue = 0;
$key = $_POST["key"];
if ($_POST["key"] == "name") {
    $nameValue = $_POST["value"];
} else if ($_POST["key"] == "height") {
    $heightValue = $_POST['value'];
}

$myfile = fopen("data.txt", "r") or die("Unable to open file!");
while (!feof($myfile)) { // feof() 함수는 전달받은 파일 포인터가 파일의 끝에 도달하면, true를 반환
    $line = fgets($myfile);
    if ($line == ""){
        break;
    }
    $person = explode("|", $line);

    if ($key == "name" && strpos($person[0], $nameValue) !== false) {
        echo $person[0] . "|" . $person[1] . "<br>";
    } else if ($key == "height" && $person[1] >= $heightValue) {
        echo $person[0] . "|" . $person[1] . "<br>";
    }
}
fclose($myfile);
?>
</body>
</html>
