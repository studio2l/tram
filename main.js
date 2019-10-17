const {app, Menu, Tray} = require('electron')
const fs = require('fs')

let trayMenu = null

app.dock.hide()
if (process.platform !== "darwin") win.setSkipTaskbar (true)

app.on('ready', async () => {
  trayMenu = new Tray(__dirname + '/src/tram.png')
  const contextMenu = Menu.buildFromTemplate([
    {label:'menu1', type:'normal'},
    {type:'separator'},
    {label:'menu2',
      submenu: [
        {label:'submenu1', type:'normal'},
        {label:'submenu2', type:'normal'}
      ]
    }
  ])

  trayMenu.setToolTip('Tram')
  trayMenu.on('click', () => {
    //popupcontextmenu 체크
    trayMenu.popUpContextMenu(contextMenu)
  })
})