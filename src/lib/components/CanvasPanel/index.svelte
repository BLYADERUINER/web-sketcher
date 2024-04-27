<script>
  import { fade } from 'svelte/transition';

  import { storePanelTools } from '$lib/stores/canvas_panel';

  import {
    ButtonLineWidth,
    ButtonColor,
    ButtonEraser,
    ButtonSave,
    ButtonClear,
    ButtonReturn
  } from './buttons';
</script>

<div class="panel" in:fade>
  <h1 class="panel__title">
    {"{ sketcher_tools }"}
  </h1>
  <div class="panel__tool-container">
    <ButtonLineWidth
      bind:rangeValue={$storePanelTools.line_width}
    />
    <ButtonColor
      bind:colorValue={$storePanelTools.paint_color}
    />
    <ButtonEraser
      bind:eraserValue={$storePanelTools.eraser}
    />
    <ButtonSave />
    <ButtonClear />
    <ButtonReturn />
  </div>
</div>

<style lang="scss">
  @import './index.scss';
</style>