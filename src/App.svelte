<script>
//  Роутер смотри: https://github.com/EmilTholin/svelte-routing
import { Router, Link, Route } from "svelte-routing";

//  Наши страницы обрабатываемые роутером
import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";

function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
  const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

  // The object returned here is spread on the anchor element's attributes
  if (isActive) {
    return { "data-router-link-state": "router-link-active" };
  }

  return {};
}

export let url = "";

// экспортируем наши пропсы из App.mjs
// передаём в <Route path='/' component={Home} collecion={collecion} />
export let collecion;

// Class names:
let navClassName = "navigation";
</script>

<Router {url}>
  <nav class="{navClassName}">
    <ul class="{navClassName}__list">
      <li class="{navClassName}__list-item">
        <Link to="/" {getProps}>Home</Link>
      </li>
      <li class="{navClassName}__list-item">
        <Link to="/about" {getProps}>About</Link>
      </li>
    </ul>
  </nav>
  <Route path="about" component="{About}" />
  <Route basepath="/" component="{Home}" {collecion} />
</Router>

<style lang="scss" global>
@use "./stylesheets/_mixins.scss" as mixins;
@use "./stylesheets/stylesheets.scss";

$nav-item-fz: 16px;

// Navigation item
.navigation {
  display: block;

  width: 100%;

  padding: 14px 18px;

  @include mixins.prefersColorScheme(light) {
    background-color: var(--light-theme-background-color);
    border-bottom: 0.18rem solid var(--light-theme-background-color);

    &__list-item > a {
      color: var(--light-theme-text-color);
    }
  }

  @include mixins.prefersColorScheme(dark) {
    background-color: var(--dark-theme-background-color);
    border-bottom: 0.18rem solid var(--light-theme-background-color);

    &__list-item > a {
      color: var(--dark-theme-text-color);
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    list-style: none;
  }

  &__list-item {
    font-size: $nav-item-fz;

    display: inline-block;

    margin-left: 22px;

    &:first-child {
      margin-left: 0;
    }
  }

  &__list-item > a[data-router-link-state="router-link-active"] {
    font-weight: 550;
    color: var(--router-active-link-color);
  }
}
</style>
