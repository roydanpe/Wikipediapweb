const pageList = document.getElementById('page-list');
for (let i = 0; i < localStorage.length; i++) {
    const pageName = localStorage.key(i);
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="view.html?name=${pageName}">${pageName}</a>
        <a href="edit.html?name=${pageName}">(E)</a>
        <a href="#" onclick="deletePage('${pageName}')">(X)</a>
    `;
    pageList.appendChild(li);
}

function deletePage(name) {
    localStorage.removeItem(name);
    window.location.reload();
}