<script>
  import "../styles.scss";

	import { onMount } from 'svelte';

  import { setStoreCanvasSetting } from '$lib/stores/canvas_setting';

  import Header from '$lib/components/Header/index.svelte';
  import Footer from '$lib/components/Footer/index.svelte';
  import CursorTracker from '$lib/components/CursorTracker/index.svelte';
  
  let savedCanvasSetting;

  onMount(() => {
    savedCanvasSetting = JSON.parse(localStorage.getItem('savedCanvasSetting'));

    if (savedCanvasSetting) {
      setStoreCanvasSetting(savedCanvasSetting);
    }
  });
</script>

<CursorTracker />
<Header />
<main class="main">
  <slot />
</main>
<Footer />