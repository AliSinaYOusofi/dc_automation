const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,         // user cannot resize
    maximizable: false,       // disable maximize button
    fullscreenable: false,    // disable fullscreen
    icon: path.join(__dirname, './web-app-manifest-192x192.png'), 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
  win.setMenu(null); // remove menu bar
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
