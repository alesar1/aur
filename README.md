
- AUR package location: <https://aur.archlinux.org/packages/m17n-db-indic/>
- Package source code locations:
    - git clone git@github.com:sanskrit-coders/m17n-db-indic-aur.git
    - git clone ssh://aur@aur.archlinux.org/m17n-db-indic.git
    
# Creating a new Arch Linux package release
- Update PKGBUILD.
  - Fix the version numbers.
- Verify package by running `makepkg -si`.
- Update AUR repository.
  - Set remote: `git remote add origin ssh://aur@aur.archlinux.org/m17n-db-indic.git`
  - Generate or update .SRCINFO with `makepkg --printsrcinfo > .SRCINFO`
  - Push to the AUR repo. (Even a single invalid commit will cause rejection.)
