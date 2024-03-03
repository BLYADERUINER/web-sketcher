import { writable } from 'svelte/store';

const canvasVisible = writable(false);

const canvasSetting = writable({
  color: "",
  width: 0,
  height: 0,
});

const setCanvasVisible = () => canvasVisible.update(() => true);
const setCanvasSetting = (setting) => canvasSetting.update(() => setting);

export {
  canvasVisible,
  canvasSetting,
  setCanvasVisible,
  setCanvasSetting,
};