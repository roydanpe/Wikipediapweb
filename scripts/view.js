const pageName = new URLSearchParams(window.location.search).get('name');
const content = localStorage.getItem(pageName);
document.getElementById('page-title').textContent = pageName;
document.getElementById('page-content').innerHTML = marked(content);