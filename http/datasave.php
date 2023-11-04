<html>
<body>
세션에 저장되었습니다.
<?php
session_start();
if(!isset($_SESSION["data"])){
    $_SESSION["data"]=array();
}
$object=array('name'=>$_GET['name'],'level'=>$_GET['level']);
array_push($_SESSION["data"],$object);
print_r($_SESSION);
?>
</body>
</html>