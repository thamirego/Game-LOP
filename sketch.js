//THAMIRES DOS SANTOS REGO
//LINK EXPLICAÇÃO: https://www.youtube.com/watch?v=mQxIHzfjlvo&list=PLPbZJN_QLtxr-y8QDYZhbt5O_fYGqA9IA&index=1
//LINK DO PROJETO : http://www.colabeduc.org/descricao/show/1132

var tela = 1;
var fase = 0;

// VARIAVEIS PERSONAGEM
//vetores
var direita = [];
var esquerda = [];
var cima = [];
var baixo = [];
//posição inicial
var x = 0;
var y = 300;

//VARIARIAVEIS ITENS
var yObjG = 164;
var xObja = 40
var xObjb = 208
var xObjc = 375

//contadores
var contadorD = 1;
var contadorE = 1;
var contadorC = 1;
var contadorB = 1;

//numero imagem
var i = 0;
var j = 0;
var k = 0;
var l = 0;

//tempo
var tempoD = 15;
var tempoE = 15;
var tempoC = 15;
var tempoB = 15;

//VARIAVEIS TEMPO
//fase1
var time = 10;

//variavel itens e obstaculos

function textoBotao(texto, yTexto) {
  fill(0, 0, 0);
  textSize(35);
  textFont(font2);
  text(texto, 406, yTexto);
}

//FUNÇÃO  DAS FASES
function textFase(textoFase, imageFa, imageFb, imageFc) {
  fill(255);
  textFont(font3);
  textSize(40);
  text(textoFase, 255, 97);
  image(imageFa, xObja, yObjG, 85, 44);
  image(imageFb, xObjb, yObjG, 85, 44);
  image(imageFc, xObjc, yObjG, 85, 44);
}

//FUNCAO PARA CARREGAR ARQUIVOS
function preload() {
  //FUNDOS
  img = loadImage("tela1.png");
  img2 = loadImage("tela2.png");
  img3 = loadImage("tela3.png");
  img4 = loadImage("tela4.png");
  img5 = loadImage("telat.png")
  img6 = loadImage("telae.png")
  img7 = loadImage("telaw.png")
  img8 = loadImage("tela8.png")
  //personagem parado
  parado = loadImage("d.png");

  //personagem direita
  for (i = 1; i < 4; i++) {
    direita[i] = loadImage("d" + i + ".png");
  }

  //personagem esquerda
  for (j = 1; j < 4; j++) {
    esquerda[j] = loadImage("e" + j + ".png");
  }

  //personagem pra cima
  for (k = 1; k < 3; k++) {
    cima[k] = loadImage("c" + k + ".png");
  }

  //personagem pra baixo
  for (l = 1; l < 3; l++) {
    baixo[l] = loadImage("b" + l + ".png");
  }

  //ITENS FASE 1
  f1a = loadImage("o1.png");
  f1b = loadImage("o2.png");
  f1c = loadImage("o3.png");
  
  //ITENS FASE 2
  f2a = loadImage("o4.png");
  f2b = loadImage("o5.png");
  f2c = loadImage("o6.png");
  
  //ITENS FASE 3
  f3a = loadImage("o7.png");
  f3b = loadImage("o8.png");
  f3c = loadImage("o9.png");

//ITENS FASE 4
  f4a = loadImage("o10.png");
  f4b = loadImage("o11.png");
  f4c = loadImage("o12.png");
  
//ITENS FASE 5
  f5a = loadImage("o13.png");
  f5b = loadImage("o14.png");
  f5c = loadImage("o15.png");
  
  //FONTS
  font1 = loadFont("powerpuff girls font.ttf");
  font2 = loadFont("PowerPuff Z V.4,00 (Oficial) By PKFS.ttf");
  font3 = loadFont("Utonium.otf");
}

//SETUP
function setup() {
  textAlign(CENTER);
  createCanvas(500, 400);
}

