function toggleMenuPrincipal(){
    document.querySelector('#sub-menu-principal').classList.toggle('sub-menu-principal-enable')
    document.querySelector('#menu-principal-itens-sub-click').classList.toggle('menu-principal-itens-sub-click')
}
//mobile
function abrirMenu(){
    document.querySelector('.menu-principal-mobile').classList.toggle('menu-principal-mobile-fechar')
    document.querySelector('.menu-principal-mobile').classList.toggle('menu-principal-mobile-abrir')
}