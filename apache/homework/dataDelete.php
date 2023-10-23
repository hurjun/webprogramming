<html>
<body>

<?php
$nameValue = "";
$heightValue = 0;
$key = $_POST["key"];
if ($_POST["key"] == "name") {
    $nameValue = htmlspecialchars($_POST["value"]);
} else if ($_POST["key"] == "height") {
    $heightValue =htmlspecialchars($_POST['value']);
}
if (get_magic_quotes_gpc()) {
    $form_data = stripslashes($from_data);
}
echo $nameValue . "|" . $heightValue . "|" . $key;
$myfile = fopen("data.txt", "r") or die("Unable to open file!");
$temp = fopen("temp.txt", "a") or die("Unable to open file!");
while (!feof($myfile)) { // feof() 함수는 전달받은 파일 포인터가 파일의 끝에 도달하면, true를 반환
    $line = fgets($myfile); // 한 줄씩 $member 변수에 저장하고
    if ($line == ""){
        break;
    }
    $person = explode("|", $line);

    if ($key == "name" && $nameValue != $person[0]) {
        fwrite($temp, $line);
    } else if ($key == "height" && $person[1] >= $heightValue) {
        fwrite($temp, $line);
    }
}
fclose($temp);
fclose($myfile);
unlink("data.txt");
rename("temp.txt", "data.txt");
?>
</body>
</html>
