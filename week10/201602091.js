document.getElementById('add').addEventListener('click', save);
document.getElementById('find').addEventListener('click', find);
document.getElementById('create').addEventListener('click', create);
let data2 = [];
let subjectLength=3;
function save() {

    let data = new Object;
    data.학생이름 = document.getElementById('name').value;
    data.웹프로그래밍 = document.getElementById('1').value;
    data.IT영어 = document.getElementById('2').value;
    data.창업실습 = document.getElementById('3').value;
    for(let i=0;i<document.getElementsByClassName('added').length;i++){
        data[document.getElementsByClassName('added')[i].id]=document.getElementsByClassName('added')[i].value;
    }
    data2.push(data);
    console.log(data);
    alert(data.학생이름 + "의 정보가 저장되었습니다.");
}

function find() {
    let name = document.getElementById('findname').value;
    let table = document.getElementById('table');
    table.innerHTML = "<tr><th>학생이름</th><th>웹프로그래밍</th><th>IT영어</th><th>창업실습</th>"+""+"<th>합계</th></tr>"
    for (let i = 0; i < data2.length; i++) {
        if (name == data2[i].name) {
            let row = table.insertRow();
            console.log(data2[i][Object.keys(data2[i])[0]]);
            for(let j=0;j<Object.keys(data2[i]).length;j++){
                row.insertCell(j).textContent=data2[i][Object.keys(data2[i])[j]];
            }
            row.insertCell(-1).textContent = sum;
        }
    }
}

function create() {
    console.log('!');
    let data=document.getElementById('subject').value;
    let subject=document.createElement('div')
    subject.innerText=data+": ";
    let input=document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('class','added');
    input.setAttribute('id',data);
    subject.appendChild(input);
    document.getElementById('subjectlist').appendChild(subject);
    console.log(document.getElementsByClassName('added')[0].id);
}