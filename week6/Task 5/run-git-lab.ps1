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
Set-Content -Path ".gitignore" -Value "*.log`n*.orig"
$xmlContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Git User</to>
    <from>Balajivasun</from>
    <heading>Merge Conflict Resolved</heading>
    <body>Merged master changes and GitWork branch changes</body>
</note>
"@
Set-Content -Path "hello.xml" -Value $xmlContent

git add welcome.txt .gitignore hello.xml
git commit -m "Commit cleaned repository state for remote push (Git-T03-HOL_002)"

# Step 1: Verify master is clean
git status

# Step 2: List branches
git branch -a

# Step 3: Pull remote repository (simulated/dry-run)
git fetch --dry-run 2>$null

# Step 4-5: Display status and commit log history
git log --oneline --graph --decorate -n 5
