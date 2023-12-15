<script>
  import {name, version, description} from '../../package.json';

  const packages = {
    name,
    version,
    description,
  }


  let data = new Date();
</script>

<section class="home">
  <h1>App name: {packages.name}</h1>
  <p>App Version: {packages.version}</p>
  <p><b>App description: {packages.description}</b></p>

  
  <span>Date: {data}</span>
</section>