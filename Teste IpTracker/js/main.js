$(document).ready(function (){    // verificação da página para executar o código

    $(".icon").on("click",function (){      // o ao clicar no botão "click" o icon aparece
        
        if( $(".topnav").css("display") == "none" ){
            $(".topnav").css("display","block"); // o display do "topnav" fica a block
        }else{
            $(".topnav").css("display","none");// o display do "topnav" desaparece
        }

    });
    $(window).on("resize",function(){ //ao mudar o tamanha da página


        if($(window).width() > 768 //se a janela for maior que 768px
        )
        {
            $(".topnav a").css("display","inline");// o display do "topnav a" fica a inline
            $(".topnav").css("display","block");// o display do "topnav" fica a block
        }else{
            $(".topnav").css("display","none");// o display do "topnav" desaparece
            $(".topnav a").css("display","block");// o display do "topnav a" fica a block

        }
    });
});
