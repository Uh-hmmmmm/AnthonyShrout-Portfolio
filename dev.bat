@echo off
setlocal
cd /d "%~dp0"

echo Freeing port 8080 if in use...
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }"

echo Starting Vite dev server...
"%ProgramFiles%\nodejs\npm.cmd" run dev
endlocal
