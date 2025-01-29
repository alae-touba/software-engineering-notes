# git cheat sheet

## table of contents
- [git cheat sheet](#git-cheat-sheet)
  - [table of contents](#table-of-contents)
  - [configuration](#configuration)
    - [override work laptop config for personal projects](#override-work-laptop-config-for-personal-projects)
    - [list local git config](#list-local-git-config)
    - [disbale gpg signing locally](#disbale-gpg-signing-locally)
  - [branches](#branches)
    - [create and switch to a new branch](#create-and-switch-to-a-new-branch)
    - [rename a local branch](#rename-a-local-branch)
    - [force-delete a local branch](#force-delete-a-local-branch)
    - [delete a remote branch](#delete-a-remote-branch)
    - [show tracked remote branch](#show-tracked-remote-branch)
    - [push and set upstream](#push-and-set-upstream)
    - [list local branches](#list-local-branches)
    - [list all branches (local + remote)](#list-all-branches-local--remote)
    - [show current branch name](#show-current-branch-name)
  - [remote repositories](#remote-repositories)
    - [add a remote repository](#add-a-remote-repository)
    - [list all remotes](#list-all-remotes)
  - [commits](#commits)
    - [amend last commit message](#amend-last-commit-message)
    - [commit without gpg signing](#commit-without-gpg-signing)
  - [undoing changes](#undoing-changes)
    - [revert to an old commit range](#revert-to-an-old-commit-range)
    - [discard all uncommitted changes](#discard-all-uncommitted-changes)
    - [restore a file to last commit](#restore-a-file-to-last-commit)
    - [delete the last commit](#delete-the-last-commit)
  - [stashing](#stashing)
    - [stash tracked files with a message](#stash-tracked-files-with-a-message)
    - [stash including untracked files](#stash-including-untracked-files)
    - [list all stashes](#list-all-stashes)
    - [show details of a specific stash](#show-details-of-a-specific-stash)
    - [apply a stash](#apply-a-stash)
  - [commit inspection](#commit-inspection)
    - [show latest commit details (head)](#show-latest-commit-details-head)
    - [show parent of head commit](#show-parent-of-head-commit)
    - [show grandparent of head commit](#show-grandparent-of-head-commit)
  - [merging](#merging)
    - [abort a merge](#abort-a-merge)
    - [abort a rebase](#abort-a-rebase)
  - [miscellaneous](#miscellaneous)
    - [frequently referenced](#frequently-referenced)

## configuration

### override work laptop config for personal projects  
your work laptop likely has a **global git config** with your work email/username. to use your personal github account for a project:

```bash
git config --local user.email "alae2ba@gmail.com"
git config --local user.name "alae-touba"
```

### list local git config
```bash
git config --local --list
```

### disbale gpg signing locally
```bash
git config commit.gpgSign false
```

## branches

### create and switch to a new branch
```bash
git checkout -b <branch-name>
```

### rename a local branch
```bash
git branch -m <new-branch-name>
```

### force-delete a local branch
```bash
git branch -D <branch-name>
```

### delete a remote branch
```bash
git push origin --delete <branch-name>
```

### show tracked remote branch
```bash
git branch -vv
```

### push and set upstream
```bash
git push -u origin <branch-name>
```

### list local branches
```bash
git branch
```

### list all branches (local + remote)
```bash
git branch -a
```

### show current branch name
```bash
git branch --show-current
```

## remote repositories

### add a remote repository
```bash
git remote add origin <repo-url.git>
```

### list all remotes
```bash
git remote -v
```

## commits

### amend last commit message
```bash
git commit --amend -m "New commit message"
```

### commit without gpg signing
```bash
git commit --no-gpg-sign -m "Message"
```

## undoing changes

### revert to an old commit range
```bash
git revert --no-commit 0766c053..HEAD
git commit -m "Revert changes"
```

### discard all uncommitted changes
```bash
git reset --hard HEAD
```

### restore a file to last commit
```bash
git checkout -- <file-name>
```

### delete the last commit
```bash
git reset --hard HEAD^
```

## stashing

### stash tracked files with a message
```bash
git stash push -m "Stash message"
```

### stash including untracked files
```bash
git stash push -u -m "Stash message"
```

### list all stashes
```bash
git stash list
```

### show details of a specific stash
```bash
git stash show stash@{<id>}
```

### apply a stash
```bash
git stash apply stash@{<id>}
```

## commit inspection

### show latest commit details (head)
```bash
git show HEAD
```

### show parent of head commit
```bash
git show HEAD^
```

### show grandparent of head commit
```bash
git show HEAD^^
```

## merging

### abort a merge
```bash
git merge --abort
```

### abort a rebase
```bash
git rebase --abort
```


## miscellaneous

### frequently referenced  
- `origin`: default alias for the primary remote repository.  
- [track remote branch reference](https://stackoverflow.com/questions/171550/find-out-which-remote-branch-a-local-branch-is-tracking)
