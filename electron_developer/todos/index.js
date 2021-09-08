const electron = require("electron");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  //mainWindow.loadURL(`file://${__dirname}/main.html`);
  /**
   * Preferred method
   */
  mainWindow.loadFile("main.html");
  mainWindow.on("closed", () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    height: 200,
    width: 300,
    title: "Add New Todo",
  });
  addWindow.loadFile("add.html");
}

ipcMain.on("todo:add", (event, todo) => {
  mainWindow.webContents.send("todo:add", todo);
});

const menuTemplate = [
  // Old setup
  {
    label: "File",
    submenu: [
      {
        label: "New Todo",
        click() {
          createAddWindow();
        },
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  // My solution
  // checks if app is run on OSX, if true adds blank label
  //   ...(process.platform === "darwin" ? [{ label: "" }] : []),
  //   { label: "File", submenu: [{ label: "New Todo" }] },
];
// Suggested solution
if (process.platform === "darwin") {
  menuTemplate.unshift({
    label: "",
  });
}

if (process.env.NODE_ENV !== "production") {
  menuTemplate.push({
    label: "DEVELOPER!!!",
    submenu: [
      {
        label: "Toggle Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
