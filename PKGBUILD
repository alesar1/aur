# Maintainer: René Wagner <rwagner@rw-net.de>

pkgname=cgmnlm-git
pkgrel=1
pkgver=1.0
pkgdesc="colorful gemini line mode client - fork of gmni"
url="https://src.clttr.info/rwa/cgmnlm"
arch=('x86_64' 'armv7h' 'aarch64')
license=('GPL3')
source=("${pkgname}::git+https://src.clttr.info/rwa/cgmnlm.git")
conflicts=('gmni-git' 'cgmnlm')
depends=('bearssl')
makedepends=('git' 'scdoc')
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname}/"
    printf "%s" "$(git describe | sed -r 's/\-/_/g' )"
}

build() {
    cd "${srcdir}/${pkgname}/"

    mkdir -p build && cd build
    # errors? what errors :)
    CFLAGS=-Wno-error ../configure --prefix=/usr
    make PREFIX="/usr"
}

package() {
    cd "${srcdir}/${pkgname}/build"
    make PREFIX="/usr" DESTDIR="$pkgdir" install
}
