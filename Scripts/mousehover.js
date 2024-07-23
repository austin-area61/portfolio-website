/*
document.addEventListener('DOMContentLoaded', () => {
  const cursorEffect = document.createElement('div');
  cursorEffect.classList.add('cursor-effect');
  document.body.appendChild(cursorEffect);

  document.addEventListener('mousemove', (e) => {
    cursorEffect.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
  });

  document.querySelectorAll('a, button, .tech-item').forEach((el) => {
    el.addEventListener('mouseover', () => cursorEffect.classList.add('hover'));
    el.addEventListener('mouseout', () => cursorEffect.classList.remove('hover'));
  });
});
*/