# Abrir Visual Studio Code
Start-Process "C:\Program Files\Microsoft VS Code\Code.exe"

# Esperar un momento para que se abra VS Code antes de abrir las siguientes aplicaciones
Start-Sleep -Seconds 5

# Abrir dos ventanas de Google Chrome con el correo
Start-Process "chrome.exe" -ArgumentList "https://mail.google.com/mail/u/0/"
Start-Process "chrome.exe" -ArgumentList "https://mail.google.com/mail/u/1/"

# Esperar un momento para que se abran las ventanas de correo antes de abrir la siguiente aplicación
Start-Sleep -Seconds 3

# Abrir una ventana de Google Chrome con otro correo
Start-Process "chrome.exe" -ArgumentList "https://mail.google.com/mail/u/2/"