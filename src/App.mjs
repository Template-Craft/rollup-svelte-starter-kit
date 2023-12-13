'use strict';

import { version } from '../package.json';

import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    kitName: 'Svelte starter kit',
    kitVersion: version,
  },
});

export default app;
