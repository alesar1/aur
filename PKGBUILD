# Maintainer: René Wagner <rwagner@rw-net.de>

pkgname=cgmnlm
pkgrel=1
pkgver=1.4
pkgdesc="colorful gemini line mode client - fork of gmni"
url="https://code.clttr.info/cgmnlm/file/README.md.html"
arch=('x86_64' 'armv7h' 'aarch64')
license=('GPL3')
source=("${pkgname}::git://git.clttr.info/cgmnlm.git#tag=${pkgver}")
conflicts=('gmni-git' 'cgmnlm-git')
optdepends=('xdg-utils')
depends=('bearssl')
makedepends=('scdoc')
sha256sums=('SKIP')

build() {
    cd "${srcdir}/${pkgname}"

    mkdir -p build && cd build
    ../configure --prefix=/usr
    make PREFIX="/usr"
}

package() {
    cd "${srcdir}/${pkgname}/build"
    make PREFIX="/usr" DESTDIR="$pkgdir" install
}
