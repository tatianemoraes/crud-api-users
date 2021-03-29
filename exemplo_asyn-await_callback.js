// // botao
//  pintar cor do botao
//  chamar API
// mudar o texto

// com callback
// quando usou um callback e nao colocou dentro do retorno do callback (que é o .then()), o q voce quer que ele altere, ele somente alterará apos executar todo o restante do codigo, ex:


var texto = undefined
var cor = document.querySelector('.button').style.background = 'black';
getUsers().then(function(response) {
  console.log('Hello World');
  texto = response.data.txt;
});
var text = document.querySelector('.button').innerHTML = texto;

// a ordem descrita nao é considerada literalmente
// a ordem de execucao é:
// mudar a cor do botao, mudar o texto e depois coloca 'Hello world'
// pq o mais 'pesado' é executado por ultimo


// na forma abaixo, agora sera executada na ordem desejada
// cor do botao, api e texto, pq esta dentro do retorno
var cor = document.querySelector('.button').style.background = 'black';
getUsers().then(function(response) {
  console.log('Hello World');
  var text = document.querySelector('.button').innerHTML = response.data.txt;
});


// forma assincrona
// é executado na forma literal
async function renderizarTextoNovo() {
  var cor = document.querySelector('.button').style.background = 'black';
 const response = await getUsers(); // consumindo API
 var text = document.querySelector('.button').innerHTML = response.data.txt;
}
renderizarTextoNovo();
