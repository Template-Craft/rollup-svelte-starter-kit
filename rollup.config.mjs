// configuration file from rollup bundle
'use strict';

import babel from '@rollup/plugin-babel';

import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';

import livereload from 'rollup-plugin-livereload';

// import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

//  Импортируем модули для работы с sass
import * as sass from 'sass';
import rollupScss from 'rollup-plugin-scss';
import postCSS from 'postcss';
import autoprefixer from 'autoprefixer';
import postCSSSortMediaQueries from 'postcss-sort-media-queries';
import cssnano from 'cssnano';
import sccnanoPresetAdvanced from 'cssnano-preset-advanced';

//  Режимы:
const production = !process.env.ROLLUP_WATCH;

//  Пути дир-рий:
export const publicDir = './public';
export const sourceDir = './src';

//  Пути до файлов:
export const path = {
  source: {
    bundle: `${sourceDir}/App.mjs`,
    sassWatch: [`${sourceDir}/assets/stylesheets`, `${sourceDir}/components`],
  },
  public: {
    bundle: `${publicDir}/build/bundle.js`,
    bundleFormat: 'iife',
    bundleName: 'app',
    bundleCss: 'assets/stylesheets.css',
    bundleMap: [`${publicDir}/build/**/*.map`],
  },
};

//  Коллекция конфигураций для различных плагинов:
export const configs = {
  sourcemapState: !production ? true : false,
  babelConfig: {
    extension: ['.js', '.mjs', '.html', '.svelte'],
    includes: ['src/**', 'src/modules/**', 'node_modules/svelte/**'],
    excludes: ['node_modules/@babel/**'],
    helpers: 'bundled',
  },
  svelteConfig: {
    includes: `${sourceDir}**/*.svelte`,
  },
  liveReloadDir: 'public',
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
  input: path.source.bundle,
  output: [
    {
      sourcemap: configs.sourcemapState,
      file: path.public.bundle,
      format: path.public.bundleFormat,
      name: path.public.bundleName,
    },
  ],
  plugins: [
    svelte({
      include: configs.svelteConfig.includes,
      emitCss: true,
    }),
    babel({
      extensions: configs.babelConfig.extension,
      include: configs.babelConfig.includes,
      exclude: configs.babelConfig.excludes,
      babelHelpers: configs.babelConfig.helpers,
    }),
    //  Подключаем Sass/Scss
    rollupScss({
      //  путь и название файла при компиляции
      fileName: path.public.bundleCss,
      sourceMap: configs.sourcemapState,
      sass: sass,
      processor: () => (production ? postCSS(configs.postCSSPluginsProd) : postCSS(configs.postCSSPluginsDev)),
      watch: path.source.sassWatch,
    }),
    sveltePreprocess(),
    json(),
    //  Следи за 'public' директорией и сообщай браузеру
    //  если были изменения не в режиме продакшена/сборки
    !production &&
      livereload({
        watch: configs.liveReloadDir,
      }),
    //  В режиме сборки удаляем все sourcemap`ы
    resolve({ browser: true }),
  ],
  watch: {
    clearScreen: false,
  },
};

export default rollupconfig;
