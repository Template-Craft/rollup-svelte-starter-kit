<script>
  import {name, version, description} from '../../package.json';

  const packages = {
    name,
    version,
    description,
  }

  export let collecion;

  let data = new Date();
</script>

<section class="home">
  <h1>{collecion.sayHello}</h1>
  <h2>App name: {packages.name}</h2>
  <p>App Version: {packages.version}</p>
  <p>App description: {packages.description}</p>
  <p>
    A minimal tool for designing SPA applications
  </p>

  <span>Date: {data}</span>
</section>

<style lang="scss">
  @use '../stylesheets/_var-collection.scss' as root;
  @use '../stylesheets/_mixins.scss' as mixin;

  .home {
    width: 100dvw;

    padding: var(--sections-default-paddings);

    @include mixin.prefersColorScheme(light) {
      background-color: var(--light-theme-background-color);

    }

    @include mixin.prefersColorScheme(dark) {
      background-color: var(--dark-theme-background-color);

    }

    h1 {
      text-align: center;
      font-size: 2.2em;

      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.8em;
    }

    p {
      font-size: 1.2em;

      margin: {
        top: 12px;
        bottom: 16px;
      }

    }

    span {
      font-size: 1em;

      display: block;

      margin-top: 22px;
    }

    // color scheme
    @include mixin.prefersColorScheme(light) {
      h1, h2, p, span {
        color: var(--light-theme-text-color);
      }
    }

    @include mixin.prefersColorScheme(dark) {
      h1, h2, p, span {
        color: var(--dark-theme-text-color);
      }
    }

  }
</style>