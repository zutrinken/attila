import Prism from 'prismjs';
import reframe from 'reframe.js';

// bootstrap styles
import '../sass/style.scss';

let body = document.querySelector('body');
let html = document.querySelector('html');

/* ==========================================================================
	 Menu
	 ========================================================================== */

function menu() {
	let menuElements = document.querySelectorAll('#menu, .menu-button, .hidden-close');

	menuElements.forEach(function(menuElement) {
		menuElement.addEventListener('click', () => {
			html.classList.toggle('menu-active')
		});
	});
}
menu();

/* ==========================================================================
	 Parallax cover
	 ========================================================================== */

let cover = document.querySelector('.cover');
let coverPosition = 0;

if (cover) {
	function prlx() {
		let windowPosition = html.scrollTop;
		coverPosition = windowPosition > 0 ? Math.floor(windowPosition * 0.25) : 0;

		cover.style['-webkit-transform'] = 'translate3d(0, ' + coverPosition + 'px, 0)';
		cover.style['transform'] = 'translate3d(0, ' + coverPosition + 'px, 0)'

		if (html.scrollTop < cover.offsetHeight) {
			html.classList.add('cover-active');
		} else {
			html.classList.remove('cover-active');
		}
	}
	prlx();

	window.addEventListener('scroll', prlx);
	window.addEventListener('resize', prlx);
	window.addEventListener('orientationChange', prlx);
}

/* ==========================================================================
	 Reading Progress
	 ========================================================================== */

let post = document.querySelector('.post-content');
let progressBar = document.querySelector('.progress-bar');
let progressContainer = document.querySelector('.progress-container');


if (progressBar) {
	function readingProgress() {
		let viewportHeight = document.documentElement.clientHeight;
		let postBottom = html.scrollTop + post.getBoundingClientRect().bottom;
		let windowBottom = html.scrollTop + viewportHeight;
		let progress = 100 - ((postBottom - windowBottom) / (postBottom - viewportHeight) * 100);

		progressBar.style['width'] = progress + '%';

		if (progress > 100) {
			progressContainer.classList.add('ready');
		} else {
			progressContainer.classList.remove('ready');
		}
	}
	readingProgress();

	window.addEventListener('scroll', readingProgress);
	window.addEventListener('resize', readingProgress);
	window.addEventListener('orientationChange', readingProgress);
}

/* ==========================================================================
	 Gallery
	 ========================================================================== */

function gallery() {
	let images = document.querySelectorAll('.kg-gallery-image img');
	images.forEach(function (image) {
		let container = image.closest('.kg-gallery-image');
		let width = image.attributes.width.value;
		let height = image.attributes.height.value;
		let ratio = width / height;
		container.style.flex = ratio + ' 1 0%';
	});
}
gallery();

/* ==========================================================================
	 Prism Plugins
	 ========================================================================== */

// Takes the line-numbers element added by the line-numbers plugin and moves it
// from the `code` to the `pre. This allows us to style it such that the line
// numbers are positioned absolutely, and do not move if the user scrolls to the
// right.
Prism.hooks.add('complete', function (env) {
	let lineNumbers = env.element.querySelector('.line-numbers-rows');

	if (lineNumbers) {
		env.element.parentNode.appendChild(lineNumbers);
	}
});


/* ==========================================================================
	 Responsive Videos with Fitvids
	 ========================================================================== */

function video() {
	reframe('iframe')
}
video();

/* ==========================================================================
	 Initialize and load Disqus
	 ========================================================================== */

if (typeof window.disqus === 'undefined') {
	let postComments = document.querySelector('.post-comments');

	if (postComments) {
		postComments.style['display'] = 'none';
	}
} else {
	let disqusButton = document.querySelector('#show-disqus');

	if (disqusButton) {
		disqusButton.addEventListener('click', function() {
			// create and append a script tag to load the disqus embed script
			let script = document.createElement('script');
			script.async = true;
			script.src = '//' + disqus + '.disqus.com/embed.js';
			document.body.appendChild(script);

			disqusButton.style['display'] = 'none';
		});
	}
}
