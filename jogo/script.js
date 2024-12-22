//variaveis
var dificuldade = 1;
var button1 = document.getElementById('facil');
var button2 = document.getElementById('medio');
var button3 = document.getElementById('dificil');
var velhacor = document.getElementById('spanVelha');
var todosButoesDificuldade = document.querySelectorAll('.button-dificuldade');
var contVitoria = 0;
var conderrota = 0;
var ganhou = 'niguem';
var cont = 0;
var lista =[null, null, null,null,null,null,null,null,null];
var textoButton = document.querySelectorAll(".button");
var linha = document.getElementById('linha5');
var reiniciar = document.getElementById('reiniciar');
var textoButton = document.querySelectorAll(".button");


//variaveis iniciais ativas
todosButoesDificuldade.forEach(buttoes=>buttoes.classList.add('desativar-before'));
button1.classList.add('verde');
button1.classList.remove('desativar-before');
button1.classList.add('ativar-before');
velhacor.style.color = 'rgb(0, 255, 0)';
document.getElementById('vitoria').innerHTML = 'vitoria: ' + contVitoria
document.getElementById('derrota').innerHTML = 'derrota: ' + conderrota;
textganhou();
reiniciar.style.display ='none';


function textganhou(){
  document.getElementById('vitoria').innerHTML = 'vitoria: ' + contVitoria;
  document.getElementById('derrota').innerHTML = 'derrota: ' + conderrota;  
}

function reniciar(){
  lista =[null, null, null,null,null,null,null,null,null];
  for(let i = 0;i<9;i++){
    textoButton[i].style.color = 'transparent';
    textoButton[i].textContent = '-1';
    }
  linha.style.display = 'none';
  ganhou = 'niguem';
  reiniciar.style.display ='none';}



function desativarEfeitos(){
  document.body.classList.remove('fundo-verde')
  document.body.classList.remove('fundo-amarelo')
  document.body.classList.remove('fundo-vermelho')
  todosButoesDificuldade.forEach(buttoes=>buttoes.classList.add('desativar-before'));
  todosButoesDificuldade.forEach(buttoes=>buttoes.classList.remove('ativar-before'));
  todosButoesDificuldade.forEach(buttao=>{
    buttao.classList.remove('verde');
    buttao.classList.remove('amarelo');
    buttao.classList.remove('vermelho');
  });
}
function nivel(valor){
  desativarEfeitos();
  dificuldade = valor;
  if(valor == 1){
    document.body.classList.add('fundo-verde');
    button1.classList.remove('desativar-before');
    button1.classList.add('ativar-before');
    button1.classList.add('verde');
    velhacor.style.color = 'rgb(0, 255, 0)';
    reniciar();

  }
  else if(valor == 2){
    document.body.classList.add('fundo-amarelo');
    button2.classList.remove('desativar-before');
    button2.classList.add('ativar-before');
    button2.classList.add('amarelo');
    velhacor.style.color = 'rgb(246, 255, 0)';
    reniciar();

  }
  else if(valor == 3){
    document.body.classList.add('fundo-vermelho');
    button3.classList.remove('desativar-before');
    button3.classList.add('ativar-before');
    button3.classList.add('vermelho');
    velhacor.style.color = 'rgb(255, 0, 0)';
    reniciar();

  }
}

