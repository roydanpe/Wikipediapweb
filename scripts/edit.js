const pageName = new URLSearchParams(window.location.search).get('name');
const content = localStorage.getItem(pageName);
document.getElementById('page-content').value = content;

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newContent = document.getElementById('page-content').value;

    localStorage.setItem(pageName, newContent);
    window.location.href = 'list.html';
});