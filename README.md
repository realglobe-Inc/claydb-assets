claydb-assets
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/claydb-assets
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/claydb-assets
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/claydb-assets.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/claydb-assets
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/claydb-assets.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/claydb-assets/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/claydb-assets
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/claydb-assets.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/claydb-assets.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/claydb-assets
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/claydb-assets.svg
[bd_npm_url]: http://www.npmjs.org/package/claydb-assets
[bd_npm_shield_url]: http://img.shields.io/npm/v/claydb-assets.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Asset files for ClayDB

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install claydb-assets --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const claydbAssets = require('claydb-assets')
const co = require('co')

co(function * () {
  // Generate favicon for an example project
  {
    const type = 'core'
    const filename = 'doc/images/my-core-01-favicon.svg'
    yield claydbAssets.favicon(type, filename, {
      // Render config
      name: 'my-core-01',
      color: '#38A'
    })
  }
}).catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Assets.md.hbs" Start -->

<a name="section-doc-guides-03-assets-md"></a>

Assets
-----

**Images**

| Image | Path |
| ----- | ---- |
| <img src="assets/images/clay-collection-banner.png" height="36" style="height:36px;" /> | [assets/images/clay-collection-banner.png](assets/images/clay-collection-banner.png) |
| <img src="assets/images/clay-entity-banner.png" height="36" style="height:36px;" /> | [assets/images/clay-entity-banner.png](assets/images/clay-entity-banner.png) |
| <img src="assets/images/clay-id-banner.png" height="36" style="height:36px;" /> | [assets/images/clay-id-banner.png](assets/images/clay-id-banner.png) |
| <img src="assets/images/clay-lump-banner.png" height="36" style="height:36px;" /> | [assets/images/clay-lump-banner.png](assets/images/clay-lump-banner.png) |
| <img src="assets/images/clay-resource-banner.png" height="36" style="height:36px;" /> | [assets/images/clay-resource-banner.png](assets/images/clay-resource-banner.png) |
| <img src="assets/images/claydb-banner.png" height="36" style="height:36px;" /> | [assets/images/claydb-banner.png](assets/images/claydb-banner.png) |
| <img src="assets/images/claydb-favicon.png" height="36" style="height:36px;" /> | [assets/images/claydb-favicon.png](assets/images/claydb-favicon.png) |
| <img src="assets/images/claydb-overview.png" height="36" style="height:36px;" /> | [assets/images/claydb-overview.png](assets/images/claydb-overview.png) |
| <img src="assets/images/nodejs-banner.png" height="36" style="height:36px;" /> | [assets/images/nodejs-banner.png](assets/images/nodejs-banner.png) |
| <img src="assets/images/npm-banner.png" height="36" style="height:36px;" /> | [assets/images/npm-banner.png](assets/images/npm-banner.png) |


<!-- Section from "doc/guides/03.Assets.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/claydb-assets/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb

<!-- Links End -->
