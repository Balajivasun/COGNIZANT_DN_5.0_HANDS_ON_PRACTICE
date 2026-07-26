# Git Lab Commands - Task 1

## Step 1: Git Configuration
```bash
git version
git config --global user.name "Balajivasun"
git config --global user.email "balajivasun@gmail.com"
git config --global --list
```

## Step 2: Notepad++ Integration
```bash
notepad++
git config --global core.editor "notepad++.exe -multiInst -nosession"
git config --global -e
```

## Step 3: Repository Setup & Commit
```bash
git init GitDemo
cd GitDemo
echo "welcome to the version control" >> welcome.txt
cat welcome.txt
git status
git add welcome.txt
git commit -m "Add welcome.txt"
git status
git pull origin master
git push origin master
```
