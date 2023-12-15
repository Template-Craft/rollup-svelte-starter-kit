<script>
  //  Роутер смотри: https://github.com/EmilTholin/svelte-routing
  import { Router, Link, Route } from 'svelte-routing';

  // import { getContext } from 'svelte';
  // import { ROUTER } from 'svelte-routing/src/contexts';

  //  Наши страницы обрабатываемые роутером
  import Home from './routes/Home.svelte';
  import About from './routes/About.svelte';

  // const { activeRoute } = getContext(ROUTER);

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'router-link-active' };
    }
 
    return {};
  }

  export let url = '';
</script>

<Router {url}>
  <nav>
    <ul>
      <li><Link to="/" {getProps}>Home</Link></li>
      <li><Link to="/about" {getProps}>About</Link></li>
    </ul>
  </nav>
  <Route path="about" component={About} />
  <Route path='/' component={Home} />
</Router>

<style lang="scss">
  @import './assets/stylesheets/stylesheets.scss';
</style>