<script>
	import ColorIcon from '$lib/icons/ColorIcon.svelte';

  export let colorValue;
</script>

<button class="panel__color">
  <input
    class="panel__color-input"
    type="color"
    title="Color"
    bind:value={colorValue}
  />
  <ColorIcon
    color={colorValue}
  />
</button>

<style lang="scss">
  .panel__color {
    position: relative;
    transition: transform ease-in-out .2s;

    &-input {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
</style>