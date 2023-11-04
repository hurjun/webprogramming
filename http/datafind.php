<html>
<body>
학생이름:학년
<br>
<?php
session_start();
$name=htmlspecialchars($_POST['name']);
$level=htmlspecialchars($_POST['level']);
if($name==""&&$level==0){
    foreach($_SESSION['data'] as $key => $value){
        echo $value['name']." : ".$value['level']."<br>";
    }
}else if($name==""){
    foreach($_SESSION['data'] as $key => $value){
        if($level==$value['level']) {
            echo $value['name'] . " : " . $value['level'] . "<br>";
        }
    }
}else if($level==0){
    foreach($_SESSION['data'] as $key => $value){
        if(preg_match($name,$value['name'])) {
            echo $value['name'] . " : " . $value['level'] . "<br>";
        }
    }
}
?>
</body>
</html>