const imgTrafficLight = document.querySelector('img')
const btnStart = document.querySelector('.start_btn')
const btnRefresh = document.querySelector('.refresh_btn')
const counterText = document.getElementById('demo')
const containerCounterText = document.querySelector('.card-panel')


btnStart.onclick = () => {
  startCounter()
  btnStart.setAttribute('disabled', true)
}

btnRefresh.onclick = () => {
  window.location.reload()
}

const startCounter = () => {
  let counter = 0

  setInterval(() => {
    if (counter === 60){
      counter = 0
    }
      counterText.innerHTML = counter
      counter = counter + 1
      changeImage(counter)

  }, 1000)
}

const changeImage = (counter) => {
  if (counter >= 0 && counter <= 20) {
    imgTrafficLight.setAttribute('src', 'assets/img/vermelho.png')
    containerCounterText.style.backgroundColor = '#e53935'
  }
  else if (counter > 20 && counter <= 52) {
    imgTrafficLight.setAttribute('src', 'assets/img/verde.png')
    containerCounterText.style.backgroundColor = '#4caf50'
  }
  else {
    imgTrafficLight.setAttribute('src', 'assets/img/amarelo.png')
    containerCounterText.style.backgroundColor = '#f9a825'
  }
}



