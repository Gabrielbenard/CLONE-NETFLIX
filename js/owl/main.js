
// o '$' quer dizer que está utilizando o framework Jquery
$('.owl-carousel').owlCarousel({
    // LOOP deixa o caixa infinita passando com o mouse para direita no loop
    loop:true,

    margin:10,
    // o nav são os botões para navegação clicaveis 
    nav:true,
    //responsive é a adaptação da tela 
    responsive:{
        // 0px perto dos 0px apenas aparecerá um item 
        0:{
            items:1
        },
        // perto dos 600 px aparecerá 3 itens 
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


