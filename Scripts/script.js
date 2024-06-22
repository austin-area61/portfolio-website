document.addEventListener('DOMContentLoaded', () => {
  const text = 'Web Developer, UI/UX Expert, Tech Enthusiast, and aspiring ML Scientist';
  const typedTextSpan = document.querySelector('.spam .typed-text');
  let charIndex = 0;

  const type = () => {
    if (charIndex < text.length) {
      typedTextSpan.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed (100ms per character)
    }
  };

  type();
});