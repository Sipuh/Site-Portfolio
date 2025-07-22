const typingText = document.querySelector('.typing');

typingText.addEventListener('animationend', (e) => {
  if (e.animationName === 'typing') {
    typingText.classList.add('finished');
  }
});

