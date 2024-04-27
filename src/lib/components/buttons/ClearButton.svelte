<script>
  import ClearIcon from '$lib/icons/ClearIcon.svelte';

  const clearCanvas = () => {
    let confirmClear = false;

    confirmClear = confirm('The current canvas will be deleted. Confirm your action.');

    if (confirmClear) {
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
  
      ctx.clearRect(0, 0, width, height);

      localStorage.removeItem("savedCanvasData");
    }
  };
</script>

<button
  class="panel__cleaning"
  type="button"
  title="Clear"
  on:click={clearCanvas}
>
  <ClearIcon />
</button>

<style lang="scss">
  .panel__cleaning {
    transition: transform ease-in-out .2s;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>