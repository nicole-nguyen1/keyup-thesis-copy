# unlock-caps

## Git setup
1. Fork from lock-down.
2. Clone from your repo.
3. Add remote.

```
git remote add upstream https://github.com/lock-down/unlock-caps.git
```

## Git workflow
Two branches: master and dev

1. Commit often and pull often.
```
git pull upstream dev
```

2. When you want to work on feature, check out dev branch and make a new feature branch.

Example:
```
git checkout -b <new-branch>
```

3. Do all work in feature branch. 
4. Before merging into dev, pull from dev branch and fix merge conflicts.
5. When merge conflicts are fixed, pull request into dev branch. 
6. Review.
7. Merge into dev.
8. If there is a functioning product in dev, merge into master. 
