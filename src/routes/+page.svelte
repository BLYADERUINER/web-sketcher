<script>
  import { storeCanvasSetting } from '$lib/stores/canvas_setting';

	import Canvas from '$lib/components/Canvas/index.svelte';
  import CanvasSetting from '$lib/components/CanvasSetting/index.svelte';
</script>

<svelte:head>
  <title>Web-Sketcher</title>
  <meta name="description" content="Web drawing tool" />
  <meta name="keywords" content="web-sketcher, рисование в интернете, рисовалка, web drawing tool" />
  <meta property="og:title" content="Web-Sketcher" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Web drawing tool" />
  <meta property="og:images" content="https://web-sketcher-nu.vercel.app/logo.png" />
  <meta property="og:url" content="https://web-sketcher-nu.vercel.app/" />
</svelte:head>

{#if $storeCanvasSetting.canvas_visible}
  <Canvas /> 
  {:else}
  <CanvasSetting />
{/if}