/*
 *
 * Конфигурационный файл для запуска проекта
 * Используется: Rollup + Svelte + Svelte routing + Sirv-cli + Rollup-plugin-livereload
 *
 * ---
 * ---
 *
 * @author  NИ <galaxyrobotix@gmail.com>
 * @copyright NИ, 18.12.2023
 *
 */

'use strict';

import os from 'node:os';
import fs from 'node:fs';
import chalk from 'chalk';

import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';

import livereload from 'rollup-plugin-livereload';

import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

//  Импортируем модули для работы с sass
import * as sass from 'sass';
import rollupScss from 'rollup-plugin-scss';
import postCSS from 'postcss';
import autoprefixer from 'autoprefixer';
import postCSSSortMediaQueries from 'postcss-sort-media-queries';
import cssnano from 'cssnano';
import sccnanoPresetAdvanced from 'cssnano-preset-advanced';

//  Импортируем и парсим package.json
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

//  Режимы:
const production = !process.env.ROLLUP_WATCH;

//  Вывод расширенной информации о приложении в консоль
const consoleInformer = () => {
  return console.log(
    `
    ${chalk.bgYellow('########## * Informer * ##########')}

    ${chalk.bgBlue('App:')}
    App name: ${chalk.bold(pkg.name)}
    App version: ${chalk.bold(pkg.version)}
    License: ${chalk.bold(pkg.license)}
    Description: ${pkg.description}

    Author: ${pkg.author.name}
    Email: ${chalk.underline(pkg.author.email)}

    ${chalk.bgBlue('Platform:')}
    OS: ${chalk.blue(os.type)}
    Arch: ${chalk.blue(os.arch)}
    Platform: ${chalk.blue(os.platform)}

    ${chalk.bgBlue('Node:')}
    Node Version: ${chalk.green(process.env.npm_config_user_agent)}
    Mode: ${chalk.green(!production ? 'Development' : 'Production')}

    ${chalk.bgYellow('########## * End * ##########')}
    `,
  );
};

//  Пути дир-рий:
const publicDir = './public';
const sourceDir = './src';

//  Пути до файлов:
const path = {
  source: {
    svelte: ['node_modules/svelte-routing/**/*.svelte', `${sourceDir}/**/*.svelte`],
    bundleApp: `${sourceDir}/App.mjs`,
    //  Определяем пути до стилей (не испольуем расширение файлов!)
    stylesheets: [`${sourceDir}/stylesheets`, `${sourceDir}/components`],
  },
  public: {
    bundleApp: `${publicDir}/build/bundle.js`,
    bundleFormat: 'iife',
    bundleName: 'app',
    stylesheets: 'assets/stylesheets.css',
  },
  watch: {
    liveReloadDir: 'public',
  },
};

//  Коллекция конфигураций для различных плагинов:
const configs = {
  //  Режим карт исходников
  sourcemapState: !production ? true : false,
  postCSSPluginsDev: [
    autoprefixer({
      cascade: true,
      grid: true,
      overrideBrowserslist: ['last 6 versions'],
    }),
    postCSSSortMediaQueries({
      sort: 'mobile-first',
    }),
  ],
  postCSSPluginsProd: [
    autoprefixer({
      cascade: true,
      grid: true,
      overrideBrowserslist: ['last 6 versions'],
    }),
    postCSSSortMediaQueries({
      sort: 'mobile-first',
    }),
    cssnano({
      preset: [
        sccnanoPresetAdvanced,
        {
          discardComments: true,
          autoprefixer: false,
          calc: false,
          discardUnused: false,
          discardDuplicates: true,
          discardEmpty: true,
          mergeIdents: false,
          mergeLonghand: true,
          mergeRules: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifySelectors: true,
          normalizeCharset: true,
          normalizeWhitespace: true,
          orderedValues: true,
          uniqueSelectors: true,
        },
      ],
    }),
  ],
};

//  Главный конфигурационный файл сборщика:
const rollupconfig = {
  input: path.source.bundleApp,
  output: [
    {
      sourcemap: configs.sourcemapState,
      file: path.public.bundleApp,
      format: path.public.bundleFormat,
      name: path.public.bundleName,
    },
  ],
  plugins: [
    consoleInformer(),
    svelte({
      include: path.source.svelte,
      emitCss: true,
      preprocess: sveltePreprocess(),
      // compilerOptions: {
      //   dev: !production,
      // },
    }),
    //  Подключаем Sass/Scss
    rollupScss({
      //  путь и название файла при компиляции
      fileName: path.public.stylesheets,
      sourceMap: configs.sourcemapState,
      sass: sass, // -> устанавливаем в качестве компилятора официальный Dart Sass
      processor: () => (production ? postCSS(configs.postCSSPluginsProd) : postCSS(configs.postCSSPluginsDev)),
      watch: path.source.stylesheets,
    }),
    json(),
    //  Если это не режим разработки,
    //  то минимизируем файлы:
    production && terser(),
    resolve({ browser: true }),
    //  Следим за 'public' директорией и сообщай браузеру
    //  если были изменения не в режиме разработки
    !production &&
      livereload({
        watch: path.watch.liveReloadDir,
      }),
  ],
  watch: {
    clearScreen: false,
  },
};

export default rollupconfig;
