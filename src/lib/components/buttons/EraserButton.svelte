<script>
	import EraserIcon from '$lib/icons/EraserIcon.svelte';
</script>

<button class="panel__eraser" type="button">
  <EraserIcon />
</button>

<style lang="scss">
  .panel__eraser {
    transition: transform ease-in-out .2s;

    &:hover {
      transform: rotate(0.5turn);
    }
  }
</style>