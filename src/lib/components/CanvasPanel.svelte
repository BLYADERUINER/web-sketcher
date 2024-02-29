<script>
	import ButtonForChangeLineWidth from '$lib/components/buttons/ButtonForChangeLineWidth.svelte';
  import ButtonForChangeColor from '$lib/components/buttons/ButtonForChangeColor.svelte';
	import EraserButton from '$lib/components/buttons/EraserButton.svelte';
	import SaveButton from '$lib/components/buttons/SaveButton.svelte';
	import ReturnButton from '$lib/components/buttons/ReturnButton.svelte';

  let rangeValue = 0;
</script>

<div class="panel">
  <h1 class="panel__title">
    {"<sketcher_tools />"}
  </h1>
  <div class="panel__tool-container">
    <ButtonForChangeLineWidth />
    <ButtonForChangeColor />
    <EraserButton />
    <SaveButton />
    <ReturnButton />
  </div>
</div>

<style lang="scss">
  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    &__title {
      font-size: 3em;
      font-weight: 600;
      margin: 0;
    }

    &__tool-container {
      display: flex;
      flex-direction: row;
      gap: 1.5em;
    }
  }
</style>
