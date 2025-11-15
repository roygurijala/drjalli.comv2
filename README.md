# drjalli.comv2
version 2 of drjalli.com website

## Editing files in the GitHub web UI

You can modify `index.html`, `styles.css`, or `scripts.js` directly from the GitHub
website without cloning locally. Follow these steps:

1. Open the repository in your browser and select the branch you want to edit.
2. Navigate to the file (for example, `index.html`) and click the pencil icon in the
   upper-right corner of the file view to switch to edit mode.
3. Make your changes in the web editor. Use the preview tab if you want to check the
   diff before saving.
4. Scroll to the bottom, add a descriptive commit message, choose whether to commit
   directly to the current branch or create a new branch, and then click
   **Commit changes**.
5. If you created a new branch, open a pull request from that branch to `main` so the
   changes can be reviewed and merged.

Repeat the process for each file you want to adjust.

## If you can't see the files on GitHub

Use this checklist to make sure `index.html`, `styles.css`, and `scripts.js` are
visible in the GitHub interface:

1. **Confirm you're on the `Code` tab.** Other tabs (Issues, Pull requests, etc.)
   hide the file tree.
2. **Select the correct branch.** Use the branch dropdown (top-left, near the
   file list) and switch to `main` or whichever branch contains the latest
   deployment. Files that live only on another branch will disappear when a
   different branch is selected.
3. **Check the commit you're viewing.** If you clicked into an older commit or a
   tag, GitHub shows the repository as it existed at that time. Click the
   repository name in the header to jump back to the latest commit on the
   currently selected branch.
4. **Verify the path.** The repo stores the three files at the root level. Use
   the **Go to file** button (press `t` as a shortcut) and type `index.html` to
   jump directly to it.
5. **Look at the history.** Open the **History** button (clock icon) for
   `index.html` to confirm the most recent commit is present. If you don't see
   the commit, ensure it was pushed to GitHub (`git status` should be clean and
   `git push origin main` should succeed).

If the files still don't show up after these steps, refresh the page or sign out
and back in to clear any cached view.
