<script>
	import EraserIcon from '$lib/icons/EraserIcon.svelte';

  export let eraserValue;

  const handleToggleEraser = () => eraserValue = !eraserValue;
</script>

<button
  class="panel__eraser"
  class:panel__eraser_active={eraserValue}
  type="button"
  on:click={handleToggleEraser}
>
  <EraserIcon />
</button>

<style lang="scss">
  .panel__eraser {
    transition: transform ease-in-out .2s;

    &:hover, &_active {
      transform: rotate(0.5turn);
    }
  }
</style>
