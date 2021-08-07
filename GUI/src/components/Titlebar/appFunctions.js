const { ipcRenderer } = require('electron');
const ipc = ipcRenderer

// CLOSE APPLICATION

exitBTN.addEventListener('click', ()=> {
    ipc.send('closeApp')
})

// MINIMIZE APPLICATION

minimizeBTN.addEventListener('click', ()=> {
    ipc.send('minimizeApp')
})
