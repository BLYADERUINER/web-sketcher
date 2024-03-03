<script>
  import { canvasVisible } from '$lib/stores/canvas_store.js';

  import CanvasSetting from '$lib/components/CanvasSetting.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
</script>

{#if $canvasVisible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}