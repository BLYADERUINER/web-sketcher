<script>
  import { canvasSetting } from '$lib/stores/canvas_store.js';

  import CanvasSetting from '$lib/components/CanvasSetting.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
</script>

{#if $canvasSetting.canvas_visible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}