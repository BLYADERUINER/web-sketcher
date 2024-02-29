<script>
  import CanvasPanel from './CanvasPanel.svelte';

  // временная ручка переключения
  let setting = true;
</script>

<header class="header">
  <div class="header__container">
    <img class="header__logo" src="/logo.png" alt="Мега Крутой Логотип Приложения"/>
    {#if setting}
      <CanvasPanel />
    {:else}
    <h1 class="header__text">
      Welcome to Web-Sketcher
    </h1>
    {/if}
  </div>
</header>

<style lang="scss">
  .header {
    width: 100%;
    height: 20vh;
    padding: 1em 3rem;
    background: linear-gradient(90deg, rgba(155,64,150,1) 0%, rgba(255,134,134,1) 50%,  rgba(255,229,71,1) 100%);
    background-size: 150%;
    animation: gradient ease-in-out 6s infinite alternate;

    &__container {
      display: flex;
      flex-direction: row;
      gap: 3.3em;
    }

    &__logo {
      width: 120px;
      height: 150px;
    }

    &__text {
      position: relative;
      margin: 3rem 0 0;
      text-transform: uppercase;
      font-size: 3em;
      color: #ffffff;
      text-shadow:
                  0 1px #808d93,
                  -1px 0 #cdd2d5,
                  -1px 2px #808d93,
                  -2px 1px #cdd2d5,
                  -2px 3px #808d93,
                  -3px 2px #cdd2d5,
                  -3px 4px #808d93,
                  -4px 3px #cdd2d5,
                  -4px 5px #808d93,
                  -5px 4px #cdd2d5,
                  -5px 6px #808d93,
                  -6px 5px #cdd2d5,
                  -6px 7px #808d93,
                  -7px 6px #cdd2d5,
                  -7px 8px #808d93,
                  -8px 7px #cdd2d5;
    }
  }
</style>