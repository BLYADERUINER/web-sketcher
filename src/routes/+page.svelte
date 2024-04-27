<script>
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';

	import Canvas from '$lib/components/Canvas/index.svelte';
  import CanvasSetting from '$lib/components/CanvasSetting/index.svelte';
</script>

{#if $storeCanvasSetting.canvas_visible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}