<script>
  export let kitName;
  export let kitVersion;

  let data = new Date();
</script>

<h1>
  {kitName} : {kitVersion}
</h1>

<p>Lorem, ipsum.</p>

<span>Date: {data} </span>

<style lang="scss">
  @import './assets/stylesheets/stylesheets.scss';
</style>