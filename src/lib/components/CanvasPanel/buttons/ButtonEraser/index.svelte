<script>
	import { IconEraser } from '$lib/components/CanvasPanel/icons';

  export let eraserValue;

  const handleToggleEraser = () => eraserValue = !eraserValue;
</script>

<button
  class="panel__eraser"
  class:panel__eraser_active={eraserValue}
  type="button"
  title="Eraser"
  on:click={handleToggleEraser}
>
  <IconEraser />
</button>

<style lang="scss">
  @import './index.scss';
</style>