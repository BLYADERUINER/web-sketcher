<script>
  import EraserIcon from './EraserIcon.svelte';
	import ReturnIcon from './ReturnIcon.svelte';
	import SaveIcon from './SaveIcon.svelte';
</script>

<div class="panel">
  <input class="panel__color" type="color" value="#ffffff" />
  <input class="panel__range" type="range" value="1" />
  <button class="panel__eraser" type="button">
    <EraserIcon w={40} h={40} />
  </button>
  <button class="panel__save" type="button">
    <SaveIcon w={40} h={38} />
  </button>
  <button class="panel__return" type="button">
    <ReturnIcon w={40} h={40} />
  </button>
</div>

<style lang="scss">
  .panel {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
</style>
