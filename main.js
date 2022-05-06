function tocaSom(seletorAudio){
     const elemento = document.querySelector(seletorAudio);

     if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        }
        else{
            alert('Elemento não encontrado ou seletor invalido');
        }
        
     }
     


const listaDeTeclas = document.querySelectorAll('.tecla'); //Criando uma referencia constante e atribuindo a lista de teclas




for(let contador=0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //faz uma abertura de dentro da string - TEMPLATE STRING


    //'#som_{instrumento}'

    tecla.onclick = function(){ //função anonima que executa apenas com o clique
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento) { // OnkeyDown é quando percorro a tecla, operador de igualdade é 
        //console.log(evento);
      if(evento.code === "Enter" || evento.code === "Space"){ //.code devido ao código dela
            tecla.classList.add('ativa'); // = função de atribuir == condição === compara não só o valor mas também o tipo     
        }
    
    }
    tecla.onkeyup = function() { //onkeyup - quando eu solto meu teclado
        tecla.classList.remove('ativa');
    }
    
}
//let contador=0; // Criando nosso contador para o laço
/* Funciona dessa forma, porém iremos utilizar o while também
while(contador<listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //faz uma abertura de dentro da string - TEMPLATE STRING


    //'#som_{instrumento}'

    tecla.onclick = function(){ //função anonima que executa apenas com o clique
        tocaSom(idAudio);
        
    }
    contador = contador + 1;
  
}
/*






/* Todo esse código foi montado, mas não está automatizado - muito trabalho, imagine 72 teclas?
//declaração de função - criando a fnção POM
function tocaSomPom() {
    //busca a ID do audio pom e utliza a função play para tocar o som
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play()
}
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play()
}
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play()
}
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play()
}
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play()
}
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play()
}
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play()
}

document.querySelector('.tecla_pom').onclick=tocaSomPom;
document.querySelector('.tecla_clap').onclick=tocaSomClap;
document.querySelector('.tecla_tim').onclick=tocaSomTim;
document.querySelector('.tecla_puff').onclick=tocaSomPuff;
document.querySelector('.tecla_splash').onclick=tocaSomSplash;
document.querySelector('.tecla_toim').onclick=tocaSomToim;
document.querySelector('.tecla_psh').onclick=tocaSomPsh;
document.querySelector('.tecla_tic').onclick=tocaSomTic;
document.querySelector('.tecla_tom').onclick=tocaSomTom;
*/