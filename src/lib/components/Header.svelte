<script>
  import { canvasVisible } from '$lib/stores/canvas_store.js';

  import CanvasPanel from './CanvasPanel.svelte';
</script>

<header class="header">
  <div class="header__container">
    <img class="header__logo" src="/logo.png" alt="Логотип Web-Sketcher"/>
    {#if $canvasVisible}
      <CanvasPanel />
    {:else}
    <h1 class="header__text">
      {"<Welcome to Web-Sketcher />"}
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
      gap: 3em;
    }

    &__logo {
      width: 120px;
      height: 150px;
      user-select: none;
    }

    &__text {
      position: relative;
      margin: 3rem 0 0;
      text-transform: uppercase;
      font-size: 3em;
      color: #ffffff;
      user-select: none;
      text-shadow:
                  1px 1px 1px #8b8392,
                  1px 2px 1px #8b8392,
                  1px 3px 1px #8b8392,
                  1px 4px 1px #8b8392,
                  1px 5px 1px #8b8392,
                  1px 6px 1px #8b8392,
                  1px 10px 5px rgba(16, 16, 16, 0.5),
                  1px 15px 10px rgba(16, 16, 16, 0.4),
                  1px 20px 30px rgba(16, 16, 16, 0.3),
                  1px 25px 50px rgba(16, 16, 16, 0.2);
    }
  }
</style>