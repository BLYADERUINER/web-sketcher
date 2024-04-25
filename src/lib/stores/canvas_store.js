import { writable } from 'svelte/store';

const canvasCursor = writable(false);

const setCanvasCursorVisible = () => canvasCursor.set(true);
const setCanvasCursorHidden = () => canvasCursor.set(false);

const canvasSetting = writable({
  background_color: '',
  width: 0,
  height: 0,
  canvas_visible: false,
});

const canvasPanel = writable({
  line_width: 30,
  paint_color: '#000000',
  eraser: false,
});

const setCanvasSetting = (setting) => {
  canvasSetting.set(setting);

  localStorage.setItem("savedCanvasSetting", JSON.stringify(setting));
};

const setCanvasPanel = (panel) => canvasPanel.set(panel);

export {
  canvasCursor,
  canvasSetting,
  canvasPanel,
  setCanvasSetting,
  setCanvasPanel,
  setCanvasCursorVisible,
  setCanvasCursorHidden,
};