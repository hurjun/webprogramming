function addList() {

    // 1. 추가할 값을 input창에서 읽어온다
    const addValue
        = document.getElementById('addValue').value;

    // 2. 추가할 li element 생성
    // 2-1. 추가할 li element 생성
    const li = document.createElement("li");

    // 2-2. li에 id 속성 추가
    li.setAttribute('id', addValue);
    li.onclick = () => {
        if (!confirm("" + addValue + "을 삭제하시겠습니까?")) {

        } else {
            document.getElementById(li.id).remove();
        }
    }
    // 2-3. li에 text node 추가
    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);

    // 3. 생성된 li를 ol에 추가
    document.getElementById('list').appendChild(li);
}