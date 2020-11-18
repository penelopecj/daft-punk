function init() {
  const audio = document.querySelector('audio')
  const divsArray = document.querySelectorAll('div')

  function playSound(event) {
    audio.src = `./sounds/${event.target.id}.wav`
    audio.play()
  }

  // Should add a start or enable sound butten first.
  divsArray.forEach(div => div.addEventListener('mouseover', playSound))

}

window.addEventListener('DOMContentLoaded', init)
