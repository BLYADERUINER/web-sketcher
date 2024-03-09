<script>
  import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  import { canvasSetting } from '$lib/stores/canvas_store.js';

  const setting = get(canvasSetting);

  let canvas;
  let context;
  let isDrawing;
  let startPosition;
  let canvasSize;

  onMount(() => {
    context = canvas.getContext('2d');
    context.lineWidth = 3;
    context.strokeStyle = '#000000';

    handleGetCanvasSize();
  });

  const handleStartOfDrawing = ({ offsetX: startPositionX, offsetY: startPositionY }) => {
    isDrawing = true;
    startPosition = { startPositionX, startPositionY };
  };

  const handleMoveOfDrawing = ({ offsetX: movePositionX, offsetY: movePositionY }) => {
    if (!isDrawing) return;

    const { startPositionX, startPositionY } = startPosition;
    
    context.beginPath();
    context.moveTo(startPositionX, startPositionY);
    context.lineTo(movePositionX, movePositionY);
    context.closePath();
    context.stroke();

    startPosition = {
      startPositionX: movePositionX,
      startPositionY: movePositionY,
    };
  };
  
  const handleEndOfDrawing = () => isDrawing = false;

  const handleGetCanvasSize = () => {
		const { top, left } = canvas.getBoundingClientRect();

    canvasSize = {
      top_size: top,
      left_size: left,
    };
	};

  const checkingTouchPosition = (event, status) => {
    const { clientX, clientY } = event.touches[0];

    const offsetX = clientX - canvasSize.left_size;
    const offsetY = clientY - canvasSize.top_size;

    if (status === 'start') handleStartOfDrawing({ offsetX, offsetY });
    else if (status === 'move') handleMoveOfDrawing({ offsetX, offsetY });

    return;
  };
</script>

<svelte:window on:resize={handleGetCanvasSize} />

<canvas
  bind:this={canvas}
  width={setting.width}
  height={setting.height}
  style:background={setting.color_value}
  in:fade
  on:mousedown={handleStartOfDrawing}
  on:mousemove={handleMoveOfDrawing}
  on:mouseup={handleEndOfDrawing}
  on:mouseleave={handleEndOfDrawing}
  on:touchstart={(e) => checkingTouchPosition(e, 'start')}
  on:touchmove={(e) => checkingTouchPosition(e, 'move')}
  on:touchend={handleEndOfDrawing}
/>

<style lang="scss">
  canvas {
    box-shadow: 1px 1px 25px #a1a1a1;
  }
</style>