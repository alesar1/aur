# Maintainer: Ben Golberg <ben@benaaron.dev>
# Contributor: Felix Yan <felixonmars@archlinux.org
# Contributor: Maxim Baz <$pkgname at maximbaz dot com>
# Contributor: Pablo Arias <pabloariasal@gmail.com>
# Contributor: John Jenkins <twodopeshaggy@gmail.com>

pkgname=nnn-icons
pkgver=4.2
pkgrel=1
pkgdesc="The fastest terminal file manager ever written. (with icon support)"
arch=('x86_64')
depends=('bash' 'icons-in-terminal')
optdepends=(
    'atool: for more archive formats'
    'libarchive: for more archive formats'
    'zip: for zip archive format'
    'unzip: for zip archive format'
    'trash-cli: to trash files'
    'sshfs: mount remotes'
    'rclone: mount remotes'
    'fuse2: unmount remotes'
    'xdg-utils: desktop opener'
)
url="https://github.com/jarun/nnn"
license=('BSD')
provides=(nnn)
conflicts=(nnn)
source=("nnn-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('5675f9fe53bddfd92681ef88bf6c0fab3ad897f9e74dd6cdff32fe1fa62c687f')

prepare() {
    sed -i 's/install: all/install:/' "nnn-${pkgver}/Makefile"
}

build() {
    cd "nnn-${pkgver}"
    make O_ICONS=1
}

package() {
    cd "nnn-${pkgver}"
    make DESTDIR="${pkgdir}" PREFIX=/usr install
    make DESTDIR="${pkgdir}" PREFIX=/usr install-desktop

    install -Dm644 misc/auto-completion/fish/nnn.fish "${pkgdir}/usr/share/fish/vendor_completions.d/nnn.fish"
    install -Dm644 misc/auto-completion/bash/nnn-completion.bash "${pkgdir}/usr/share/bash-completion/completions/nnn"
    install -Dm644 misc/auto-completion/zsh/_nnn "${pkgdir}/usr/share/zsh/site-functions/_nnn"

    install -Dm644 -t "${pkgdir}/usr/share/nnn/quitcd/" misc/quitcd/*

    cp -a plugins "${pkgdir}/usr/share/nnn/plugins/"

    install -Dm644 -t "${pkgdir}/usr/share/licenses/nnn/" LICENSE
}
