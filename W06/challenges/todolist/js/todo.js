document.getElementById('new_todo').style.display = 'none';

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('new_todo').style.display = 'block';
    document.getElementById('add').innerHTML = '<span class="material-icons">done</span>';
} )