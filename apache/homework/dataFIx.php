<html>
<body>

<?php
$value1=htmlspecialchars($_POST["value1"]);
$value2=htmlspecialchars($_POST["value2"]);

$myfile = fopen("data.txt", "r") or die("Unable to open file!");
$temp = fopen("temp.txt", "a") or die("Unable to open file!");
while (!feof($myfile)) { // feof() 함수는 전달받은 파일 포인터가 파일의 끝에 도달하면, true를 반환
    $line = fgets($myfile); // 한 줄씩 $member 변수에 저장하고
    if ($line == ""){
        break;
    }
    $person = explode("|", $line);

    if($value1==$person[1]){
        fwrite($temp, $person[0]."|".$value2."\n");
        echo $person[0]."의 키 ".$person[1]."cm 정보가 수정되었습니다"."<br>"."수정 후 키:".$value2;
    }else{
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
