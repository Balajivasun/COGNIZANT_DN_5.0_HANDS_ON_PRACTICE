# Git Ignore Commands - Task 2

## Steps

1. Create repo and files in existing `GitDemo`:
```bash
cd GitDemo
echo "welcome to the version control" > welcome.txt
echo "sample log" > sample.log
mkdir logs
echo "app log" > logs/app.log
```

2. Check status before adding `.gitignore`:
```bash
git status
```

3. Create `.gitignore`:
```gitignore
*.log
logs/
```

4. Verify status after adding `.gitignore`:
```bash
git status
```

5. Commit `.gitignore` and base files:
```bash
git add .gitignore welcome.txt
git commit -m "Add gitignore rules"
```

6. Check ignored files rule mapping:
```bash
git check-ignore -v sample.log logs/app.log
```
