const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // later we’ll add Excel processing here
  processPackingList: (filePath) => ipcRenderer.invoke('process-packing-list', filePath)
});
