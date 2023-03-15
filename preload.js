const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    videoEnded: () => ipcRenderer.send('video-ended'),
    defused: () => ipcRenderer.send('defused'),
    hackIt: () => ipcRenderer.send('hack-it'),
})
