<script >
  import { author } from '../../package.json';

</script>

<section class="about">
  <h1>About Author:</h1>

  <p>Name: {author.name}</p>
  <a href="mailto:{author.email}">Email: {author.email}</a>
</section>

<style lang="scss">
  @use '../stylesheets/_var-collection.scss';
  @use '../stylesheets/_mixins.scss' as mixin;

  .about {
    width: 100dvw;

    padding: var(--sections-default-paddings);

    @include mixin.prefersColorScheme(light) {
      background-color: var(--light-theme-background-color);
    }

    @include mixin.prefersColorScheme(dark) {
      background-color: var(--dark-theme-background-color);
    }

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1.2em;
      margin: 8px 0;
    }

    a {
      font-size: 1em;

      display: block;

      margin-top: 12px;
    }

    // color scheme
    @include mixin.prefersColorScheme(light) {
      h1, p, a {
        color: var(--light-theme-text-color);
      }
    }

    @include mixin.prefersColorScheme(dark) {
      h1, p, a {
        color: var(--dark-theme-text-color);
      }
    }

  }
</style>