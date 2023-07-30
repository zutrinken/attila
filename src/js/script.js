jQuery(function ($) {

  var html = $('html');
  var viewport = $(window);

  /* ==========================================================================
     Menu
     ========================================================================== */

  function menu() {
    html.toggleClass('menu-active');
  };

  $('#menu').on({
    'click': function () {
      menu();
    }
  });

  $('.nav-menu').on({
    'click': function () {
      menu();
    }
  });

  $('.nav-close').on({
    'click': function () {
      menu();
    }
  });

  viewport.on({
    'resize': function () {
      html.removeClass('menu-active');
    },
    'orientationchange': function () {
      html.removeClass('menu-active');
    }
  });

  /* ==========================================================================
     Parallax cover
     ========================================================================== */

  var cover = $('.cover');
  var coverPosition = 0;

  function prlx() {
    if (cover.length >= 1) {
      var windowPosition = viewport.scrollTop();
      (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25) : coverPosition = 0;
      cover.css({
        '-webkit-transform': 'translate3d(0, ' + coverPosition + 'px, 0)',
        'transform': 'translate3d(0, ' + coverPosition + 'px, 0)'
      });
      (viewport.scrollTop() < cover.height()) ? html.addClass('cover-active') : html.removeClass('cover-active');
    }
  }
  prlx();

  viewport.on({
    'scroll': function () {
      prlx();
    },
    'resize': function () {
      prlx();
    },
    'orientationchange': function () {
      prlx();
    }
  });

  /* ==========================================================================
     Gallery
     ========================================================================== */

  function gallery() {
    'use strict';
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
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

    function setAttilaDarkSyntaxHighlight() {
      var forPrismLink = document.getElementById('for-prism');
      if (forPrismLink) {
        var newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.kind = 'dark';
        newLink.id = 'for-prism';
        newLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-nord.min.css';
        newLink.integrity = 'sha512-/1nWQ0aAin0IGM5zDndLyY+6xUSiqA1ILh4Mm0XjSqqj4cXOH36rB/2Ep96sT4FOxvNEnUxyPNwqPlEmuImAFw==';
        newLink.crossOrigin = 'anonymous';
        newLink.referrerPolicy = 'no-referrer';
        forPrismLink.parentNode.replaceChild(newLink, forPrismLink);
      }
    }

    function dark() {
      html.removeClass('theme-light').addClass('theme-dark');
      localStorage.setItem('attila_theme', 'dark');
      toggleText.text(toggle.attr('data-dark'));
      setAttilaDarkSyntaxHighlight();
    }

    function setAttiaLightSyntaxHighlight() {
      var forPrismLink = document.getElementById('for-prism');
      if (forPrismLink) {
        var newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.kind = 'light';
        newLink.id = 'for-prism';
        newLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coldark-cold.min.css';
        newLink.integrity = 'sha512-SObDdizQ8YqdOMSl9kyFO0+4eIkQdjx7Na4Jb1Kh7fFqUlNlGyNJfDBK8ZGbD3SN3U7A7hsdJ8vEtakIja4ZSg==';
        newLink.crossOrigin = 'anonymous';
        newLink.referrerPolicy = 'no-referrer';
        forPrismLink.parentNode.replaceChild(newLink, forPrismLink);
      }
    }

    function light() {
      html.removeClass('theme-dark').addClass('theme-light');
      localStorage.setItem('attila_theme', 'light');
      toggleText.text(toggle.attr('data-light'));
      setAttiaLightSyntaxHighlight();
    }

    function system() {
      html.removeClass(['theme-dark', 'theme-light']);
      localStorage.removeItem('attila_theme');
      toggleText.text(toggle.attr('data-system'));

      const theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      switch (theme) {
        case 'dark':
          setAttilaDarkSyntaxHighlight();
          break;
        case 'light':
          setAttiaLightSyntaxHighlight();
          break;
        default:
          setAttiaLightSyntaxHighlight();
          break;
      }
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
