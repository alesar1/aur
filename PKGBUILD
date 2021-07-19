# Maintainer: Cedric Roijakkers <cedric [the at sign goes here] roijakkers [the dot sign goes here] be>.
# Inspired from the PKGBUILD for vscodium-bin and code-stable-git.

pkgname=vscodium-git
pkgver=1.58.2.r1.ge1b4583
pkgrel=1
pkgdesc="Free/Libre Open Source Software Binaries of VSCode (git build from latest commit)."
arch=('x86_64' 'aarch64' 'armv7h')
# The vscodium repo that will be checked out.
url='https://github.com/VSCodium/vscodium.git'
# The branch of vscodium that will be checked out
branch="master"
# The vscode repo that will also be checked out.
microsofturl='https://github.com/microsoft/vscode.git'
# The tag of Microsoft that will be checked out, will be determined automatically, just like VSCodium itself does, with the following url
stableversionurl='https://update.code.visualstudio.com/api/update/darwin/stable/lol'
license=('MIT')

# Version of NodeJS that will be used to create the build. Sinds 1.58.0, Codium requires a version >=14 and <=17.
_nodejs='14.16.0'

depends=(
    'fontconfig'
    'libxtst'
    'gtk3'
    'cairo'
    'alsa-lib'
    'nss'
    'gcc-libs'
    'libnotify'
    'libxss'
    'glibc>=2.28-4'
    'libxkbfile'
)
optdepends=(
    'gvfs: For move to trash functionality'
    'libdbusmenu-glib: For KDE global menu'
)
makedepends=(
    'nvm'
    'gulp'
    'yarn'
    'jq'
    'libxdmcp'
    'bash'
    'git'
    'patch'
    'python'
    'make'
    'gcc'
    'pkg-config'
)
source=(
    "git+${url}#branch=${branch}"
    "git+${microsofturl}#tag="$(curl ${stableversionurl} 2>/dev/null | jq -r '.name')
    'vscodium.desktop'
)
sha256sums=(
    'SKIP'
    'SKIP'
    '33ea43092cc895b9e6eea9056d72fbe462a450d41b6a1465da22566912110d69'
)
provides=('codium')
conflicts=(
    'vscodium'
    'vscodium-bin'
)

###############################################################################

# Even though we don't officially support other archs, let's allow the
# user to use this PKGBUILD to compile the package for their architecture.
case "$CARCH" in
  x86_64)
    _vscode_arch=x64
    ;;
  aarch64)
    _vscode_arch=arm64
    ;;
  armv7h)
    _vscode_arch=arm
    ;;
  *)
    # Needed for mksrcinfo
    _vscode_arch=DUMMY
    ;;
esac

prepare() {
    cd 'vscodium'
    # Normally, we would execute get_repo.sh to clone the Microsoft repo here, but makepkg can't do this.
    # So we rely on the clone that happened earlier, and move the git directory to the expected place.
    rm -rf 'vscode'
    mv '../vscode' 'vscode'
}

pkgver() {
    cd "vscodium"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "vscodium"

    # Export some environment variables that would normally be set by Travis CI.
    export SHOULD_BUILD="yes"
    export VSCODE_ARCH="${_vscode_arch}"
    export OS_NAME="linux"
    export LATEST_MS_COMMIT=$(git rev-list --tags --max-count=1)
    export LATEST_MS_TAG=$(git describe --tags "${LATEST_MS_COMMIT}")

    # Disable building rpm, deb, and AppImage packages which are not needed in an AUR build
    export SKIP_LINUX_PACKAGES="True"

    # Build just like Travis does: install NodeJS and run the build.sh script.
    source /usr/share/nvm/init-nvm.sh
    nvm install ${_nodejs}
    ./build.sh
}

package() {
    install -d -m755 ${pkgdir}/usr/bin
    install -d -m755 ${pkgdir}/usr/share/{${pkgname},applications,pixmaps}
    install -d -m755 ${pkgdir}/usr/share/licenses/${pkgname}
    cp -r ${srcdir}/vscodium/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}
    cp -r ${srcdir}/vscodium/VSCode-linux-${_vscode_arch}/* ${pkgdir}/usr/share/${pkgname}
    ln -s /usr/share/${pkgname}/bin/codium ${pkgdir}/usr/bin/code
    ln -s /usr/share/${pkgname}/bin/codium ${pkgdir}/usr/bin/vscode
    ln -s /usr/share/${pkgname}/bin/codium ${pkgdir}/usr/bin/codium
    ln -s /usr/share/${pkgname}/bin/codium ${pkgdir}/usr/bin/vscodium
    install -D -m644 vscodium.desktop ${pkgdir}/usr/share/applications/vscodium.desktop
    install -D -m644 ${srcdir}/vscodium/VSCode-linux-${_vscode_arch}/resources/app/resources/linux/code.png \
            ${pkgdir}/usr/share/pixmaps/vscodium.png
}
