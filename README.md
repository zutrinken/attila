# Attila

A content focused responsive theme for [Ghost](https://github.com/tryghost/ghost/).

Demo: [attila.zutrinken.com](https://attila.zutrinken.com/)

## Screenshots

<table>
<tr>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/src/screenshot-desktop.jpg" />
</td>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/attila/master/src/screenshot-mobile.jpg" />
</td>
</tr>
</table>

## Features

* Responsive layout
* Parallax cover images for blog, archives and posts
* Reading progress for posts
* Automatic code syntax highlight and line numbers
* Disqus support

## Localization

* __English__
* __German__
* __Spanish__
* __French__ by [robink](https://github.com/robink)
* __Italian__ by [fmaida](https://github.com/fmaida)
* __Norwegian__ by [arthurnoerve](https://github.com/arthurnoerve)
* __Chinese__ by [hao-lee](https://github.com/hao-lee)
* __Indonesian__ by [simplyeazy](https://github.com/simplyeazy)

## Setup

To enable [Disqus](https://disqus.com/) comments go to your blogs code injection settings and add `<script>var disqus = 'YOUR_DISQUS_SHORTNAME';</script>` to your blog header.

## Development

Install [Grunt](https://gruntjs.com/getting-started/):

	npm install -g grunt-cli

Install Grunt dependencies:

	npm install

Build Grunt project:

	grunt build

The zip Grunt task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

	grunt zip

## Copyright & License

Copyright (C) 2015-2019 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
