import { writable } from 'svelte/store';

const storePanelTools = writable({
  line_width: 45,
  paint_color: '#000000',
  eraser: false,
});

const setStorePanelTools = (panel_tools) => storePanelTools.set(panel_tools);

export {
  storePanelTools,
  setStorePanelTools,
};
