const imgSemaforo = document.querySelector('img')
const btnStart = document.querySelector('.start_btn')
const btnRefresh = document.querySelector('.refresh_btn')
const elementH4 = document.getElementById("demo");
const card = document.querySelector(".card-panel");

let cont = 0

btnStart.onclick = () => {
  contador()
}

btnRefresh.onclick = () => {
  window.location.reload()
}

const contador = () => {
  setInterval(() => {
    if (cont <= 60) {
      elementH4.innerHTML = cont
      cont = cont + 1;
      condicaoTrocaDeImagem()
    }
    if (cont === 60)
      cont = 0

  }, 1000);
}

const condicaoTrocaDeImagem = () => {
  const sinalVermelho = cont >= 0 && cont <= 20
  const sinalVerde = cont >= 20 && cont <= 52
  const attributeSrc = 'src'
  
  alterarImg(sinalVermelho, sinalVerde, attributeSrc)
  
}

const alterarImg = (sinalVermelho, sinalVerde, attributeSrc) => {

  if (sinalVermelho) {
    imgSemaforo.setAttribute(`${attributeSrc}`, "assets/img/vermelho.png")
    card.style.backgroundColor = '#e53935'
  }
  else if (sinalVerde) {
    imgSemaforo.setAttribute(`${attributeSrc}`, "assets/img/verde.png")
    card.style.backgroundColor = '#4caf50'
  }
  else {
    imgSemaforo.setAttribute(`${attributeSrc}`, "assets/img/amarelo.png")
    card.style.backgroundColor = '#f9a825'
  }

}



