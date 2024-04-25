<script>
  import { fade } from 'svelte/transition';

	import LineWidthIcon from '$lib/icons/LineWidthIcon.svelte';

  export let rangeValue;

  let visibleRange = false;

  const visibleRangeHidden = () => visibleRange = false;
</script>

<button
  class="panel__line-width"
  type="button"
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
    <LineWidthIcon />
  {/if}
</button>

<style lang="scss">
  .panel__line-width {
    transition: transform ease-in-out .2s;

    &:hover {
      transform: scale(1.1);
    }

    &_range {
      width: 48px;
    }
  }
</style>