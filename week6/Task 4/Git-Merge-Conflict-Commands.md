# Git Merge Conflict Commands - Task 4

## Steps

1. Check master status:
```bash
git status
```

2. Create branch `GitWork` and add file:
```bash
git branch GitWork
git checkout GitWork
echo '<?xml version="1.0"?><note><heading>GitWork Branch Changes</heading></note>' > hello.xml
git add hello.xml
git commit -m "Add hello.xml on GitWork branch"
```

3. Switch to master and add conflicting file:
```bash
git checkout master
echo '<?xml version="1.0"?><note><heading>Master Branch Changes</heading></note>' > hello.xml
git add hello.xml
git commit -m "Add hello.xml on master branch"
```

4. View log graph and diff:
```bash
git log --oneline --graph --decorate --all
git diff master GitWork
git difftool master GitWork
```

5. Attempt merge (triggers conflict):
```bash
git merge GitWork
```

6. Resolve conflict in `hello.xml` and save backup `hello.xml.orig`:
```bash
echo '<?xml version="1.0"?><note><heading>Resolved Content</heading></note>' > hello.xml
```

7. Commit conflict resolution:
```bash
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"
```

8. Add `*.orig` to `.gitignore` and commit:
```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Add *.orig to .gitignore"
```

9. Clean up branch:
```bash
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
```
