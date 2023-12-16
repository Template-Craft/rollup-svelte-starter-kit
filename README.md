# О инструменте:

**Минимальный стратовый набор для проектирования браузерных SPA приложений. С помощью [Svelte.js](https://svelte.dev/) и используя компонентный подход построения интерфейса**

> [!NOTE]
> В инструмент уже включён плагин для роутинга (перенаправления) - [Svelte Routing](https://github.com/EmilTholin/svelte-routing)

> [!WARNING]
> =В ИНСТРУМЕНТ НЕ ВКЛЮЧЁН BABEL - ДЛЯ ТРАНСПИЛЯЦИИ НОВОГО СИНТАКСИСА JAVA SCRIPT КОДА В СТАРЫЙ, ПРЕДПОЛАГАЕТСЯ ЧТО ПРИЛОЖЕНИЕ БУДЕТ ИСПОЛЬЗОВАТЬСЯ В СОВРЕМЕННЫХ БРАУЗЕРАХ. BABEL ОТКЛЮЧЁН ИЗ-ЗА КОНФЛИКТА С ПЛАГИНОМ ДЛЯ РОУТИНГА.=

## Что внутри?

| Зависимости                                                                                    | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Svelte 4.2.8](https://github.com/sveltejs/svelte)                                             | Svelte — это новый способ создания веб-приложений. Это компилятор, который берет ваши декларативные компоненты и преобразует их в эффективный JavaScript, который хирургически обновляет DOM.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [svelte-routing 2.10.0](https://github.com/EmilTholin/svelte-routing)                          | Декларативная библиотека маршрутизации Svelte с поддержкой SSR                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [svelte-preprocess 5.1.2](https://github.com/sveltejs/svelte-preprocess)                       | ✨Волшебный✨ препроцессор Svelte с разумными настройками по умолчанию и поддержкой: PostCSS, SCSS, Less, Stylus, Coffeescript, TypeScript, Pug и многих других.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [rollup 4.8.0](https://github.com/rollup/rollup)                                               | Rollup — это сборщик модулей для JavaScript, который компилирует небольшие фрагменты кода в нечто большее и более сложное, например библиотеку или приложение. Он использует стандартизированный формат модуля ES для кода вместо предыдущих уникальных решений, таких как CommonJS и AMD. Модули ES позволяют вам свободно и легко комбинировать наиболее полезные отдельные функции из ваших любимых библиотек. Rollup может оптимизировать модули ES для более быстрой загрузки в современных браузерах или выводить устаревший формат модулей, позволяющий использовать рабочие процессы модулей ES сегодня. |
| [rollup-plugin-livereload 2.0.5](https://github.com/thgh/rollup-plugin-livereload)             | Плагин для сборщика Rollup, позволяет обновлять в живую проект и ототбражать изменения в браузере                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [rollup-plugin-scss 4.0.0](https://github.com/thgh/rollup-plugin-scss)                         | Поддержка компиляции scss,sass для работы необходим sass                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [rollup-plugin-svelte 7.1.6](https://github.com/sveltejs/rollup-plugin-svelte)                 | Компилируйте компоненты Svelte с помощью Rollup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [sass 1.69.5](https://sass-lang.com/)                                                          | Sass - популярный препроцессор css                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [postcss 8.4.32](https://github.com/postcss/postcss)                                           | Преобразование стилей с помощью плагинов JS - необходим для использования вместе с Sass + cssnano + autoprefixer + postcss-sort-media-queries                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [cssnano 6.0.1](https://github.com/cssnano/cssnano)                                            | Модульный минификатор, построенный на основе экосистемы PostCSS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [cssnano-preset-advanced 6.0.1](https://github.com/cssnano/cssnano)                            | Расширение для cssnano                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [autoprefixer 10.4.16](https://github.com/postcss/autoprefixer)                                | Разбор CSS и добавление префиксов поставщиков в правила с помощью Can I Use построенный на основе экосистемы PostCss                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [postcss-sort-media-queries 5.2.0](https://github.com/yunusga/postcss-sort-media-queries)      | Плагин PostCSS для сортировки и объединения медиа-запросов CSS с методологиями «сначала мобильные устройства» и «настольные компьютеры».                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [@rollup/plugin-node-resolve 6.0.1](https://www.npmjs.com/package/@rollup/plugin-node-resolve) | Плагин Rollup, который находит модули с помощью алгоритма разрешения узлов для использования сторонних модулей в node_modules                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [@rollup/plugin-json 15.2.3](https://www.npmjs.com/package/@rollup/plugin-json)                | Плагин Rollup, конвертирующий файлы .json в модули ES6.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [@rollup/plugin-terser 0.4.4](https://www.npmjs.com/package/@rollup/plugin-terser)             | Плагин Rollup для создания минифицированного пакета с помощью terser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [prettier 3.1.1](https://github.com/prettier/prettier)                                         | Prettier — самоуверенный форматировщик кода. Он обеспечивает согласованный стиль, анализируя ваш код и перепечатывая его по своим собственным правилам, которые учитывают максимальную длину строки и при необходимости переносят код.                                                                                                                                                                                                                                                                                                                                                                           |
| [prettier-plugin-svelte 3.1.2](https://github.com/sveltejs/prettier-plugin-svelte)             | Отформатируйте компоненты Svelte с помощью Prettier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [del + del-cli](https://github.com/sindresorhus/del-cli)                                       | Удаление файлов и каталогов                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [chalk 5.3.0](https://github.com/chalk/chalk)                                                  | Правильно выполнено оформление терминальной строки                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [npm-run-all 4.1.5](https://github.com/mysticatea/npm-run-all)                                 | Инструмент CLI для параллельного или последовательного запуска нескольких npm-скриптов.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [sirv-cli 2.0.2](https://www.npmjs.com/package/sirv-cli)                                       | Быстро запустите сервер, чтобы просмотреть ресурсы любого каталога!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Установка инструмента

> [!IMPORTANT]
> Проект разрабатывался и тестировался на node.js версии `20.10.0 (lts/iron)` но должна подойти и версия `18 (lts/hydrogen)`. На младших версиях работоспособность не гарантируется.

Убедитесь что у вас в системе есть git и node.js, далее клонируйте этот репозиторий:

```bash
git clone https://github.com/Template-Craft/rollup-svelte-starter-kit.git
```

После клонирования на свою машину, перейдите в папку с проектом:

```bash
cd rollup-svelte-starter-kit
```

В папке с проектом вам необходимо будет установить все зависимости инструмента, командой:

```bash
npm i
```

После успешной установки всех зависимостей, вы можете запустить локальный сервер в режиме разработки, командой:

```bash
npm run dev
```

Обратите внимание на вывод информации в терминале, там вы увидете адрес локального сервера на котором доступен проект.

## Команды и их описание

Все команды вы можете посмотреть или отредактировать в файле `package.json` в корне вашего проекта, в разделе:

```json
  "scripts": {
    "prebuild": "del-cli ./public/**/*.map ./public/build/**/*.map",
    "build": "rollup -c --no-sourcemap",
    "watch": "rollup -c -w",
    "dev": "npm-run-all --parallel start watch",
    "start": "sirv public -D --single"
  }
```

#### Запуск режимов

_Запускает локальный сервер для разработки вашего SPA_

```bash
npm run dev
```

---

_Запускает режим сборки проекта, перед сборкой запустит команду `prebuild`_

```bash
npm run build
```

---

_Команда запускается автоматически, во время запуска команды `build`. Она необходима для очистки директории `public` от исходных карт_

```bash
npm run prebuild
```

---

_Команда для слежения за файлами в вашем проекте, включена в команду `dev`_

```bash
npm run watch
```

---

_Команда для запуска локального сервера в режиме разработки включена в команду `dev`_

```bash
npm run start
```

#### Структура проекта

```bash
project_dir
├── .editorconfig
├── .gitignore
├── .kitpreview
├── .prettierignore
├── .prettierrc
├── package.json
├── public
│  └── index.html
├── README.md
├── rollup.config.mjs
└── src
   ├── App.mjs
   ├── App.svelte
   ├── assets
   │  └── .gitkeep
   ├── components
   │  └── .gitkeep
   ├── modules
   │  └── .gitkeep
   ├── routes
   │  ├── About.svelte
   │  └── Home.svelte
   └── stylesheets
      ├── _mixins.scss
      ├── _var-collection.scss
      └── stylesheets.scss
```

В директории `src` находятся все основные файлы, с котороми предполагается работа. При сборке проекта в дир-рии `public` появится файл стилей проекта и его java script код.
