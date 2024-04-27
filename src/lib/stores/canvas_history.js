import { writable } from 'svelte/store';

const storeCanvasHistory = writable([]);

const setStoreCanvasHistory = (canvasHistory) => {
  storeCanvasHistory.update(prev => ([
    ...prev,
    canvasHistory,
  ]));
};

const getLastCanvasHistory = () => {
  let lastHistory;
  let newHistory;

  storeCanvasHistory.update(prev => {
    lastHistory = prev[prev.length - 1];
    newHistory = prev.slice(0, -1);

    return newHistory;
  });

  localStorage.setItem('savedCanvasData', lastHistory);

  return lastHistory;
};

export {
  storeCanvasHistory,
  setStoreCanvasHistory,
  getLastCanvasHistory,
};