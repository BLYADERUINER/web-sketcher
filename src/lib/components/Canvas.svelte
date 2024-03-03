<script>
	import { get } from 'svelte/store';

  import { canvasSetting } from '$lib/stores/canvas_store.js';

  const setting = get(canvasSetting);
</script>

<canvas
  width={setting.width}
  height={setting.height}
  style:background={setting.color_value}
/>

<style lang="scss">
  canvas {
    box-shadow: 1px 1px 25px #a1a1a1;
  }
</style>