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

# Step 1: Verify status
git status

# Step 2-4: Create branch GitWork, add hello.xml, commit
git branch GitWork
git checkout GitWork
Set-Content -Path "hello.xml" -Value '<?xml version="1.0"?><note><heading>GitWork Branch Changes</heading></note>'
git status
git add hello.xml
git commit -m "Add hello.xml on GitWork branch"

# Step 5-7: Switch to master, create conflicting hello.xml, commit
git checkout master
Set-Content -Path "hello.xml" -Value '<?xml version="1.0"?><note><heading>Master Branch Changes</heading></note>'
git add hello.xml
git commit -m "Add hello.xml on master branch"

# Step 8-10: Inspect log and diffs
git log --oneline --graph --decorate --all
git diff master GitWork

# Step 11: Attempt merge (will conflict)
git merge GitWork

# Step 12-14: Resolve conflict, create backup file, commit
$resolvedXml = @"
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Git User</to>
    <from>Balajivasun</from>
    <heading>Merge Conflict Resolved</heading>
    <body>Merged master changes and GitWork branch changes</body>
</note>
"@
Set-Content -Path "hello.xml" -Value $resolvedXml

$backupXml = @"
<?xml version="1.0"?>
<note>
<<<<<<< HEAD
    <heading>Master Branch Changes</heading>
=======
    <heading>GitWork Branch Changes</heading>
>>>>>>> GitWork
</note>
"@
Set-Content -Path "hello.xml.orig" -Value $backupXml

git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

# Step 15-16: Add *.orig to .gitignore and commit
git status
@'
*.log
*.orig
'@ | Set-Content -Path ".gitignore"
git add .gitignore
git commit -m "Add *.orig to .gitignore"

# Step 17-19: Branch list, deletion, final log check
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
git status
