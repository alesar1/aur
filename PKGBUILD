# Maintainer: Daniel Löbl <dloebl.2000@gmail.com>
pkgname=libcgif
pkgver=0.0.2
pkgrel=1
pkgdesc="A fast and lightweight GIF encoding library"
arch=('x86_64')
url="https://github.com/dloebl/cgif"
license=('MIT')
makedepends=('meson' 'ninja')
depends=('glibc')
source=("$pkgname-$pkgver.tar.gz::https://github.com/dloebl/cgif/archive/refs/tags/V$pkgver.tar.gz")
sha256sums=('679e8012b9fe387086e6b3bcc42373dbc66fb26f8d070d7a1d23f39d42842258')

build() {
 cd "$srcdir/cgif-$pkgver/"
 arch-meson build/ --backend=ninja --optimization=2
 meson compile -C build/
}
package() {
 mkdir -p "$pkgdir/usr/lib/" "$pkgdir/usr/include/" "$pkgdir/usr/share/licenses/$pkgname/"
 meson install -C "cgif-$pkgver/build/" --destdir "$pkgdir"
 cp "$srcdir/cgif-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/."
}
check() {
 meson test -C "cgif-$pkgver/build/"
}
