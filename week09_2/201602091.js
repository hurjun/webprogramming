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
    sessionStorage.setItem(data, ev.target.id);
}

function setting(key) {
    let value = sessionStorage.getItem(key);
    if (value == 'div1') {
        document.getElementById(value).appendChild(document.getElementById(key));
    } else if (value == 'div2') {
        document.getElementById(value).appendChild(document.getElementById(key));
    }
}

function read() {
    for(let i=0;i<sessionStorage.length;i++){
        let key=sessionStorage.key(i);
        let data=sessionStorage.getItem(sessionStorage.key(i));
        console.log(key,data);
        let element=document.createElement('div');
        element.innerHTML=key;
        element.style.color='white';
        element.style.border='1px solid #aaaaaa';
        element.style.width='100px';
        element.style.height='100px';
        element.style.background="blue";
        element.setAttribute('id',key);
        element.setAttribute('draggable',true);
        element.addEventListener('dragstart',drag);
        document.getElementById(data).appendChild(element);
    }

}

function add(){
    let data=document.getElementById('text').value;
    let element=document.createElement('div');
    element.innerHTML=data;
    element.style.color='white';
    element.style.border='1px solid #aaaaaa';
    element.style.width='100px';
    element.style.height='100px';
    element.style.background="blue";
    element.setAttribute('id',data);
    element.setAttribute('draggable',true);
    element.addEventListener('dragstart',drag);
    document.getElementById('empty').appendChild(element);
}


