const show = () => {
    let x = document.getElementById("div3");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
const modalHide = () => {
    let x = document.getElementById("modal");
    x.style.display = "none";
}
const modalShow = (event) => {

    let x = document.getElementById("modal");
    if (x.style.display === "none") {
        x.style.display = "";
    }
}
const submit=()=>{
    if(document.getElementById('inputTitle').value==""||document.getElementById('textarea').value==""){
        alert('입력란을 모두 채워주세요');
    }else{
        alert('계획이 추가되었습니다.');
    }
    let data = {
        title:document.getElementById('inputTitle').value,
        textarea:document.getElementById('textarea').value,

    }
}