//DRAW
function draw() {
  background(0);

  //tela 1
  if (tela == 1) {
    x=0
    y=300
    image(img, 0, 0, 500, 400);
    textoBotao("JOGAR", 175);
    textoBotao("MANUAL", 238);
    textoBotao("CRÉDITOS", 301);
    textSize(15);
    textFont("font1");
    fill("#FFFFF");
    text(mouseX + " " + mouseY, 40, 30);
  }
  //TELA JOGAR

  if (tela == 2) {
    image(img2, 0, 0, 500, 400);
    fill("#F6D965");
    rect(7, 3, 70, 30, 5);
    fill(0, 0, 0);
    textFont(font2);
    textSize(20);
    text("VOLTAR", 40, 25);
    
    //Tempo do jogo
    if(frameCount % 60 === 0){
      time--;
    }
    if(time <= 0){
      tela = 5
    }

    //Movimentos do persongem
    image(direita[contadorD], x, y, 60, 69);

    //DIREITA
    if (keyIsDown(RIGHT_ARROW)) {
      image(direita[contadorD], x, y, 60, 69);
      if (x < 500) {
        x = x + 5;
      }
      if (x >= 500) {
        x = 0;
      }
      tempoD++;
      if (tempoD > 5) {
        tempoD = 0;
        contadorD++;
        if (contadorD > 3) {
          contadorD = 1;
        }
      }
    }

    //ESQUERDA
    if (keyIsDown(LEFT_ARROW)) {
      image(esquerda[contadorE], x, y, 60, 69);
      if (x > 0) {
        x = x - 5;
        if (x <= 0) x = 500;
      }
      tempoE++;
      if (tempoE > 5) {
        tempoE = 0;
        contadorE++;
        if (contadorE > 3) {
          contadorE = 1;
        }
      }
    }

    //PRA CIMA
    if (keyIsDown(UP_ARROW)) {
      image(cima[contadorC], x, y, 60, 69);
      if (y <= 400) {
        y = y - 3;
      }
      if (y <= 0) {
        y = 400;
      }
      tempoC++;
      if (tempoC > 15) {
        tempoC = 0;
        contadorC++;
        if (contadorC > 2) {
          contadorC = 1;
        }
      }
    }

    //PRA BAIXO
    if (keyIsDown(DOWN_ARROW)) {
      image(baixo[contadorB], x, y, 60, 69);
      if (y >= 0) {
        y = y + 3;
      }
      if (y > 400) {
        y = 0;
      }
    }
    tempoB++;
    if (tempoB > 3) {
      tempoB = 0;
      if (contadorB < 3) {
        contadorB = 1;
      }
    }
//FASE1
    if(fase == 1){
      fill(255,255,255)
      textFase('9 + 3 = ?', f1a, f1b, f1c)
      textSize(15)
      text(" Tempo: " + time, 445, 40)
      ellipse(x, y, 1)
      //ERRRADO 1
      ellipse(xObja, yObjG,1)
      //ERRADO 2
      ellipse(xObjb, yObjG, 1)
      //CERTO
      ellipse(xObjc, yObjG, 1)
    
      //comando errou
        if((dist(x, y, xObja, yObjG) < 40) || (dist(x, y, xObjb, yObjG)<40)){
          console.log("bateu")
          tela=6;
        }
      //PROXIMA FASE
        if(dist(x, y, xObjc, yObjG) < 40){
          console.log("iupi")
          fase=2
          x=0
          y=300
          time=10
        }
    }
    
//FASE2
    if(fase == 2){
      fill(255,255,255)
      textFase('5 - 8 = ?', f2a, f2b, f2c)
      textSize(15)
      text(" Tempo: " + time, 445, 40)
      ellipse(x, y, 1)
      //ERRRADO 1
      ellipse(xObja, yObjG,1)
      //ERRADO 2
      ellipse(xObjb, yObjG, 1)
      //CERTO
      ellipse(xObjc, yObjG, 1)
    
      //comando errou
        if((dist(x, y, xObjc, yObjG) < 40) || (dist(x, y, xObjb, yObjG)<40)){
          console.log("bateu")
          tela=6;
        }
      //comando parabens
        if(dist(x, y, xObja, yObjG) < 40){
          console.log("iupi")
          fase=3
          x=0
          y=300
          time=10
        }
    }
//FASE3
    if(fase == 3){
      fill(255,255,255)
      textFase('5 x 3 = ', f3a, f3b, f3c)
      textSize(15)
      text(" Tempo: " + time, 445, 40)
      ellipse(x, y, 1)
      //ERRRADO 1
      ellipse(xObja, yObjG,1)
      //ERRADO 2
      ellipse(xObjb, yObjG, 1)
      //CERTO
      ellipse(xObjc, yObjG, 1)
    
      //comando errou
        if((dist(x, y, xObja, yObjG) < 40) || (dist(x, y, xObjb, yObjG)<40)){
          console.log("bateu")
          tela=6;
        }
      //comando parabens
        if(dist(x, y, xObjc, yObjG) < 40){
          console.log("iupi")
          fase=4
          x=0
          y=300
          time=20
        }
    }
//FASE 4
   if(fase == 4){
      fill(255,255,255)
      textFase('32 x 4 = ?', f4a, f4b, f4c)
      textSize(15)
      text(" Tempo: " + time, 445, 40)
      ellipse(x, y, 1)
      //ERRRADO 1
      ellipse(xObja, yObjG,1)
      //ERRADO 2
      ellipse(xObjb, yObjG, 1)
      //CERTO
      ellipse(xObjc, yObjG, 1)
    
      //comando errou
        if((dist(x, y, xObja, yObjG) < 40) || (dist(x, y, xObjc, yObjG)<40)){
          console.log("bateu")
          tela=6;
        }
      //comando parabens
        if(dist(x, y, xObjb, yObjG) < 40){
          console.log("iupi")
          fase=5
          x=0
          y=300
          time=10
        }
    }
//FASE 5
  if(fase == 5){
      fill(255,255,255)
      textFase('420 / 30 = ?', f5a, f5b, f5c)
      textSize(15)
      text(" Tempo: " + time, 445, 40)
      ellipse(x, y, 1)
      //ERRRADO 1
      ellipse(xObja, yObjG,1)
      //ERRADO 2
      ellipse(xObjb, yObjG, 1)
      //CERTO
      ellipse(xObjc, yObjG, 1)
    
      //comando errou
        if((dist(x, y, xObja, yObjG) < 40) || (dist(x, y, xObjc, yObjG)<40)){
          console.log("bateu")
          tela=6;
        }
      //comando parabens
        if(dist(x, y, xObjb, yObjG) < 40){
          console.log("iupi")
          tela = 7
          x=0
          y=300
          time=10
        }
    }
  }
  //TELA MANUAL

  if (tela == 3) {
    image(img3, 0, 0, 500, 400);
    fill("#F6D965");
    rect(7, 3, 70, 30, 5);
    fill(0, 0, 0);
    textFont(font2);
    textSize(20);
    text("VOLTAR", 40, 25);
    textSize(25);
    text("JOGAR", 75, 373)
    text("COMANDOS", 201, 373)
  }

  //TELA CRÉDITOS
  if (tela == 4) {
    image(img4, 0, 0, 500, 400);
    fill("#F6D965");
    rect(7, 3, 70, 30, 5);
    fill(0, 0, 0);
    textFont(font2);
    textSize(20);
    text("VOLTAR", 40, 25);
  }
  //TELA ACABOU O TEMPO
  if (tela == 5){
    time=10
    image(img5, 0, 0, 500, 400);
    textFont(font2);
    textSize(32)
    fill('#21DF02')
    text("voltar", 139, 335)
  }
  //TELA ERROU
  if (tela ==6 ){
    time=10
    image(img6, 0, 0, 500, 400);
    textFont(font2);
    textSize(32)
    fill('#21DF02')
    text("voltar", 142, 345)
  }
//TELA WINNER
  if (tela == 7){
    time=10
    image(img7, 0, 0, 500, 400);
    textFont(font2);
    textSize(32)
    fill('#F27EA9')
    text("home", 142, 303)
    text("replay", 142, 362)
  }
//TELA COMANDOS
  if(tela == 8){
    image(img8, 0, 0, 500, 400);
    textFont(font2);
    textSize(25);
    text("JOGAR", 435, 370)
  }
}