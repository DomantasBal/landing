document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in-section');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= windowHeight && sectionTop >= -section.offsetHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', function () {
  let animatedElements = document.querySelectorAll('.animate-section');

  function checkPosition() {
    for (let element of animatedElements) {
      if (
        element.getBoundingClientRect().top < window.innerHeight &&
        element.getBoundingClientRect().bottom > 0
      ) {
        if (element.classList.contains('fly-in-left')) {
          element.classList.add('fly-in-left-active');
        } else if (element.classList.contains('fly-in-right')) {
          element.classList.add('fly-in-right-active');
        } else if (element.classList.contains('fly-in-center')) {
          element.classList.add('fly-in-center-active');
        }
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
  checkPosition(); // Initial check
});

document.addEventListener('DOMContentLoaded', function () {
  let animatedElements = document.querySelectorAll('.animate-section');

  function isFullyVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  }

  function checkPosition() {
    for (let element of animatedElements) {
      if (isFullyVisible(element)) {
        if (
          element.classList.contains('fly-in-left') &&
          !element.classList.contains('fly-in-left-active')
        ) {
          element.classList.add('fly-in-left-active');
        } else if (
          element.classList.contains('fly-in-right') &&
          !element.classList.contains('fly-in-right-active')
        ) {
          element.classList.add('fly-in-right-active');
        } else if (
          element.classList.contains('fly-in-center') &&
          !element.classList.contains('fly-in-center-active')
        ) {
          element.classList.add('fly-in-center-active');
        }
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
  checkPosition();
});
