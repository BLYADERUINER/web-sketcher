<script>
	import SaverIcon from '$lib/icons/SaverIcon.svelte';

  const downloadCanvasImage = () => {
    const canvas = document.querySelector('canvas');
    const canvasData = canvas.toDataURL('image/png');

    const downloadLink = document.createElement('a');

    downloadLink.setAttribute('download', 'image.png');
    downloadLink.setAttribute('href', canvasData);

    downloadLink.click();
  };
</script>

<button
  class="panel__save"
  type="button"
  title="Save"
  on:click={downloadCanvasImage}
>
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