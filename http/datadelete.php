<html>
<body>
학생이름:학년
<br>
<?php
session_start();
$name=htmlspecialchars($_POST['name']);
$level1=htmlspecialchars($_POST['level1']);
$level2=htmlspecialchars($_POST['level2']);

if($name==""){
    for($i=$level1;$i<=$level2;$i++){
        foreach($_SESSION['data'] as $key => $value){
            if($value['level']==$i){
                echo $value['name']."삭제되엇습니다.<br>";
                unset($value["name"]);
            }
        }
    }
}else if($name!=""){
    for($i=$level1;$i<=$level2;$i++){
        foreach($_SESSION['data'] as $key => $value){
            if($value['level']==$i) {
                if(preg_match($name,$value['name'])){
                    echo $value['name']."삭제되엇습니다.<br>";
                    unset($value["name"]);
                }
            }
        }
    }
}

?>
</body>
</html>