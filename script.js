/* document.addEventListener('DOMContentLoaded', () => {
  const roles = ["Software Engineer", "Web Developer", "UI/UX Designer", "Tech enthusiast"];
  let currentIndex = 0;
  const roleElement = document.querySelector('.role');

  function changeRole() {
      roleElement.style.opacity = 0;
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % roles.length;
          roleElement.textContent = roles[currentIndex];
          roleElement.style.opacity = 1;
      }, 500);
  }

  setInterval(changeRole, 2000);
});
*/