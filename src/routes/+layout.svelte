<script>
  import "../styles.scss";

	import { onMount } from 'svelte';

  import { setStoreCanvasSetting } from '$lib/stores/canvas_setting';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CursorMover from '$lib/components/CursorMover.svelte';
  
  let savedCanvasSetting;

  onMount(() => {
    savedCanvasSetting = JSON.parse(localStorage.getItem('savedCanvasSetting'));

    if (savedCanvasSetting) {
      setStoreCanvasSetting(savedCanvasSetting);
    }
  });
</script>

<CursorMover />
<Header />
<main class="main">
  <slot />
</main>
<Footer />