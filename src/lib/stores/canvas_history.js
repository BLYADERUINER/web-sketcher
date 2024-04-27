import { writable } from 'svelte/store';

const storeCanvasHistory = writable([]);

const setStoreCanvasHistory = (canvasHistory) => {
  storeCanvasHistory.set(canvasHistory);
};

export {
  storeCanvasHistory,
  setStoreCanvasHistory,
};