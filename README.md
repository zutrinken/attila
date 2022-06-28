# Attila

这是一个针对中文优化，修复的修改版本，希望你用的开心。

#### 优化内容如下：

*   优化了中文字体显示

*   缩小了主体内容区宽度，

*   删除了题头图片，并更改了日期格式

*   文章简介自动截取文章前 50 个字符

*   评论适配 [Twikoo](https://twikoo.js.org)，请在后台主题页面设置 Twikoo 腾讯云 id，参数名还是 Disqus 没改。

*   增加了 Lightbox 插件，使用的开源库 [Simplebox](https://github.com/libhide/simplebox.js)

*   搜索改为使用 [Fuse.js](https://fusejs.io/)，现在可以搜索中文了。

*   适配了友链界面，请在友链文章中插入 `<hr class="links" />` 标签，然后把友链以 bookmark 形式插入文章即可。

*   使用[pangu.simple.js](https://github.com/backrunner/pangu.simple.js)优化中文空格&#x20;

*   实现TOC功能，期初是实现少数派那样的...留下没技术的眼泪。\
    给想要开启TOC的文章添加一个 `#post-toc` 的标签即可。

### TODO

*   类似少数派的 TOC 功能实现

*   文章归档页面

*   相册页面

*   ....

***

# Attila

A content focused responsive theme for [Ghost](https://github.com/tryghost/ghost/). See a demo at: [attila.peteramende.de](https://attila.peteramende.de/)

## ♥️ Support

Maintaining this project takes a lot of time. You can [buy me a drink](https://paypal.me/zutrinken) if you enjoy using Attila. Cheers 🍻

## 📷 Screenshot

## ⭐️ Features

*   Theme options

*   Responsive layout

*   Light and Dark Mode

*   Search & Popular Tags

*   Post reading progress

*   Code highlight including line numbers

*   Disqus support

*   Member menu buttons

*   Ghost accent color

## 🌍 Localization

🟩 Up to date  🟧 Missing strings

| Code | Flag |  Language  | Status |                                                                  Translator                                                                 |
| :--: | :--: | :--------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| `en` | 🇬🇧 |   English  |   🟩   |                                                                                                                                             |
| `de` | 🇩🇪 |   German   |   🟩   |                                                                                                                                             |
| `es` | 🇪🇸 |   Spanish  |   🟩   |                                                        [r1p](https://github.com/r1p)                                                        |
| `fr` | 🇫🇷 |   French   |   🟩   |                                   [robink](https://github.com/robink), [alsyia](https://github.com/alsyia)                                  |
| `it` | 🇮🇹 |   Italian  |   🟩   |                              [fmaida](https://github.com/fmaida), [undrivendev](https://github.com/undrivendev)                             |
| `no` | 🇳🇴 |  Norwegian |   🟧   | [arthurnoerve](https://github.com/arthurnoerve), [oisann](https://github.com/oisann), [Givemeurcookies](https://github.com/givemeurcookies) |
| `zh` | 🇨🇳 |   Chinese  |   🟩   |        [hao-lee](https://github.com/hao-lee), [izumiko](https://github.com/izumiko), [emperorjoker](https://github.com/emperorjoker)        |
| `id` | 🇮🇩 | Indonesian |   🟧   |                                                 [simplyeazy](https://github.com/simplyeazy)                                                 |
| `ro` | 🇷🇴 |  Romanian  |   🟧   |                                                   [cdorin93](https://github.com/cdorin93)                                                   |
| `ru` | 🇷🇺 |   Russian  |   🟩   |                             [schamberg97](https://github.com/schamberg97), [atjanov](https://github.com/atjanov)                            |
| `tr` | 🇹🇷 |   Turkish  |   🟩   |                       [cgrgrbz](https://github.com/cgrgrbz), [electricalgorithm](https://github.com/electricalgorithm)                      |
| `sv` | 🇸🇪 |   Swedish  |   🟧   |                                                  [martenj77](https://github.com/martenj77)                                                  |
| `cs` | 🇨🇿 |    Czech   |   🟧   |                                                     [lunakv](https://github.com/lunakv)                                                     |
| `pt` | 🇵🇹 | Portuguese |   🟧   |                                              [matheusvanzan](https://github.com/matheusvanzan)                                              |
| `vi` | 🇻🇳 | Vietnamese |   🟧   |                                                  [JustHmmmm](https://github.com/justhmmmm)                                                  |
| `el` | 🇬🇷 |    Greek   |   🟧   |                                               [thiodordelis](https://github.com/thiodordelis)                                               |
| `dk` | 🇩🇰 |   Danish   |   🟧   |                                               [jmayntzhusen](https://github.com/jmayntzhusen)                                               |
| `ar` |      |   Arabic   |   🟧   |                                                    [pop-eax](https://github.com/pop-eax)                                                    |
| `ca` |      |   Catalan  |   🟧   |                                               [arthurnoerve](https://github.com/arthurnoerve)                                               |
| `lt` | 🇱🇹 | Lithuanian |   🟧   |                                               [arthurnoerve](https://github.com/arthurnoerve)                                               |
| `nl` | 🇳🇱 |    Dutch   |   🟧   |                                                       [gkdp](https://github.com/gkdp)                                                       |
| `pl` | 🇵🇱 |   Polish   |   🟩   |                     [filipolszewski](https://github.com/filipolszewski), [MrBoombastic](https://github.com/mrboombastic)                    |
| `eo` |      |  Esperanto |   🟧   |                                                    [ebanDev](https://github.com/ebanDev)                                                    |
| `ga` |      |   Galego   |   🟩   |                                                        [r1p](https://github.com/r1p)                                                        |
| `uk` | 🇺🇦 |  Ukrainian |   🟩   |         [Rakanskiy](https://github.com/rakanskiy), [krupenik](https://github.com/krupenik), [vadimkin](https://github.com/vadimkin)         |
| `ja` | 🇯🇵 |  Japanese  |   🟩   |                                               [emperorjoker](https://github.com/emperorjoker)                                               |
| `fa` |      |    Farsi   |   🟩   |                                              [ItsAminZamani](https://github.com/ItsAminZamani)                                              |

## Show subscribe / account button in navigation

1.  Go to `partials/navigation-meta.hbs`.

2.  Remove comments on line `24`and `34`.

## 🔠 Setup custom google fonts

1.  Go to [fonts.google.com](https://fonts.google.com/) and choose a font.

2.  Choose **Embed** and copy the `<link>` code.

3.  Go to **Code injection**.

4.  Add this to **Blog Header**:

```html
<link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet">
<style>
  :root {
    --font-primary: 'Mukta', sans-serif;
    --font-secondary: 'Crimson Text', serif;
  }
</style>
```

## 🔍 Setup search

1.  Go to **Integrations**.

2.  Choose **Add custom integration**, name it `Search` and choose **Create**. Copy the generated Content API Key.

3.  Go to **Code injection**.

4.  Add this to **Site Header**:

```html
<script>
  var gh_search_key = 'API_KEY';
  var gh_search_migration = 'v2';
</script>
```

## ⚙️ Development

Install [Grunt](https://gruntjs.com/getting-started/):

```bash
npm install -g grunt-cli
```

Install Grunt dependencies:

```bash
npm install
```

Build Grunt project:

```bash
grunt build
```

The compress Grunt task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
grunt compress
```

## ⚖️ Copyright & License

Copyright (C) 2015-2022 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
