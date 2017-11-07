/* DinnerJacket Desktop
   Starting point of desktop application
   Created: 07/11/2017
   Last updated: 07/11/2017
 */

const electron = require('electron')

// Add modules to contral application and browser window
const { app, BrowserWindow } = electron

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Create window on app launch
  mainWindow = new BrowserWindow({
    // Currently defauls to 3:2 aspect ratio
    width: 1200,
    height: 800,
    minWidth: 750,
    minHeight: 500
  })

  // Navigate to localhost created at port 3000 by 'react-scripts start'
  mainWindow.loadURL('http://localhost:3000')

  // Uncomment to open devtools by default on app launch
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
