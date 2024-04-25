<script>
	import { spring } from 'svelte/motion';
  
  import { canvasCursor, canvasPanel, canvasSetting } from '$lib/stores/canvas_store';

	let coords = spring(
		{ x: 0, y: 0 },
		{ stiffness: 1 },
	);
</script>

<svelte:window on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })} />

<svg
  class={`mousemover ${$canvasCursor ? 'mousemover_active' : ''}`}
  style={
    `--cursor-color: ${$canvasPanel.eraser ? $canvasSetting.background_color : $canvasPanel.paint_color}`
  }
>
	<circle
    class="mousemover__circle"
    cx={$coords.x}
    cy={$coords.y}
    r={$canvasPanel.line_width / 2}
  />
</svg>

<style lang="scss">
  .mousemover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 300;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: all linear .2s;
    
    &_active {
      opacity: 1;
      visibility: visible;
    }

    &__circle {
      fill: rgba($color: #000000, $alpha: 0.1);
      stroke: var(--cursor-color);
      stroke-width: .1rem;
    }
  }
</style>