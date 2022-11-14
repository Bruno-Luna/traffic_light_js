const imgTrafficLight = document.querySelector('img')
const btnStart = document.querySelector('.start_btn')
const btnRefresh = document.querySelector('.refresh_btn')
const counterText = document.getElementById('demo')
const containerCounterText = document.querySelector('.card-panel')

let counter = 0

btnStart.onclick = () => {
  startCounter()
  btnStart.setAttribute('disabled', true)
}

btnRefresh.onclick = () => {
  window.location.reload()
}

const startCounter = () => {
  setInterval(() => {
    if (counter <= 60) {
      counterText.innerHTML = counter
      counter = counter + 1
      changeImage()
    }
    if (counter === 60)
    counter = 0

  }, 1000)
}

const changeImage = () => {
  const sinalVermelho = counter >= 0 && counter <= 20
  const sinalVerde = counter > 20 && counter <= 52
  const attributeSrc = 'src'

  if (sinalVermelho) {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/vermelho.png')
    containerCounterText.style.backgroundColor = '#e53935'
  }
  else if (sinalVerde) {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/verde.png')
    containerCounterText.style.backgroundColor = '#4caf50'
  }
  else {
    imgTrafficLight.setAttribute(`${attributeSrc}`, 'assets/img/amarelo.png')
    containerCounterText.style.backgroundColor = '#f9a825'
  }
}