function ganhouJogador(){

  linha.style.height = '2px';
  linha.style.width = '100%';
  linha.style.top = '0';
  linha.style.left = '0';
  linha.style.backgroundColor = 'rgb(87, 255, 30)';
  linha.style.transform = "none";
  for(let i =0;i<3;i++){
    if(lista[0+(i*3)] === 'x' && lista[1+(i*3)] === 'x' && lista[2+(i*3)] === 'x'){
      ganhou = 'player';
      contVitoria++;
      textganhou();
      linha.style.top = ((i+1*i+1)*53.33)+"px";
      linha.style.display ='block';
      linha.style.transform ='rotate(0deg)';
      return;


    }
    else if(lista[0+i] === 'x' && lista[3+i] === 'x' && lista[6+i] === 'x'){
      ganhou = 'player';
      contVitoria++;
      textganhou();
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = ((i+1*i+1)*53.13)+"px";
      linha.style.display ='block';
      return;

    }
    else if(lista[0] === 'x' && lista[4] === 'x' && lista[8] === 'x'){
      ganhou = 'player';     
      contVitoria++;
      textganhou();
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = 3*53.13+"px";
      linha.style.transform = 'none'
      linha.style.transform = 'rotate(-45deg)'
      linha.style.display ='block';
      return;


    }
    else if(lista[2] === 'x' && lista[4] === 'x' && lista[6] === 'x'){
      ganhou = 'player';
      contVitoria++;
      textganhou();
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = 3*53.13+"px";
      linha.style.transform = 'rotate(45deg)'
      linha.style.display ='block';
      return;


    }
    else if(lista[0+i] === '0' && lista[3+i] === '0' && lista[6+i] === '0'){
      ganhou = 'bot';
      contVitoria++;
      textganhou();
      linha.style.backgroundColor = 'red';
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = ((i+1*i+1)*53.13)+"px";
      linha.style.display ='block';
      return;

    }
    if(lista[0+(i*3)] === '0' && lista[1+(i*3)] === '0' && lista[2+(i*3)] === '0'){
      ganhou = 'bot';
      conderrota++;
      textganhou();
      linha.style.transform ='rotate(0deg)';
      linha.style.top = ((i+1*i+1)*53.33)+"px";
      linha.style.backgroundColor = 'red';
      linha.style.display ='block';
      return;


    }
    else if(lista[0] === '0' && lista[4] === '0' && lista[8] === '0'){
      ganhou = 'bot';
      conderrota++;
      textganhou();
      linha.style.backgroundColor = 'red';
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = 3*53.13+"px";
      linha.style.transform = 'rotate(-45deg)'
      linha.style.display ='block';
      return;


    }
    else if(lista[6] === '0' && lista[4] === '0' && lista[2] === '0'){
      ganhou = 'bot';
      conderrota++;
      textganhou();
      linha.style.backgroundColor = 'red';
      linha.style.height = '100%';
      linha.style.width = '2px';
      linha.style.top = '0';
      linha.style.left = 3*53.13+"px";
      linha.style.transform = 'rotate(45deg)'
      linha.style.display ='block';
      return;

    }
  }
  if( lista[0] !==null && lista[1] !==null &&  lista[2] !==null &&  lista[3] !==null &&  lista[4] !==null &&  lista[5] !==null &&  lista[6] !==null &&  lista[7] !==null &&  lista[8] !==null && ganhou === 'niguem'){
    ganhou = 'empate';

  }
}


function mostrar(){
  for(let i = 0;i<9;i++){
    if(lista[i] !== null){
      textoButton[i].textContent= lista[i];
      textoButton[i].style.color = 'black';

    }
  }

}


function atrapalhar(){
  for(let i = 0;i<9;i++){
    if(lista[0+(i*3)] === null && lista[1+(i*3)] === 'x' && lista[2+(i*3)] === 'x'){
      lista[0+(i*3)] = '0';
      return 1;
    }
    else if(lista[0+(i*3)] === 'x' && lista[1+(i*3)] === null && lista[2+(i*3)] === 'x'){
      lista[1+(i*3)] = '0';
      return 1;
    }
    else if(lista[0+(i*3)] === 'x' && lista[1+(i*3)] === 'x' && lista[2+(i*3)] === null){
      lista[2+(i*3)] = '0';
      return 1;
    }
    else if(lista[0+i] === null && lista[3+i] === 'x' && lista[6+i] === 'x'){
      lista[0+i] = '0'
      return 1;
    }
    else if(lista[0+i] === 'x' && lista[3+i] === null && lista[6+i] === 'x'){
      lista[3+i] = '0'
      return 1;
    }
    else if(lista[0+i] === 'x' && lista[3+i] === 'x' && lista[6+i] === null){
      lista[6+i] = '0'
      return 1;
    }
    else if(lista[0] === null && lista[4] === 'x' && lista[8] === 'x'){
      lista[0] = '0'
      return 1;
    }
    else if(lista[0] === 'x' && lista[4] === null && lista[8] === 'x'){
      lista[4] = '0'
      return 1;
    }
    else if(lista[0] === 'x' && lista[4] === 'x' && lista[8] === null){
      lista[8] = '0'
      return 1;
    }
    else if(lista[6] === null && lista[4] === 'x' && lista[2] === 'x'){
      lista[6] = '0'
      return 1
    }
    else if(lista[6] === 'x' && lista[4] === null && lista[2] === 'x'){
      lista[4] = '0'
      return 1
    }
    else if(lista[6] === 'x' && lista[4] === 'x' && lista[2] === null){
      lista[2] = '0'
      return 1
    }
  }
  return 0;
}

