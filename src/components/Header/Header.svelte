<script>
  import Logo from './Logo/Logo.svelte';
  import Text from './Text/Text.svelte';
</script>

<header class="header">
    <Logo />
    <Text />
</header>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
