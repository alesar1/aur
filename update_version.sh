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
git checkout develop

VER=$(git describe --tags --long --always)
VER=${VER/-/.r}
VER=${VER/-/.}
VER=${VER#v}

COMMIT=$(git rev-parse HEAD)

# Replace version in PKGBUILD
popd
sed -i \
	-e "s/^pkgver=.*$/pkgver=${VER}/" \
	-e "s/^_commit=.*$/_commit=${COMMIT}/" \
	PKGBUILD

# Check for real updates
if (git diff --exit-code PKGBUILD); then
	echo "Version ${VER} is already in PKGBUILD, not updating"
	exit 0
fi

# Reset pkgrel
sed -i \
	-e 's/pkgrel=.*/pkgrel=1/' \
	PKGBUILD

# Update source hashes
updpkgsums

# Update .SRCINFO
makepkg --printsrcinfo >.SRCINFO

# Create update-commit
git add PKGBUILD .SRCINFO
git commit -m "yggdrasil-go v${VER}"