function marcaXbot(){
  for(let i = 0;i<9;i++){
    if(lista[0+(i*3)] === null && lista[1+(i*3)] === '0' && lista[2+(i*3)] === '0'){
      lista[0+(i*3)] = '0';
      return 1;
    }
    else if(lista[0+(i*3)] === '0' && lista[1+(i*3)] === null && lista[2+(i*3)] === '0'){
      lista[1+(i*3)] = '0';
      return 1;
    }
    else if(lista[0+(i*3)] === '0' && lista[1+(i*3)] === '0' && lista[2+(i*3)] === null){
      lista[2+(i*3)] ='0';
      return 1;
    }
    else if(lista[0+i] === null && lista[3+i] === '0' && lista[6+i] === '0'){
      lista[0+i] = '0'
      return 1;
    }
    else if(lista[0+i] === '0' && lista[3+i] === null && lista[6+i] === '0'){
      lista[3+i] = '0'
      return 1;
    }
    else if(lista[0+i] === '0' && lista[3+i] === '0' && lista[6+i] === null){
      lista[6+i] = '0'
      return 1;
    }
    else if(lista[0] === null && lista[4] === '0' && lista[8] === '0'){
      lista[0] = '0'
      return 1;
    }
    else if(lista[0] === '0' && lista[4] === null && lista[8] === '0'){
      lista[4] = '0'
      return 1;
    }
    else if(lista[0] === '0' && lista[4] === '0' && lista[8] === null){
      lista[8] = '0'
      return 1;
    }
    else if(lista[6] === null && lista[4] === '0' && lista[2] === '0'){
      lista[6] = '0'
      return 1;    
    }
    else if(lista[6] === '0' && lista[4] === null && lista[2] === '0'){
      lista[4] = '0'
      return 1;    
    }
    else if(lista[6] === '0' && lista[4] === '0' && lista[2] === null){
      lista[2] = '0'
      return 1;    
    }
  }
  return 0;
}





function dificuldadeDificil(){
  const marcou1 = marcaXbot();
  console.log(marcou1)
   if(marcou1 == 0){
    const marcou2 = atrapalhar();
    if(marcou2 == 0){
      botSImples();
    }
   }
}

function botSImples(){
  let opcoes = []
  let cont = 0;
  for(let i = 0; i<9;i++){
    if(lista[i]=== null){
      opcoes[cont] = i;
      cont ++;
    }
    
  }
  if((opcoes.length) > 0){
    let aleatorio = Math.floor(Math.random()*opcoes.length);
    lista[opcoes[aleatorio]] = '0';
  }
}

function bot(nivel){
  let probabilidade = 0;
  probabilidade = Math.floor(Math.random()*10)+1;
  if (nivel === 1){
    botSImples();
  }
  else if (nivel === 2){
    if(probabilidade>=8){
      dificuldadeDificil()
    }
    else{
      botSImples();
    }
  }
  else if (nivel === 3){
    if(probabilidade<9){
      dificuldadeDificil();
    }
    else{
      botSImples();
    }    
  }
}


  function marcaX(posicao,valor){

    if(lista[posicao] === null && ganhou == 'niguem'){
      lista[posicao] = valor;
      ganhouJogador();
      if(ganhou == 'niguem'){
        bot(dificuldade);
        ganhouJogador();
      }
      mostrar();
      if(ganhou !== 'niguem'){
        reiniciar.style.display ='block';
        if (ganhou == 'bot'){
          reiniciar.style.color ='rgb(255, 0, 0)';
        }
        else if(ganhou == 'empate'){
          reiniciar.style.color ='rgb(246, 255, 0)';
          textoButton.forEach(posicoes => posicoes.style.color = 'yellow');
        }
        else{
          reiniciar.style.color = 'rgb(0, 255, 0)';
        }
      }
    }
    
  }