const { globalShortcut, app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: true,
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

  ipcMain.on('hack-it', (event) => {
    win.loadFile('./src/screens/video/video.html')
  })

  ipcMain.on('video-ended', (event) => {
    win.loadFile('./src/screens/bomb/bomb.html')
  })

  ipcMain.on('defused', (event) => {
     win.loadFile('./src/screens/defused/defused.html')
  })

  ipcMain.on('quit', (event) => {
    app.quit();
  })

  win.loadFile('./src/screens/slides/slides.html')
}

app.whenReady().then(() => createWindow())

