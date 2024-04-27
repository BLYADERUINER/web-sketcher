<script>
	import { IconSave } from '$lib/components/CanvasPanel/icons';

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
  class="panel__save panel__button"
  type="button"
  title="Save"
  on:click={downloadCanvasImage}
>
  <IconSave />
</button>

<style lang="scss">
  @import './index.scss';
</style>