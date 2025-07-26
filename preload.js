const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('keyAPI', {
  pressKeys: (keys, duration) => ipcRenderer.invoke('press-keys', keys, duration)
});

contextBridge.exposeInMainWorld("electronAPI", {
  openExternal: (url) => ipcRenderer.invoke("open-external", url),
  saveURLConfig: (url) => ipcRenderer.invoke("save-url", url),
});
