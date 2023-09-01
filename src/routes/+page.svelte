<script>
  import "../styles.scss";
  import Header from '$lib/Header.svelte';
  import SettingCanvas from '$lib/SettingCanvas.svelte';
</script>

<Header />

<main class="main">
  <SettingCanvas />
</main>

<footer>
  Низ приложения
</footer>

<style lang="scss">
  .main {
    min-height: 75vh;
    padding: 45px 0;
  }
</style>