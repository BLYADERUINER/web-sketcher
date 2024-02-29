<script>
	import SaverIcon from '$lib/icons/SaverIcon.svelte';
</script>

<button class="panel__save" type="button">
  <SaverIcon />
</button>

<style lang="scss">
  .panel__save {
    transition: transform ease-in-out .2s;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>