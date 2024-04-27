<script>
	import { IconColor } from '$lib/components/CanvasPanel/icons';

  export let colorValue;
</script>

<button class="panel__color">
  <input
    class="panel__color-input"
    type="color"
    title="Color"
    bind:value={colorValue}
  />
  <IconColor
    color={colorValue}
  />
</button>

<style lang="scss">
  @import './index.scss';
</style>