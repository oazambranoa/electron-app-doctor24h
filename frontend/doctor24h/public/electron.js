import { app, BrowserWindow } from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL('http://localhost:6969')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (global.process.platform !== 'darwin') {
        app.quit();
    }
});