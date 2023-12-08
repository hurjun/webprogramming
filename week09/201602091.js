function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    sessionStorage.setItem(data,ev.target.id);
}


function setting(key){
    let value=sessionStorage.getItem(key);
    if(value=='div1'){
        document.getElementById(value).appendChild(document.getElementById(key));
    }else if(value=='div2'){
        document.getElementById(value).appendChild(document.getElementById(key));
    }
}
function read(){
    setting('apple');
    setting('banana');
    setting('peach');
    setting('mandarin');
    setting('pear');
}

