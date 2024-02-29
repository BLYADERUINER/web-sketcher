<script>
	import ReturnIcon from '$lib/icons/ReturnIcon.svelte';
</script>

<button class="panel__return" type="button">
  <ReturnIcon />
</button>

<style lang="scss">
  .panel__return {
    transition: transform ease-in-out .2s;

    &:hover {
      transform: translateY(-2px);
    }
  }
</style>