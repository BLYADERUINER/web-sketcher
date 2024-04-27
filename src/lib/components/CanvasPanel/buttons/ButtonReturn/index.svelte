<script>
  import { storeCanvasHistory, getLastCanvasHistory } from '$lib/stores/canvas_history';

	import { IconReturn } from '$lib/components/CanvasPanel/icons';

  const handleReturn = () => {
    if ($storeCanvasHistory.length > 0) {
      const history = getLastCanvasHistory();
      
      const imageCanvasLoader = new Image();

      imageCanvasLoader.onload = function() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageCanvasLoader, 0, 0);
        context.lineCap = "round";
      };

      imageCanvasLoader.src = history;
    } else {
      alert('No canvas to return');
    }
  };
</script>

<button
  class="panel__return panel__button"
  type="button"
  title="Return"
  on:click={handleReturn}
>
  <IconReturn />
</button>

<style lang="scss">
  @import './index.scss';
</style>