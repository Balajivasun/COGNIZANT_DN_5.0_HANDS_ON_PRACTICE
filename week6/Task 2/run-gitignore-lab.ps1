git config --global user.name "Balajivasun"
git config --global user.email "balajivasun@gmail.com"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$gitDemoDir = Join-Path $scriptDir "GitDemo"
$logsDir = Join-Path $gitDemoDir "logs"

if (-not (Test-Path $gitDemoDir)) {
    New-Item -ItemType Directory -Path $gitDemoDir -Force | Out-Null
}
if (-not (Test-Path $logsDir)) {
    New-Item -ItemType Directory -Path $logsDir -Force | Out-Null
}

Set-Content -Path (Join-Path $gitDemoDir "welcome.txt") -Value "welcome to the version control"
Set-Content -Path (Join-Path $gitDemoDir "sample.log") -Value "sample log content"
Set-Content -Path (Join-Path $logsDir "app.log") -Value "app log content"

$gitignorePath = Join-Path $gitDemoDir ".gitignore"
@'
*.log
logs/
'@ | Set-Content -Path $gitignorePath

Set-Location $gitDemoDir

if (-not (Test-Path ".git")) {
    git init
}

git config user.name "Balajivasun"
git config user.email "balajivasun@gmail.com"

git add .gitignore welcome.txt
git commit -m "Add welcome.txt and gitignore"

git status
git check-ignore -v sample.log logs/app.log
