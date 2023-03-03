function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  
  // Add touchend event listener
  key.addEventListener('touchend', function (e) {
    e.preventDefault();
    const keyCode = this.getAttribute('data-key');
    playSound(keyCode);
  });

    // Add click event listener
    key.addEventListener('click', function (e) {
      e.preventDefault();
      const keyCode = this.getAttribute('data-key');
      playSound(keyCode);
    });
});

// Add event listener for both keydown, mouse click, and touchstart events
window.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode;
  playSound(keyCode);
});

window.addEventListener('click', function (e) {
  const keyCode = e.keyCode;
  playSound(keyCode);
});

window.addEventListener('touchstart', function (e) {
  e.preventDefault();
  const keyCode = e.target.getAttribute('data-key');
  playSound(keyCode);
});
