# Git Branching Commands - Task 3

## Branching Steps
1. Create new branch:
```bash
git branch GitNewBranch
```

2. List branches:
```bash
git branch -a
```

3. Switch branch and add file:
```bash
git checkout GitNewBranch
echo '<?xml version="1.0"?><note><body>Hello from GitNewBranch</body></note>' > hello.xml
```

4. Commit on branch:
```bash
git add hello.xml
git commit -m "Add hello.xml on GitNewBranch"
git status
```

## Merging Steps
1. Switch to master:
```bash
git checkout master
```

2. Check diffs:
```bash
git diff master GitNewBranch
git difftool master GitNewBranch
```

3. Merge branch:
```bash
git merge GitNewBranch
git log --oneline --graph --decorate
```

4. Delete branch:
```bash
git branch -d GitNewBranch
git status
```
