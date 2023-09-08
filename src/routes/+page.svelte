<script>
  import "../styles.scss";
  
  import Header from '$lib/Header.svelte';
  import CanvasSetting from '$lib/CanvasSetting.svelte';
</script>

<Header />

<main class="main">
  <CanvasSetting />
</main>

<footer class="footer">
  <a class="footer__link" href="https://github.com/BLYADERUINER">©BLYADERUINER</a>
</footer>

<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 75vh;
    padding: 45px 0;
    background-color: #f1f1f1;
  }

  .footer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    background-color: #696969;
    height: 5vh;
  }

  .footer__link {
    color: #ffffff;
    font-weight: 500;
    font-size: .9em;
    padding-right: 2rem;
  }

  .footer__link:hover {
    color: #f2f2f2;
  }
</style>