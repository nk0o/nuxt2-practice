# nuxt2-practice

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).



### 폴더구조
# Components
components/
├── common/                     # 버튼, 카드, 인풋 등 재사용 가능한 공통 컴포넌트
├── layout/                     # Header, Footer, Sidebar 등 레이아웃 구성 요소
    ├── Footer.vue 
    ├── Header.vue 
    └── Nav.vue    
├── sections/                   # 페이지 단위로 재사용되는 섹션 컴포넌트
├── ui/                         # 아주 기본적인 UI 단위 컴포넌트 (예: Icon, Badge)
├── modals/                     # 모달 컴포넌트
└── forms/                      # 폼 관련 컴포넌트 (Input, Checkbox 등)

# Layouts
layouts/
├── default.vue                 # 레이아웃 설정없을때 default layout
├── blog.vue                    # 블로그 layout
└── error.vue                   # error 페이지

# Pages
pages/
├── product/                    # Product List
├── event/                      # Event List
    ├── eventA.vue                  # 시즌 한정 상품 소개 이벤트
    ├── eventB.vue                  # Event Ⅱ
    └── eventC.vue                  # Event Ⅲ

# SCSS
scss/
├── abstracts/                  # 변수, 믹스인, 함수 등
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/                       # 기본 레이아웃 설정
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _base.scss
├── components/                 # UI 요소 단위
│   └── _button.scss
├── layout/                     # 레이아웃 관련 설정 (header, footer 등)
│   └── _header.scss
├── pages/                      # 페이지별 스타일
│   └── _home.scss
├── themes/                     # 테마 관련 변수들 (다크모드 등)
│   └── _default.scss
├── utils/                      # 유틸 클래스 (text-center, mt-1 등)
│   └── _helpers.scss
└── global.scss