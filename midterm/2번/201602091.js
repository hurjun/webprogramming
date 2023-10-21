document.getElementById("add").addEventListener("click", addList);

function addList() {
    const addValue = document.getElementById('addValue').value;
    const li = document.createElement("li");
    li.setAttribute('id', addValue);
    const text = document.createElement('span')
    const textNode = document.createTextNode(addValue);
    text.appendChild(textNode)
    li.appendChild(text);
    text.onclick = () => {
        document.getElementById(addValue+"ol").remove();
    }
    const button = document.createElement('button')
    button.textContent = "하위 할 일 추가"

    button.setAttribute('id', addValue + "Button");
    button.onclick = () => {
        let answer = prompt("상세 정보 입력");
        if (!document.getElementById(addValue).querySelector("ol")) {
            const ol = document.createElement("ol")
            ol.setAttribute("type", "A");
            ol.setAttribute('id',addValue+"ol")
            const li2 = document.createElement("li");
            li2.textContent = answer;
            ol.appendChild(li2);
            li.appendChild(ol);
        } else {
            const li2 = document.createElement("li");
            li2.textContent = answer;
            li.querySelector("ol").appendChild(li2)
        }
    }
    li.appendChild(button);
    document.getElementById('list').appendChild(li);
}
