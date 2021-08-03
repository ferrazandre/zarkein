
$(function(){
    //Abrir menu mobile
    $('nav.mobile').click(function(){
        //o que vai acontecer quando clicar na nav
        var listaMenu = $('nav.mobile ul');
      /*  if(listaMenu.is(':hidden') == true){
            listaMenu.fadeIn();
        }
        else{
            listaMenu.fadeOut;
        } */
        listaMenu.slideToggle();
    })
})