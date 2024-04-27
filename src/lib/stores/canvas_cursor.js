import { writable } from 'svelte/store';

const canvasCursorVisible = writable(false);

const setCanvasCursorVisible = () => canvasCursorVisible.set(true);
const setCanvasCursorHidden = () => canvasCursorVisible.set(false);

export {
  canvasCursorVisible,
  setCanvasCursorVisible,
  setCanvasCursorHidden,
};
