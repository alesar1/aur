# Mantainer: lxsycht <lux@systemli.org>
pkgname=metadata-cleaner
pkgdesc='Python GTK application to view and clean metadata in files, using mat2'
pkgver=1.0.6
pkgrel=1
url='https://gitlab.com/rmnvgr/metadata-cleaner'
license=('GPL3')
arch=('x86_64')
depends=('gtk3' 'libhandy' 'python-gobject' 'python' 'mat2')
makedepends=('meson' 'appstream' 'pkgconf')
source=("$pkgname-v$pkgver.tar.gz"::"$url/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('SKIP')

build() {
  meson --prefix=/usr "$pkgname-v$pkgver" build
}

check() {
  meson test -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}

