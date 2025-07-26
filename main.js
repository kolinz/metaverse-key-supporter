const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require('path');
const controller = require('./keyController');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('renderer.html');
}

ipcMain.handle('press-keys', (_, keys, duration) => {
  controller.pressKeys(keys, duration);
});

app.whenReady().then(createWindow);

// 外部ブラウザでURLを開く
ipcMain.handle("open-external", (event, url) => {
  shell.openExternal(url);
});
