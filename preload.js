const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('keyAPI', {
  pressKeys: (keys, duration) => ipcRenderer.invoke('press-keys', keys, duration)
});
