# Maintainer: graysky <graysky AT archlinux DOT us>

pkgname=clean-chroot-manager
pkgver=2.212
pkgrel=1
pkgdesc='Wrapper for managing clean chroot builds with local repo therein.'
arch=('any')
url='https://github.com/graysky2/clean-chroot-manager'
license=('MIT')
depends=('devtools>=20190821-1' 'rsync' 'libarchive>=3.3.3' 'pacman>=5.2')
conflicts=('clean_chroot_manager')
replaces=('clean_chroot_manager')
source=("$pkgname-$pkgver.tar.gz::https://github.com/graysky2/clean-chroot-manager/archive/v$pkgver.tar.gz")
b2sums=('79d5cfe59893c60b6e7afe45866440aff8a1519e873496682372f49b2fd486bccc44042cad55590cfd1d93c3334b5cc9876a06d538d0ac382c25d2e39329ed3d')
install=ccm.install

build() {
  cd "$pkgname-$pkgver"
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  install -Dm644 MIT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
