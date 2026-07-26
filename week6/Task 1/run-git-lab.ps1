$gitVersion = git --version
Write-Host "Git Version: $gitVersion"

git config --global user.name "Balajivasun"
git config --global user.email "balajivasun@gmail.com"

git config --global core.editor "notepad++.exe -multiInst -nosession"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$gitDemoDir = Join-Path $scriptDir "GitDemo"

if (-not (Test-Path $gitDemoDir)) {
    New-Item -ItemType Directory -Path $gitDemoDir -Force | Out-Null
}

Set-Location $gitDemoDir

if (-not (Test-Path ".git")) {
    git init
}

$welcomeFile = "welcome.txt"
if (-not (Test-Path $welcomeFile)) {
    Set-Content -Path $welcomeFile -Value "welcome to the version control"
}

git add welcome.txt
git commit -m "Add welcome.txt to the version control"

git status
git log --oneline
