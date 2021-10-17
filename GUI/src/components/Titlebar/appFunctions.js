const { ipcRenderer } = require('electron');
const ipc = ipcRenderer

// CLOSE APPLICATION

export const close = ipc.send('close')


// MINIMIZE APPLICATION

export const minimize = ipc.send('min')

