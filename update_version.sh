#!/bin/bash
set -euxo pipefail

REPO="https://github.com/yggdrasil-network/yggdrasil-go.git"
WORKDIR="/tmp/yggdrasil-go"

# Set up cleanup
function cleanup() {
	rm -rf ${WORKDIR}
}
trap cleanup EXIT

# Check out latest master
git clone ${REPO} ${WORKDIR}

# Fetch version information
pushd ${WORKDIR}
VER=$(bash contrib/semver/version.sh | sed 's/^v//')

# Replace version in PKGBUILD
popd
sed -i "s/^pkgver=.*$/pkgver=${VER}/" PKGBUILD

# Check for real updates
if (git diff --exit-code PKGBUILD); then
	echo "Version ${VER} is already in PKGBUILD, not updating"
	exit 0
fi

# Update .SRCINFO
makepkg --printsrcinfo >.SRCINFO

# Create update-commit
git add PKGBUILD .SRCINFO
git commit -m "yggdrasil-go v${VER}"
