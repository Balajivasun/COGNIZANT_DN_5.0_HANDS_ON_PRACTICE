# Week 6 - Git Labs Overview

Repository containing hands-on Git labs for Week 6 covering Git configuration, `.gitignore` setup, branching, merge conflict resolution, and remote push workflows.

**Author:** Balajivasun  
**Email:** balajivasun@gmail.com  

---

## Directory Architecture

```text
Week 6/
├── Task 1/
│   ├── GitDemo/
│   │   └── welcome.txt
│   ├── Git-Lab-Commands.md
│   └── run-git-lab.ps1
├── Task 2/
│   ├── GitDemo/
│   │   ├── .gitignore
│   │   ├── welcome.txt
│   │   ├── sample.log
│   │   └── logs/
│   │       └── app.log
│   ├── Git-Ignore-Commands.md
│   ├── QUICK-REFERENCE.md
│   └── run-gitignore-lab.ps1
├── Task 3/
│   ├── GitDemo/
│   │   ├── welcome.txt
│   │   ├── hello.xml
│   │   └── .gitignore
│   ├── Git-Branching-Commands.md
│   └── run-git-lab.ps1
├── Task 4/
│   ├── GitDemo/
│   │   ├── welcome.txt
│   │   ├── hello.xml
│   │   ├── hello.xml.orig
│   │   └── .gitignore
│   ├── Git-Merge-Conflict-Commands.md
│   └── run-git-lab.ps1
├── Task 5/
│   ├── GitDemo/
│   │   ├── welcome.txt
│   │   ├── hello.xml
│   │   └── .gitignore
│   ├── Git-Cleanup-Commands.md
│   └── run-git-lab.ps1
└── README.md
```

---

## Tasks Overview

### Task 1: Basic Git Setup & Repository Initialisation
- Configured global user name (`Balajivasun`) and email (`balajivasun@gmail.com`).
- Integrated Notepad++ as default core editor.
- Initialized `GitDemo` repository, created `welcome.txt`, and committed changes.

### Task 2: GitIgnore Configuration
- Continued with `GitDemo` repository created in Task 1.
- Configured `.gitignore` rules (`*.log` and `logs/`).
- Created `sample.log` and `logs/app.log` to test rule matching.
- Verified untracked status with `git status` and rule mapping using `git check-ignore`.

### Task 3: Git Branching & Merging
- Created feature branch `GitNewBranch`.
- Added `hello.xml` on the branch, committed, and compared diffs against `master`.
- Merged `GitNewBranch` into `master` and deleted the feature branch.

### Task 4: Git Merge Conflict Resolution
- Created `GitWork` branch and edited `hello.xml` on both `master` and `GitWork` with conflicting changes.
- Attempted `git merge GitWork`, triggering merge conflict.
- Resolved conflict in `hello.xml`, created backup file `hello.xml.orig`, updated `.gitignore` (`*.orig`), and deleted `GitWork`.

### Task 5: Git Cleanup & Remote Push
- Cleaned working tree and verified active branch status (`Git-T03-HOL_002`).
- Pulled latest updates from remote repository and pushed pending master commits.

---

## Running Lab Automation Scripts

Execute the PowerShell script within any task folder:

```powershell
# Task 1
cd "Task 1"; .\run-git-lab.ps1

# Task 2
cd "Task 2"; .\run-gitignore-lab.ps1

# Task 3
cd "Task 3"; .\run-git-lab.ps1

# Task 4
cd "Task 4"; .\run-git-lab.ps1

# Task 5
cd "Task 5"; .\run-git-lab.ps1
```
