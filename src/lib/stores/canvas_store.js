import { writable } from 'svelte/store';

const canvasVisible = writable(false);

const canvasSetting = writable({
  background_color: '',
  width: 0,
  height: 0,
});

const canvasPanel = writable({
  line_width: 3,
  paint_color: '#000000',
  eraser: false,
});

const setCanvasVisible = () => {
  canvasVisible.update(() => true);

  localStorage.setItem("canvasVisible", JSON.stringify(true));
};

const setCanvasSetting = (setting) => {
  canvasSetting.update(() => setting);

  localStorage.setItem("savedCanvasSetting", JSON.stringify(setting));
};

const setCanvasPanel = (panel) => canvasPanel.update(() => panel);

export {
  canvasVisible,
  canvasSetting,
  canvasPanel,
  setCanvasVisible,
  setCanvasSetting,
  setCanvasPanel,
};