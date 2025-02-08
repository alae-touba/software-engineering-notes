---
tags: [git, version-control]
date: 2024-02-07
author: Alae
description: A comprehensive guide for working with feature branches in Git, including stashing and rebasing workflows
---

# a typical worflow when working on a feature branch

Here's the complete workflow including stash for when you need to switch branches with uncommitted changes:

1. Start your feature branch from up-to-date dev:

    ```bash
    git checkout dev
    git pull
    git checkout -b feature-branch

    ```

2. Work on your feature, making commits as needed:

    ```bash
    git add .
    git commit -m "feat: add login form"
    git commit -m "fix: improve validation"
    # ... more commits as you work
    ```

3. When you need to get latest dev changes but have uncommitted work:

    ```bash
    # Save your uncommitted changes
    git stash save "WIP: login feature styling"

    # Get latest dev changes
    git checkout dev
    git pull
    git checkout feature-branch
    git rebase dev    # This puts your commits on top of latest dev changes

    # Bring back your uncommitted changes
    git stash pop     # You might need to resolve conflicts here

    ```

4. Test that everything still works
5. Finally, merge your feature into dev:

    ```bash
    git checkout dev
    git merge feature-branch
    git push

    ```