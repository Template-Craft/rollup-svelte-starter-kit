'use strict';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('svelte-app'),
  props: {
    collecion: {
      sayHello: 'Hello, World!',
    },
  },
});

export default app;
