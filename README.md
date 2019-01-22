# Attila

A content focused responsive theme for [Ghost](http://github.com/tryghost/ghost/).

## Demo

* [Blog](http://attila.zutrinken.com/)
* [Post](http://attila.zutrinken.com/demo/)
* [Tag Archive](http://attila.zutrinken.com/tag/general/)
* [Author Archive](http://attila.zutrinken.com/author/zutrinken/)

## Screenshots

<table>
<tr>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/screenshots/screenshot-desktop.jpg" />
</td>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/screenshots/screenshot-mobile.jpg" />
</td>
</tr>
</table>

## Features

* Responsive layout
* Navigation support
* Paralax cover images for posts, author archives and blog
* Author informations for posts and author archives
* Featured posts
* Reading progress for posts
* Automatic code syntax highlight and line numbers
* Disqus support
* Subscribers support
* Sharing buttons

## Setup

### Disqus Comments

To enable [Disqus](https://disqus.com/) comments go to your blogs code injection
settings and add `<script>var disqus = 'YOUR_DISQUS_SHORTNAME';</script>` to
your blog header.

### Syntax Highlighting

Syntax highlighting is included out of the box with Prism.js! By default we
support these languages:

* Apacheconf
* Bash
* C
* C++
* C#
* CSS
* Diffs
* Handlebars
* HTTP
* Ini
* Java
* Javascript
* JSON
* JSX
* LESS
* Makefiles
* Markdown
* Markup
* Nginx
* Objective C
* PHP
* Perl
* Properties
* Python
* Ruby
* SASS & SCSS
* SQL

More languages can be added by including them in your blogs code injection
settings and adding them to your footer:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-coffeescript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-erlang.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-jolie.min.js"></script>
```

We also include a default theme. This can be overridden by including custom
styles in your header:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-okaidia.min.css" />
```

Note that additional styling may be necessary when including a custom theme.

#### Language & Line Numbers

You can use Markdown cards to specify the language for code snippets:

    ```js
    function foo() {

    }
    ```


You can append a number of modifier classes to the language as a comma
delimited list, and they will all be applied to the element. To add line numbers
to a snippet, add the `line-numbers` class:

    ```js,line-numbers
    function foo() {

    }
    ```

## Local Development

1. Install [Ghost locally](https://docs.ghost.org/install/local/).

2. Clone the repo to you code directory.

   ```sh
	 cd ~/PATH_TO_CODE
	 git clone git@github.com:zutrinken/attila.git
	 ```

3. Install dependencies

   ```sh
	 yarn
	 ```

4. Build via NPM scripts:

   ```sh
	 yarn build # builds the project for producton
	 yarn watch # runs the project in development with file watching for rebuilds
	 ```

5. Create a symlink to your local Ghost installation so the theme is available
   to it:

	 ```sh
	 # Mac
	 ln -s PATH_TO_CODE/attila/dist PATH_TO_GHOST/content/themes/attila
	 ```

### Analyzing Assets

You can analyze the asset size with [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer),
which is included and activatable via the `ANALYZE_BUNDLE` environment variable:

```sh
ANALYZE_BUNDLE=true yarn watch
```

## Copyright & License

Copyright (C) 2015-2019 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
