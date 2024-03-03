<script>
  import "../styles.scss";

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="main">
  <slot />
</main>
<Footer />