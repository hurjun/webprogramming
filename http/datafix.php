<html>
<body>
학생이름:학년
<br>
<?php
session_start();
$name=htmlspecialchars($_POST['name']);
$level=htmlspecialchars($_POST['level']);
$array=[];
foreach($_SESSION['data'] as $key => $value){
    if($value['name']==$name){
        echo $value['name']." 학년을".$level."학년으로 변경하였습니다.<br>";
        array_push($array,$key,$name);
    }
}
$_SESSION['data'][$array[0]]['level']=$level;
?>
</body>
</html>