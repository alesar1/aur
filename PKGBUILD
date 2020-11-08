# Maintainer: Étienne Deparis <etienne@depar.is>

pkgname=goodvibes
pkgver=0.6
pkgrel=1
pkgdesc="Lightweight internet radio player"
arch=('i686' 'x86_64')
url="https://gitlab.com/goodvibes/goodvibes"
license=('GPL')
depends=("amtk" "libkeybinder3" "gst-plugins-base" "gst-plugins-good" "gst-plugins-ugly")
makedepends=("meson")
source=("https://gitlab.com/${pkgname}/${pkgname}/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.gz")
sha256sums=('b3cb769ff2813e38ac5211be5af97a32f17b31ba48c0133d8a406005262f76a5')

build() {
    cd "$srcdir/$pkgname-v$pkgver"
    meson --prefix=/usr build
    cd build
    ninja
}

package() {
    cd "$srcdir/$pkgname-v$pkgver/build"
    DESTDIR="$pkgdir" ninja install
}
