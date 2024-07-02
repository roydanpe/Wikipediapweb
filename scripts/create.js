document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('page-name').value;
    const content = document.getElementById('page-content').value;

    localStorage.setItem(name, content);
    window.location.href = 'list.html';
});