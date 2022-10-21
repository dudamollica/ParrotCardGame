let quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
while(quantidadeCartas<4 || quantidadeCartas>14 || quantidadeCartas%2!==0){
    alert('Numero de cartas invalidos');
    quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
}

let jogo= document.querySelector("ul")
let carta= jogo.innerHTML
let contador=0
while (quantidadeCartas-1>contador){
jogo.innerHTML+=`<li>${carta}</li>`
contador++
}