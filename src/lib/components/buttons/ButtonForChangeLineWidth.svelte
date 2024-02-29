<script>
  import { fade } from 'svelte/transition';
	import LineWidthIcon from '$lib/icons/LineWidthIcon.svelte';

  let rangeValue = 0;
  let visibleRange = false;
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
      bind:value={rangeValue}
      in:fade={{ duration: 300 }}
      on:mouseup={() => visibleRange = false}
    >
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