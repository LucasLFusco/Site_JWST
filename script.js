// function mudouTamanho(){
//     if (window.innerWidth >= 768){
//         itens.style.display = 'block'
//     } else{
//         itens.style.display = 'none'
//     }
// }
// function clickMenu(){
//     if (itens.style.display == 'block'){
//         itens.style.display = 'none'
//     } else{
//         itens.style.display = 'block'
//     }
// }

/* MENU*/
document.querySelector(".hamburger").addEventListener('click', () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

/* FOTO*/

var area = document.getElementsByClassName('.imagem')

