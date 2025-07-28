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

jQuery(function($) {

  var html = $('html');
  var viewport = $(window);

/* ==========================================================================
   Parallax cover
   ========================================================================== */

  var cover = $('.cover');
  var coverPosition = 0;

  function prlx() {
    if (cover.length >= 1) {
      var windowPosition = viewport.scrollTop();
      (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25): coverPosition = 0;
      cover.css({
        '-webkit-transform': 'translate3d(0, ' + coverPosition + 'px, 0)',
        'transform': 'translate3d(0, ' + coverPosition + 'px, 0)'
      });
      (viewport.scrollTop() < cover.height()) ? html.addClass('cover-active'): html.removeClass('cover-active');
    }
  }
  prlx();

  viewport.on({
    'scroll': function() {
      prlx();
    },
    'resize': function() {
      prlx();
    },
    'orientationchange': function() {
      prlx();
    }
  });

/* ==========================================================================
   Gallery
   ========================================================================== */

  function gallery() {
    'use strict';
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function(image) {
      var container = image.closest('.kg-gallery-image');
      var width = image.attributes.width.value;
      var height = image.attributes.height.value;
      var ratio = width / height;
      container.style.flex = ratio + ' 1 0%';
    });
  }
  gallery();


/* ==========================================================================
   Theme
   ========================================================================== */

  function theme() {
    'use strict';
    var toggle = $('.js-theme');
    var toggleText = toggle.find('.theme-text');

    function system() {
      html.removeClass(['theme-dark', 'theme-light']);
      localStorage.removeItem('attila_theme');
      toggleText.text(toggle.attr('data-system'));
    }

    function dark() {
      html.removeClass('theme-light').addClass('theme-dark');
      localStorage.setItem('attila_theme', 'dark');
      toggleText.text(toggle.attr('data-dark'));
    }

    function light() {
      html.removeClass('theme-dark').addClass('theme-light');
      localStorage.setItem('attila_theme', 'light');
      toggleText.text(toggle.attr('data-light'));
    }

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

    toggle.on('click', function (e) {
      e.preventDefault();

      if (!html.hasClass('theme-dark') && !html.hasClass('theme-light')) {
        dark();
      } else if (html.hasClass('theme-dark')) {
        light();
      } else {
        system();
      }
    });
  }
  theme();
});
