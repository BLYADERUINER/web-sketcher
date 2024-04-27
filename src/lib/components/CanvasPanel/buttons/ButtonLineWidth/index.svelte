<script>
  import { fade } from 'svelte/transition';

	import { IconLineWidth } from '$lib/components/CanvasPanel/icons';

  export let rangeValue;

  let visibleRange = false;

  const visibleRangeHidden = () => visibleRange = false;
</script>

<button
  class="panel__line-width panel__button"
  type="button"
  title="Line Width"
  on:click={() => visibleRange = true}
>
  {#if visibleRange}
    <input
      class="panel__line-width_range"
      type="range"
      min=10
      max=90
      bind:value={rangeValue}
      on:mouseup={visibleRangeHidden}
      on:touchend={visibleRangeHidden}
      in:fade={{ duration: 300 }}
    />
  {:else}
    <IconLineWidth />
  {/if}
</button>

<style lang="scss">
  @import './index.scss';
</style>