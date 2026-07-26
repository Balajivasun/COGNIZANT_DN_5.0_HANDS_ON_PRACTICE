# GitIgnore Quick Reference

## Rules Syntax

| Pattern | Description | Example |
| :--- | :--- | :--- |
| `filename` | Ignore specific file | `sample.log` |
| `*.ext` | Ignore by file extension | `*.log` |
| `dir/` | Ignore directory and contents | `logs/` |
| `/file` | Ignore file only at root | `/config.json` |
| `!pattern` | Negation (do not ignore) | `!important.log` |

## Commands

Check why a file is ignored:
```bash
git check-ignore -v <filepath>
```

Stop tracking a file already committed without deleting it:
```bash
git rm --cached <filename>
git commit -m "untrack file"
```
