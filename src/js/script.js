/* ==========================================================================
   Menu
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", function () {
    var html = document.documentElement;
    var menu = document.getElementById("menu");
    var navMenu = document.querySelector(".nav-menu");
    var navClose = document.querySelector(".nav-close");
  
    // Function to toggle the menu
    function toggleMenu() {
      html.classList.toggle("menu-active");
    }
  
    // Event listeners for menu toggle
    if (menu) menu.addEventListener("click", toggleMenu);
    if (navMenu) navMenu.addEventListener("click", toggleMenu);
    if (navClose) navClose.addEventListener("click", toggleMenu);
  
    // Remove menu-active class on window resize or orientation change
    window.addEventListener("resize", function () {
      html.classList.remove("menu-active");
    });
  
    window.addEventListener("orientationchange", function () {
      html.classList.remove("menu-active");
    });
  });

/* ==========================================================================
   Parallax cover
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", function () {
    var html = document.documentElement;
    var cover = document.querySelector(".cover");
    var coverPosition = 0;
    var ticking = false;
  
    // Function to handle the parallax effect
    function prlx() {
      if (cover) {
        var windowPosition = window.scrollY || document.documentElement.scrollTop;
        coverPosition = windowPosition > 0 ? Math.floor(windowPosition * 0.25) : 0;
  
        cover.style.transform = `translate3d(0, ${coverPosition}px, 0)`;
  
        if (windowPosition < cover.offsetHeight) {
          html.classList.add("cover-active");
        } else {
          html.classList.remove("cover-active");
        }
      }
    }
    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          prlx();
          ticking = false;
        });
        ticking = true;
      }
    }
  
    // Update cached cover height on resize
    window.addEventListener("resize", () => {
      coverHeight = cover ? cover.offsetHeight : 0;
    });
  
    // Attach scroll and resize listeners
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("orientationchange", onScrollOrResize);
  
    // Initial call
    prlx();
  });
  
  /* ==========================================================================
   Gallery
   ========================================================================== */

   function gallery() {
    'use strict';
    var images = document.querySelectorAll('.kg-gallery-image img');
  
    images.forEach(function(image) {
      var container = image.closest('.kg-gallery-image');
      if (container && image.hasAttribute('width') && image.hasAttribute('height')) {
        var width = parseFloat(image.getAttribute('width'));
        var height = parseFloat(image.getAttribute('height'));
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
      }
    });
  }
  
  // Execute the gallery function
  gallery();

/* ==========================================================================
   Theme
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", function () {
    'use strict';
  
    var html = document.documentElement;
    var toggle = document.querySelector('.js-theme');
    var toggleText = toggle ? toggle.querySelector('.theme-text') : null;
  
    function system() {
      html.classList.remove('theme-dark', 'theme-light');
      localStorage.removeItem('attila_theme');
      if (toggleText) {
        toggleText.textContent = toggle.getAttribute('data-system');
      }
    }
  
    function dark() {
      html.classList.remove('theme-light');
      html.classList.add('theme-dark');
      localStorage.setItem('attila_theme', 'dark');
      if (toggleText) {
        toggleText.textContent = toggle.getAttribute('data-dark');
      }
    }
  
    function light() {
      html.classList.remove('theme-dark');
      html.classList.add('theme-light');
      localStorage.setItem('attila_theme', 'light');
      if (toggleText) {
        toggleText.textContent = toggle.getAttribute('data-light');
      }
    }
  
    // Apply the theme based on saved preference
    switch (localStorage.getItem('attila_theme')) {
      case 'dark':
        dark();
        break;
      case 'light':
        light();
        break;
      default:
        system();
        break;
    }
  
    // Add event listener for toggle click
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
  
        if (!html.classList.contains('theme-dark') && !html.classList.contains('theme-light')) {
          dark();
        } else if (html.classList.contains('theme-dark')) {
          light();
        } else {
          system();
        }
      });
    }
  });