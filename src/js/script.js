jQuery(function($) {

  var html = $('html');
  var viewport = $(window);

/* ==========================================================================
   Menu
   ========================================================================== */

  function menu() {
    html.toggleClass('menu-active');
  };

  $('#menu').on({
    'click': function() {
      menu();
    }
  });

  $('.nav-menu').on({
    'click': function() {
      menu();
    }
  });

  $('.nav-close').on({
    'click': function() {
      menu();
    }
  });

  viewport.on({
    'resize': function() {
      html.removeClass('menu-active');
    },
    'orientationchange': function() {
      html.removeClass('menu-active');
    }
  });

/* ==========================================================================
   Search
   ========================================================================== */

  function search() {
      'use strict';
      if (
          typeof gh_search_key == 'undefined' ||
          gh_search_key == '' ||
          typeof gh_search_migration == 'undefined'
      )
      return;

      html.addClass('has-search');

      var searchInput = $('.search-field');
      var searchButton = $('.search-button');
      var searchResult = $('.search-result');
      var popular = $('.popular-wrapper');
      var includeContent = typeof gh_search_content == 'undefined' || gh_search_content == true ? true : false;

      var url =
          siteUrl +
          '/ghost/api/v3/content/posts/?key=' +
          gh_search_key +
          '&limit=all&fields=id,title,excerpt,url,updated_at,visibility&order=updated_at%20desc&formats=plaintext';
      var indexDump = JSON.parse(localStorage.getItem('ease_search_index'));
      var index;

      elasticlunr.clearStopWords();

      localStorage.removeItem('ease_index');
      localStorage.removeItem('ease_last');

      function update(data) {
          data.posts.forEach(function (post) {
              index.addDoc(post);
          });

          try {
              localStorage.setItem('dawn_search_index', JSON.stringify(index));
              localStorage.setItem('dawn_search_last', data.posts[0].updated_at);
          } catch (e) {
              console.error('Your browser local storage is full. Update your search settings following the instruction at https://github.com/TryGhost/Dawn#disable-content-search');
          }
      }

      if (
          !indexDump ||
          gh_search_migration != localStorage.getItem('ease_search_migration')
      ) {
          $.get(url, function (data) {
              if (data.posts.length > 0) {
                  index = elasticlunr(function () {
                      this.addField('title');
                      this.addField('plaintext');
                      this.setRef('id');
                  });

                  update(data);

                  localStorage.setItem(
                      'ease_search_migration',
                      gh_search_migration
                  );
              }
          });
      } else {
          index = elasticlunr.Index.load(indexDump);

          $.get(
              url +
                  "&filter=updated_at:>'" +
                  localStorage
                      .getItem('ease_search_last')
                      .replace(/\..*/, '')
                      .replace(/T/, ' ') +
                  "'",
              function (data) {
                  if (data.posts.length > 0) {
                      update(data);
                  }
              }
          );
      }

      searchInput.on('keyup', function (e) {
          var result = index.search(e.target.value, { expand: true });
          var output = '';

          result.forEach(function (post) {
              output +=
                  '<div class="search-result-row">' +
                  '<a class="search-result-row-link" href="' +
                  post.doc.url +
                  '">' +
                  '<div class="search-result-row-title">' +
                  post.doc.title +
                  '</div><div class="search-result-row-excerpt">' +
                  post.doc.excerpt +
                  '</div></a>' +
                  '</div>';
          });

          searchResult.html(output);

          if (e.target.value.length > 0) {
              searchButton.addClass('search-button-clear');
          } else {
              searchButton.removeClass('search-button-clear');
          }

          if (result.length > 0) {
              popular.hide();
          } else {
              popular.show();
          }
      });

      $('.search-form').on('submit', function (e) {
          e.preventDefault();
      });

      searchButton.on('click', function () {
          if ($(this).hasClass('search-button-clear')) {
              searchInput.val('').focus().keyup();
          }
      });
  }
  search();

/* ==========================================================================
   Search Overlay
   ========================================================================== */

    function modal() {
      'use strict';
      var modalOverlay = $('.search-wrapper');
      var modal = $('.search');
      var modalInput = $('.search-field');

      $('.nav-search').on('click', function (e) {
          e.preventDefault();
          modalOverlay.show().outerWidth();
          html.addClass('search-active');
          modalInput.focus();

          if(html.hasClass('menu-active')) {
            html.removeClass('menu-active');
          }
      });

      $('.search-wrapper-close, .search-wrapper').on('click', function () {
          html.removeClass('search-active');
      });

      modal.on('click', function (e) {
          e.stopPropagation();
      });

      $(document).keyup(function (e) {
          if (e.keyCode === 27 && html.hasClass('search-active')) {
              html.removeClass('search-active');
              modalInput.val('').keyup();
          }
      });

      modalOverlay.on('transitionend', function (e) {
          if (!html.hasClass('search-active')) {
              modalOverlay.hide();
          }
      });

      modal.on('transitionend', function (e) {
          e.stopPropagation();
      });
  }
  modal();

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
