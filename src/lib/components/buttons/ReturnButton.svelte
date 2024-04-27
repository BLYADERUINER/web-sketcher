<script>
  import { setCanvasToHidden } from '$lib/stores/canvas_setting';

	import ReturnIcon from '$lib/icons/ReturnIcon.svelte';

  const handleReturn = () => {
    let confirmReturn = false;

    confirmReturn = confirm('The current canvas will be deleted. Confirm your action.');

    if (confirmReturn) {
      setCanvasToHidden();

      localStorage.clear();
    }
  };
</script>

<button
  class="panel__return"
  type="button"
  title="Return"
  on:click={handleReturn}
>
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