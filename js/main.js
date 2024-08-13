fetch('menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('menu-container').innerHTML = data;
})
.catch(error => {
    console.error('Ocorreu um erro ao buscar o menu');
})






