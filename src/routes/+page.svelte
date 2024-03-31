<script>
	import { onMount } from 'svelte';

  import { canvasVisible } from '$lib/stores/canvas_store.js';

  import CanvasSetting from '$lib/components/CanvasSetting.svelte';
	import Canvas from '$lib/components/Canvas.svelte';

  let savedCanvasVisible;

  onMount(() => {
    savedCanvasVisible = JSON.parse(localStorage.getItem('canvasVisible'));
  });
</script>


{#if $canvasVisible || savedCanvasVisible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}