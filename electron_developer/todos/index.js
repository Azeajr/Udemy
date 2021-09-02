const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  //mainWindow.loadURL(`file://${__dirname}/main.html`);
  /**
   * Preferred method
   */
  mainWindow.loadFile("main.html");

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  // Old setup
  {
    label: "File",
    submenu: [
      { label: "New Todo" },
      {
        label: "Quit",
        accelerator: (() => {
          if (process.platform === "darwin") {
            return "Command+Q";
          } else {
            return "Ctrl+Q;"
          }
        })(),
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
