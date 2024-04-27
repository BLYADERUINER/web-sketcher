<script>
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';

  import CanvasSetting from '$lib/components/CanvasSetting.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
</script>

{#if $storeCanvasSetting.canvas_visible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}