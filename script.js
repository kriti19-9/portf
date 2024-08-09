document.getElementById('see-more').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('additional-content').style.display = 'block'; // Show the additional content
    this.style.display = 'none'; 
});
