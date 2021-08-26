const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
/**
 *
 * ipcMain.on receives message from renderer to MainProcess
 * mainWindow.webContents.send sends message from MainProcess to Renderer
 *
 * ipcRenderer.send sends message from Renderer to MainProcess
 * ipcRenderer.on receives message from Main Process to Renderer
 */

// Receives path from Renderer
ipcMain.on("video:submit", (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send("video:metadata", metadata.format.duration);
  });
});
