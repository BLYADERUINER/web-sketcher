<script>
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';

  import Logo from '$lib/components/Logo/index.svelte';
  import CanvasPanel from '$lib/components/CanvasPanel/index.svelte';
</script>

<header class="header">
  <div class="header__container">
    <Logo canvas_visible={$storeCanvasSetting.canvas_visible} />
    {#if $storeCanvasSetting.canvas_visible}
      <CanvasPanel />
    {:else}
      <h1 class="header__text">
        {"<Welcome to Web-Sketcher />"}
      </h1>
    {/if}
  </div>
</header>

<style lang="scss">
  @import './index.scss';
</style>