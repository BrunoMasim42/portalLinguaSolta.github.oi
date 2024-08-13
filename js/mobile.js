fetch('menu-mobile.html')
.then(response => response.text())
.then(data => {
    document.getElementById('mobile-container').innerHTML = data;
})
.catch(error => {
    console.error('Ocorreu um erro ao buscar o menu');
})





$('.boing').click(function(){
    $('.menu-mobile ul .itens-drop').toggleClass('mostra');
});

var hamburguer = document.querySelector(".btnAbra");

hamburguer.addEventListener("click", function(){
    document.querySelector (".menu-mobile") .classList.toggle ("mostra")
});

var hamburguer = document.querySelector(".btnFecha");

hamburguer.addEventListener("click", function(){
    document.querySelector (".menu-mobile") .classList.toggle ("mostra")
});


$('.boing').mouseover(function(){
    $('.menu-mobile ul .seta').toggleClass('girar');
});