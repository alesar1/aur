# Maintainer: Frantisek Sumsal <frantisek@sumsal.cz>
pkgname=dfuzzer
pkgver=2.1
pkgrel=1
pkgdesc="D-Bus fuzzer"
arch=('x86_64')
url="https://github.com/dbus-fuzzer/dfuzzer"
license=('GPL3')
depends=(
    'glib2'
)
makedepends=(
    'docbook-xsl'
    'gcc'
    'meson'
    'pkg-config'
    'libxslt'
)
backup=(
    'etc/dfuzzer.conf'
)
source=(
    "$pkgname-$pkgver.tar.gz::https://github.com/dbus-fuzzer/dfuzzer/archive/refs/tags/v$pkgver.tar.gz"
)
sha256sums=(
    '107bec83ba1c786773385b25b3507cb3e9bdaf920ddde8f3a9d2f490fab81e10'
)

build() {
    cd "$pkgname-$pkgver"
    meson build
    ninja -C build
}

check() {
    cd "$pkgname-$pkgver"
    build/dfuzzer --version
}

package() {
    cd "$pkgname-$pkgver"
    DESTDIR="$pkgdir" ninja -C build install
}
