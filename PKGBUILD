# Maintainer: Louis Opter <kalessin@kalessin.fr>

pkgname=lightsd
pkgver=0.9.2
pkgrel=1
epoch=1
pkgdesc="Daemon to control your LIFX smart bulbs via a JSON-RPC API"
arch=("i686" "x86_64")
url="https://www.github.com/lopter/lightsd/"
license=("GPL3")
depends=("libevent>=2.0.19")
optdepends=(
    "python: to run the interactive lightsc.py example client"
    "ipython: makes lightsc.py more user-friendly"
)
makedepends=("cmake>=2.8.11")
source=("https://github.com/lopter/lightsd/archive/${pkgver}.tar.gz")
sha256sums=("2d785ede7c2e3b603ad33c11c3e44b5c634ee17e745d39296125025eddbbf420")
#source=("src/${pkgname}-${pkgver}::hg+file:///home/kal/projs/lightsd")
#sha256sums="SKIP"
install=lightsd.install

build() {
    cd "$srcdir/$pkgname-$pkgver"

    cmake .                         \
        -DCMAKE_BUILD_TYPE=RELEASE  \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DLGTD_RUNTIME_DIRECTORY=/run/lightsd

    make
}

check() {
    cd "$srcdir/$pkgname-$pkgver"

    make test
}

package() {
    cd "$srcdir/$pkgname-$pkgver"

    make DESTDIR="$pkgdir/" install
}
