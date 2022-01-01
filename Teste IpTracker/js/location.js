$(document).ready(function (){    // verificação da página para executar o código

    $(".lookup-button").on("click",function (){      //ao clicar no botão lookup
        
        if( $(".Map").css("display") == "none" ){
            $(".Map").css("display","block"); //o mapa fica com o display block
        }else{
            $(".Map").css("display","none"); // se não desaparece
        }

    });
    $(window).on("resize",function(){ // ao mudar para responsive


        if($(window).width() > 768 //se a janela for maior que 768px
        )
        {
            $(".Map").css("display","block"); // o mapa fica com o display em block
        }else{
            $(".Map").css("display","none"); //se não desaparece

        }
    });
});
