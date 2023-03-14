const { globalShortcut, app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 640,
    height: 360,
    // fullscreen: true,
    // alwaysOnTop: true,
    closable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  globalShortcut.register('Esc', () => {
    if (win.isFullScreen()) {
      win.setFullScreen(false)
    }
  })

  ipcMain.on('video-ended', (event) => {
    win.loadFile('./src/screens/bomb.html')
  })

  win.loadFile('./src/screens/bomb.html')
}

app
    .whenReady()
    .then(() => {
      createWindow()
    })

