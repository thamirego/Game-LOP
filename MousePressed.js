function intervalo(coordenada, limiteInferior, limiteSuperior) {
    var ehMaior = coordenada > limiteInferior;
    var ehMenor = coordenada < limiteSuperior;
    var taNoMeioDosDois = ehMaior && ehMenor;
    return taNoMeioDosDois;
}

function mousePressed(event) {
  
//TELA MENU
    if (tela == 1 && intervalo(mouseX, 336, 477)) {
        if (intervalo(mouseY, 138, 186)) {
            console.log("Clicou em Jogar!!!");
            tela = 2;
            fase=1
            draw();
        }        
        else if (intervalo(mouseY, 200, 249)) {
            console.log("Clicou em Manual!!!");
            tela = 3;
            draw();
        }        
        else if (intervalo(mouseY, 263, 312)) {
            console.log("Clicou em Créditos!!!")
            tela = 4;  
            draw();
        }
    }
  
//TELA JOGAR
    else if (tela == 2) {
        if (intervalo(mouseX, 7, 77) && intervalo(mouseY, 3, 33)){
            console.log("Clicou em voltar!!!")
            tela = 1;  
            time=10
        }
    }

//TELA MANUAL
    else if (tela == 3) {
        if (intervalo(mouseX, 7, 77) && intervalo(mouseY, 3, 33)){
            console.log("Clicou em voltar!!!")
            tela = 1;  
        }
        if(intervalo(mouseX, 29, 128) && intervalo(mouseY,347, 381)){
          tela = 2
          fase = 1
        }
        if(intervalo(mouseX, 152, 252) && intervalo(mouseY, 347, 381)){
          tela = 8
        }
    }
//TELA CRÉDITOS
    else if (tela == 4) {
        if (intervalo(mouseX, 7, 77) && intervalo(mouseY, 3, 33)){
            console.log("Clicou em voltar!!!")
            tela = 1; 
            time=10
        }
    }
//ACABOU O TEMPO
    else if(tela == 5){
        if(intervalo(mouseX, 65, 219) &&       intervalo(mouseY, 298, 348)){
            console.log("voltar");
            tela = 1;
            time=10
        }
    }
//ERROU
    else if(tela == 6){
        if(intervalo(mouseX, 65, 219) &&       intervalo(mouseY, 298, 348)){
            console.log("voltar");
            tela = 1;
            time=10
        }
    }
//GANHOU
    else if(tela == 7){
        if(intervalo(mouseX, 65, 219) &&       intervalo(mouseY, 265, 316)){
          console.log("HOME");
          tela = 1;
          time=10
        }
        if(intervalo(mouseX, 65, 219) &&       intervalo(mouseY, 325, 376)){
          console.log("REPLAY");
          tela = 2;
          fase = 1;
          x=0;
          y=300;
          time=10;
        }
    }
  
//TELA COMANDOS
    else if(tela == 8){
        if(intervalo(mouseX, 384, 483) &&       intervalo(mouseY, 343, 377)){
          console.log("JOGAR");
          tela = 2;
          fase = 1
          time=10
        }
    }
}