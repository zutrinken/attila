jQuery(function($) {

  var body = $('body');
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
   ghostHunter
   ========================================================================== */

  if (typeof ghosthunter_key === 'undefined') {

  } else {
    $(".nav-search").css({
      'display': 'block'
    });
    $("#search-field").ghostHunter({
      results: "#results",
      result_template: '<article class="post"><div class="inner"><div class="box post-box"><h2 class="post-title"><a href="{{link}}">{{title}}</a></h2><span class="post-meta">On <span class="post-date">{{pubDate}}</span></span></div></div></article>',
      info_template: '<div class="blog-header"><div class="inner"><div class="archive archive-search box archive-box"><span class="archive-info"><span class="archive-type">Search</span><span class="archive-count">{{amount}} Posts</span></span><h1 class="archive-title">Results for "<span id="search-term"></span>"</h1></div></div></div>',
      displaySearchInfo: true,
      includebodysearch: true,
      onComplete: function(results) {
        if ($("#search-field").prop('value')) {
          $('#search').show();
          $('#default').hide();
        } else {
          $('#search').hide();
          $('#default').show();
        }
        $('#search-term').text($("#search-field").prop('value'));
        html.removeClass('menu-active');
      }
    });
  }

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
     Reading Progress
     ========================================================================== */

  var post = $('.post-content');

  function readingProgress() {
    if (post.length >= 1) {
      var postBottom = post.offset().top + post.height();
      var windowBottom = viewport.scrollTop() + viewport.height();
      var progress = 100 - (((postBottom - windowBottom + viewport.height() / 3) / (postBottom - viewport.height() + viewport.height() / 3)) * 100);
      $('.progress-bar').css('width', progress + '%');
      (progress > 100) ? $('.progress-container').addClass('ready'): $('.progress-container').removeClass('ready');
    }
  }

  readingProgress();

  viewport.on({
    'scroll': function() {
      readingProgress();
    },
    'resize': function() {
      readingProgress();
    },
    'orientationchange': function() {
      readingProgress();
    }
  });

  /* ==========================================================================
     Gallery
     ========================================================================== */

  function gallery() {
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
     Style code blocks with highlight and numbered lines
     ========================================================================== */

  function codestyling() {
    $('pre code').each(function(i, e) {
      hljs.highlightBlock(e);
      /* No lines for plain text blocks */
      if (!$(this).hasClass('language-text')) {
        var code = $(this);
        var lines = code.html().split(/\n(?!$)/g).length;
        var numbers = [];
        if (lines > 1) {
          lines++;
        }
        for (i = 1; i < lines; i++) {
          numbers += '<span class="line" aria-hidden="true">' + i + '</span>';
        }
        code.parent().append('<div class="lines">' + numbers + '</div>');
      }
    });
  }
  codestyling();

  /* ==========================================================================
     Responsive Videos with Fitvids
     ========================================================================== */

  function video() {
    $('#wrapper').fitVids();
  }
  video();

  /* ==========================================================================
     Initialize and load Disqus
     ========================================================================== */

  if (typeof disqus === 'undefined') {
    $('.post-comments').css({
      'display': 'none'
    });
  } else {
    $('#show-disqus').on('click', function() {
      $.ajax({
        type: "GET",
        url: "//" + disqus + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
      });
      $(this).parent().addClass('activated');
    });
  }
});