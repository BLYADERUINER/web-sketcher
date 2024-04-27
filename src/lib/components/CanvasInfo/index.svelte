<script>
	import { storePanelTools } from '$lib/stores/canvas_panel';
</script>

<div class="canvas__info">
  <p class="canvas__info-text">
    !Line_width:
    <span>
      {$storePanelTools.line_width}
    </span>
  </p>
  <p class="canvas__info-text">
    $Color:
    <span>
      {$storePanelTools.paint_color}
    </span>
  </p>
  <p class="canvas__info-text">
    ?#Eraser:
    <span>
      {$storePanelTools.eraser}
    </span>
  </p>
</div>

<style lang="scss">
  @import './index.scss';
</style>