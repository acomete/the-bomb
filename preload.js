const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  videoEnded: () => ipcRenderer.send('video-ended')
})
