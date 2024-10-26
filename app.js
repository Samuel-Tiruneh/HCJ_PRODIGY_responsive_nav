// script.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const themeButton = document.getElementById('theme-button');
    const navLinks = document.querySelectorAll('.nav__link');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    });
  
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      if (themeButton.classList.contains('bx-moon')) {
        themeButton.classList.replace('bx-moon', 'bx-sun');
      } else {
        themeButton.classList.replace('bx-sun', 'bx-moon');
      }
    });
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = '#3CB371';
      });
      link.addEventListener('mouseout', () => {
        link.style.color = '';
      });
    });
  
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - header.offsetHeight) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active-link');
        }
      });
    });
  });
  