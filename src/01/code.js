function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return

    audio.currentTime = 0 //rewind to the start
    audio.play()

    // key.addClass('playing') - JQuery
    key.classList.add('playing')
    // key.classList.remove('playing')
    // key.classList.toggle('playing')

}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return //skip it if it's not a transform  
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)