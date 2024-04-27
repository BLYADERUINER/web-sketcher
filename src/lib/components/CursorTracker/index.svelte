<script>
	import { spring } from 'svelte/motion';
  
  import { storePanelTools } from '$lib/stores/canvas_panel';
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';
  import { canvasCursorVisible } from '$lib/stores/canvas_cursor';

	let coords = spring(
		{ x: 0, y: 0 },
		{ stiffness: 1 },
	);
</script>

<svelte:window on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })} />

<svg
  class={`mousemover ${$canvasCursorVisible ? 'mousemover_active' : ''}`}
  style={
    `--cursor-color: ${$storePanelTools.eraser ? $storeCanvasSetting.background_color : $storePanelTools.paint_color}`
  }
>
	<circle
    class="mousemover__circle"
    cx={$coords.x}
    cy={$coords.y}
    r={$storePanelTools.line_width / 2}
  />
</svg>

<style lang="scss">
  @import './index.scss';
</style>