document.getElementById("button").addEventListener("click", addList);

function addList() {
    const addValue = document.getElementById('addValue').value;
    const li = document.createElement("li");
    li.setAttribute('id', addValue);
    li.onclick = () => {
        if (confirm("" + addValue + "을 삭제하시겠습니까?")) {
            document.getElementById(li.id).remove();
        }
    }
    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);
    document.getElementById('list').appendChild(li);
}