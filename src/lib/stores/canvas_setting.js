import { writable } from 'svelte/store';

const storeCanvasSetting = writable({
  background_color: '',
  width: 0,
  height: 0,
  canvas_visible: false,
});

const setStoreCanvasSetting = (setting) => {
  storeCanvasSetting.set(setting);

  localStorage.setItem("savedCanvasSetting", JSON.stringify(setting));
};

const setCanvasToHidden = () => {
  storeCanvasSetting.update(prev => ({
    ...prev,
    canvas_visible: false,
  }));
};

export {
  storeCanvasSetting,
  setStoreCanvasSetting,
  setCanvasToHidden,
};