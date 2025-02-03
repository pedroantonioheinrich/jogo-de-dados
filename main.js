let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = 'dado' + randomNumber1 + '.svg';
let randomImageSource = 'img/' + randomDiceImg; 
let image1 = document.querySelectorAll('img')[0];


image1.setAttribute('src', randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = 'img/dado' + randomNumber2 + '.svg';
let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 venceu! 🙆‍♂️'
}else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = '🏆 Computador 2 venceu! 🤖'
}else{
    document.querySelector('h1').innerHTML = '😐 Empate'
}

function recarregarPagina() {
    location.reload();
  }