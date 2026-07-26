git config --global user.name "Balajivasun"
git config --global user.email "balajivasun@gmail.com"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$gitDemoDir = Join-Path $scriptDir "GitDemo"

if (-not (Test-Path $gitDemoDir)) {
    New-Item -ItemType Directory -Path $gitDemoDir -Force | Out-Null
}

Set-Location $gitDemoDir

if (-not (Test-Path ".git")) {
    git init
}

git config user.name "Balajivasun"
git config user.email "balajivasun@gmail.com"

Set-Content -Path "welcome.txt" -Value "welcome to the version control"
Set-Content -Path ".gitignore" -Value "*.log"

git add welcome.txt .gitignore
git commit -m "Initial commit with welcome.txt and gitignore"

git branch GitNewBranch
git checkout GitNewBranch

$xmlContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Git User</to>
    <from>Balajivasun</from>
    <heading>Branching Lab</heading>
    <body>Hello from GitNewBranch!</body>
</note>
"@
Set-Content -Path "hello.xml" -Value $xmlContent

git add hello.xml
git commit -m "Add hello.xml on GitNewBranch"
git status

git checkout master
git diff master GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
git status
