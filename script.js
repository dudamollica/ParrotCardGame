//varáveis globais
let arrayComparar=[]
let arrayImagens=[]
let arrayItem=[]
let arrayGifs=[]
let rodadas=0
let todasAsCartas;
//fim das variáveis globais



let quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
while(quantidadeCartas<4 || quantidadeCartas>14 || quantidadeCartas%2!==0){
    alert('Número de cartas inválidos');
    quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
}


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
jogo.innerHTML+=`<div class="carta" onclick="virarCarta(this), setTimeout(acertouOuErrou, 1000, this)">
<li> <img class="imagem" src="imagens/back.png"/> </li>
<li> <img class="gif escondido" id="${cartas[contador]}" src="imagens/${cartas[contador]}.gif"/> </li>
</div>`
contador++
}



function virarCarta(item) {
    rodadas++
    const cartaFrente=item.querySelector("img")
    cartaFrente.classList.add("escondido")
    item.classList.add("virada")
    const cartaGif=item.querySelector(".gif")
    cartaGif.classList.remove("escondido")
    console.log(item)
    }


function acertouOuErrou(item){
    let qualCarta = item.querySelector(".gif").id
    arrayComparar.push(qualCarta)

    let cartaImagem = item.querySelector(".imagem")
    arrayImagens.push(cartaImagem)

    let cartaGif = item.querySelector(".gif")
    arrayGifs.push(cartaGif)

    arrayItem.push(item)

    console.log(arrayImagens)

    if(arrayComparar.length==2){
     let carta1= arrayComparar[0]
     let carta2= arrayComparar[1]
     let arrayImagens1= arrayImagens[0]
     let arrayImagens2= arrayImagens[1]
     let arrayGifs1= arrayGifs[0]
     let arrayGifs2= arrayGifs[1]
     let arrayItem1= arrayItem[0]
     let arrayItem2= arrayItem[1]


     if(carta1 !== carta2 ){
        arrayImagens1.classList.remove("escondido")
        arrayImagens2.classList.remove("escondido")
        arrayGifs1.classList.add("escondido")
        arrayGifs2.classList.add("escondido")
        arrayItem1.classList.remove("virada")
        arrayItem2.classList.remove("virada")
     }
  
     arrayComparar=[]
     arrayImagens=[]
     arrayGifs=[]
     arrayItem=[]
     FinalizarPartida()
    }
 console.log(arrayComparar)
}



function ContadorRodadas(){
    alert(rodadas)
}


function comparador() { 
    return (Math.random() - 0.5) }

