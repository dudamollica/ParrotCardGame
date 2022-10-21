//prompt
let quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
while(quantidadeCartas<4 || quantidadeCartas>14 || quantidadeCartas%2!==0){
    alert('Número de cartas inválidos');
    quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
}


//criação das cartas embaralhadas
const cartas=["fiestaparrot", "fiestaparrot",
              "bobrossparrot","bobrossparrot",
              "explodyparrot","explodyparrot",
              "metalparrot","metalparrot",
              "unicornparrot","unicornparrot",
              "tripletsparrot","tripletsparrot",
              "revertitparrot","revertitparrot"]
cartas.length=quantidadeCartas
cartas.sort(comparador)
let jogo= document.querySelector("ul")
let contador=0
while (quantidadeCartas>contador){
jogo.innerHTML+=`<li class="carta" onclick="virarCarta(this)">
<div> <img src="imagens/back.png"/> </div>
<div> <img class="gif escondido" src="imagens/${cartas[contador]}.gif"/> </div>
</li>`
contador++
}

//Virando a carta
function virarCarta(item) {
    const cartaFrente=item.querySelector("img")
    cartaFrente.classList.toggle("escondido")
    item.classList.toggle("virada")
    const cartaGif=item.querySelector(".gif")
    cartaGif.classList.toggle("escondido")
    }
    

//função para embaralhar
function comparador() { 
return (Math.random() - 0.5) }