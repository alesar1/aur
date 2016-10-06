#!/bin/bash
# git pre-commit hook:
# - Generate the sha256sums in the PKGBUILD file and add it to the commit if needed
# - Generate the .SRCINFO file and add it to the commit if needed

# Generate the sha256sums in the PKGBUILD file
updpkgsums

# Remove the archive downloaded by updpkgsums
rm *.tar.gz

# Check if the sha256sums in the PKGBUILD file changed
if [ -n "$(git diff PKGBUILD | grep '^+sha256sums=(.*)$')" ]; then
  printf "Updated the sha256sums in the PKGBUILD file\n"
  git add PKGBUILD
  printf "Added the PKGBUILD file to the commit\n"
fi

# Generate the .SRCINFO file based on the PKGBUILD file
mksrcinfo

# Check if the .SRCINFO file was created/changed
if [ -n "$(git status --short | grep ' .SRCINFO$')" ]; then
  printf "Updated the .SRCINFO file\n"
  git add .SRCINFO
  printf "Added the .SRCINFO file to the commit\n"
fi
