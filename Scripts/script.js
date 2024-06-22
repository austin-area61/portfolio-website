document.addEventListener('DOMContentLoaded', () => {
  const titles = [
    'Web Developer',
    'UI/UX Expert',
    'Tech Enthusiast',
    'Aspiring ML Scientist'
  ];
  const typedTextSpan = document.querySelector('.spam .typed-text');
  let titleIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Adjust typing speed (ms per character)
  const erasingSpeed = 50; // Adjust erasing speed (ms per character)
  const delayBetweenTitles = 2000; // Delay between typing each title (ms)

  const type = () => {
    if (charIndex < titles[titleIndex].length) {
      typedTextSpan.textContent += titles[titleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTitles);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      typedTextSpan.textContent = titles[titleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      titleIndex++;
      if (titleIndex >= titles.length) titleIndex = 0;
      setTimeout(type, typingSpeed);
    }
  };

  type();
});