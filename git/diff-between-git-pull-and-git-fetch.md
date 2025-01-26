## difference between `git fetch` and `git pull`

both `git fetch` and `git pull` synchronize your local repository with changes from a remote repository (e.g., github, gitlab), but they behave differently:

- **`git fetch`**: safely checks for updates **without altering** your working directory.  
- **`git pull`**: downloads and **immediately integrates** remote changes into your current branch.


## `git fetch`

git fetch retrieves the latest changes from a remote repository (e.g., origin) but does not merge them into your local branch (does not modify the working directory or current branch). it just updates the local copy of the remote branches (e.g., `origin/main`) so you can review changes before integrating them.


### examples

```bash
# fetch updates from the remote repository "origin":
git fetch origin

# compare your local branch to the fetched remote branch:
git diff main origin/main

# merge the fetched changes into your local branch (optional):
git merge origin/main
```


### use it when you want to:  
- check for updates/changes before integrating them and **without risking conflicts** (`git log origin/main`)


## `git pull`

git pull, does two things: it fetches the updates from the remote and then merges them into the current branch (modifying the working directory). so it's a combination of `git fetch` + `git merge` (or `git rebase` if configured).  
git pull **may create merge conflicts**.  

### use it when you want to:  
- quickly update your local branch with remote changes.  
- integrate remote changes **immediately**.  

### example:  
```bash
# pull and merge changes from "origin/main" into your current branch:
git pull origin main
```


## key differences

| feature         | `git fetch`                   | `git pull`                   |
|-----------------|------------------------------|------------------------------|
| updates local branch? | no                           | yes                           |
| modifies working directory? | no                           | yes                           |
| risk of merge conflicts? | no                           | yes                           |
| recommended for review? | yes                          | no                            |


## example workflow
### use fetch

fetch and review

```bash
git fetch origin          # get changes from the remote origin
git checkout origin/main  # switch to remote tracking branch origin/main
git log                   # see what's new
```

merge or rebase

```bash
git checkout main 
git merge origin/main     # after reviewing, merge manually
# OR
git rebase origin/main    # rebase instead of merge
```


### use pull
```bash
git pull origin main      # combines fetch + merge in one step

# or just (if the local branch tracks a remote branch (e.g., main -> origin/main):)
git pull 

# or you can rebase instead of merge
git pull --rebase  # fetch + rebase instead of merge (avoids merge commits)
```