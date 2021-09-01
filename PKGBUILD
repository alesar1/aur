# Maintainer: Baptiste Augrain <daiyam@zokugun.org>.
# Inspired from the PKGBUILD for vscodium-git.

pkgname=mrcode-git
pkgver=1.59.1+21241.r69.g281afd2
pkgrel=1
pkgdesc="A custom build of VSCodium / VSCode (git build from latest commit)"
arch=('x86_64' 'aarch64' 'armv7h')
url='https://github.com/zokugun/MrCode.git'
license=('MIT')

# Version of NodeJS that will be used to create the build.
_nodejs='14'

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
    'jq'
    'libxdmcp'
    'bash'
    'git'
    'python'
)
source=(
    "git+${url}"
    'mrcode.desktop'
)
sha256sums=('SKIP'
            '362ef9b395929a66442f60be0e238ac69afbbda07728e4121c352fdea236af92')
provides=('mrcode')
conflicts=(
    'mrcode'
    'mrcode-bin'
)

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

install_node() {
    if command -v "asdf" >/dev/null 2>&1; then
        echo "installing node-v${_nodejs} with asdf"
        
        asdf install nodejs ${_nodejs}
        asdf local nodejs ${_nodejs}
    elif command -v "nvm" >/dev/null 2>&1; then
        echo "installing node-v${_nodejs} with nvm"
        
        source /usr/share/nvm/init-nvm.sh
        nvm install ${_nodejs}
    else
        echo "node-v${_nodejs} is required"
        return 1
    fi
}

version() {
    echo "$@" | tr 'v' ' ' | awk -F. '{ printf("%03d%03d%03d%03d\n", $1,$2,$3,$4); }'
}

prepare() {
    if ! command -v "node" >/dev/null 2>&1; then
        install_node
    elif [ $(version $( node --version )) -lt $(version ${_nodejs}) ]; then
        install_node
    fi
    
    if ! command -v "yarn" >/dev/null 2>&1; then
        npm install -g yarn
    fi
    
    cd "MrCode"
    
    git checkout $( echo $pkgver | sed 's/\.r\([0-9]\+\)\./-r\1-/' )
    
    current=$( git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' )
    
    if [ ! "$pkgver" == $current ]; then
        echo "current: $current != $pkgver"
        return 1
    fi
}

build() {
    set -e
    
    cd "MrCode"

    export CI_BUILD="no"
    export SHOULD_BUILD="yes"
    export OS_NAME="linux"
    export VSCODE_ARCH="${_vscode_arch}"
    export SKIP_LINUX_PACKAGES="True"
    export RELEASE_VERSION=$( echo $pkgver | sed 's/\.r.*$//' )
    export VSCODIUM_LATEST="1"
    
    if [ -d vscodium ]; then
        . reset.sh
    fi

    . get_repo.sh

    . prepare.sh
    
    . version.sh

    . build.sh
}

package() {
    install -d -m755 ${pkgdir}/usr/bin
    install -d -m755 ${pkgdir}/usr/share/{mrcode,applications,pixmaps}
    install -d -m755 ${pkgdir}/usr/share/licenses/mrcode
    
    cp -r ${srcdir}/MrCode/vscodium/vscode/LICENSE.txt ${pkgdir}/usr/share/licenses/mrcode
    cp -r ${srcdir}/MrCode/vscodium/VSCode-linux-${_vscode_arch}/* ${pkgdir}/usr/share/mrcode
    
    ln -s /usr/share/mrcode/bin/mrcode ${pkgdir}/usr/bin/mrcode
    install -D -m644 mrcode.desktop ${pkgdir}/usr/share/applications/mrcode.desktop
    install -D -m644 ${srcdir}/MrCode/vscodium/VSCode-linux-${_vscode_arch}/resources/app/resources/linux/code.png ${pkgdir}/usr/share/pixmaps/mrcode.png
}
