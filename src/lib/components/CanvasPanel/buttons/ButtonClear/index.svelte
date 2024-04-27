<script>
  import { get } from 'svelte/store';
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';

  import { IconClear } from '$lib/components/CanvasPanel/icons';

  const setting = get(storeCanvasSetting);

  const clearCanvas = () => {
    let confirmClear = false;

    confirmClear = confirm('The current canvas will be deleted. Confirm your action.');

    if (confirmClear) {
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');
      const { width, height } = canvas;
  
      context.clearRect(0, 0, width, height);
      context.fillStyle = setting.background_color;
      context.fillRect(0, 0, width, height);

      localStorage.removeItem("savedCanvasData");
    }
  };
</script>

<button
  class="panel__clearing"
  type="button"
  title="Clear"
  on:click={clearCanvas}
>
  <IconClear />
</button>

<style lang="scss">
  @import './index.scss';
</style>