const imgTrafficLight = document.querySelector('img')
const btnStart = document.querySelector('.start_btn')
const btnRefresh = document.querySelector('.refresh_btn')
const counterText = document.getElementById('demo')
const card = document.querySelector('.card-panel')

let counter = 0

btnStart.onclick = () => {
  contador()
  btnStart.setAttribute('disabled', true)
}

btnRefresh.onclick = () => {
  window.location.reload()
}

const contador = () => {
  setInterval(() => {
    if (counter <= 60) {
      counterText.innerHTML = counter
      counter = counter + 1
      condicaoTrocaDeImagem()
    }
    if (counter === 60)
    counter = 0

  }, 1000)
}

const condicaoTrocaDeImagem = () => {
  const sinalVermelho = counter >= 0 && counter <= 20
  const sinalVerde = counter >= 20 && counter <= 52
  const attributeSrc = 'src'
  
  alterarImg(sinalVermelho, sinalVerde, attributeSrc)
  
}

const alterarImg = (sinalVermelho, sinalVerde, attributeSrc) => {

  if (sinalVermelho) {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/vermelho.png')
    card.style.backgroundColor = '#e53935'
  }
  else if (sinalVerde) {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/verde.png')
    card.style.backgroundColor = '#4caf50'
  }
  else {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/amarelo.png')
    card.style.backgroundColor = '#f9a825'
  }

}



