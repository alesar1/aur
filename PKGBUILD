# Maintainer: Platon Ryzhikov <ihummer63@yandex.ru>

pkgbase=nldev-phkr
pkgname=nldev
pkgver=0.3
pkgrel=7
pkgdesc="frontend for mdev, replacing the over-engineered udevd"
url="http://git.r-36.net/nldev/"
arch=('i686' 'x86_64' 'aarch64')
makedepends=(git)
depends=('mdev')
license=('MIT')
_commit=e0713f6
source=("git://git.r-36.net/nldev#commit=$_commit"
        "0000-change_shell.patch"
        "0001-increase_buffer.patch"
        'config.mk'
        'hook'
        'install')
md5sums=('SKIP'
         'f96e7f40e2f4c5378c93c5cc97d4185d'
         '508367c15bf5117870c7dc0765cba2b9'
         '1c4dcaf94bebdcb8f47a520776fd9ee0'
         '613a765dc1e0c2f203dbfae452f346ed'
         '3c76a58298fca8325843639d2a02b5d4')
provides=('udev' 'eudev')

prepare() {
	cd "${srcdir}/${pkgname}"
	patch -Np1 -i ../0000-change_shell.patch
	patch -Np1 -i ../0001-increase_buffer.patch

	cp ../config.mk ./
}

build() {
  cd "$srcdir/$pkgname"
  make
}

package() {
  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" PREFIX=/usr install
  install -m644 -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  cd "$srcdir"
  install -m644 -D hook "$pkgdir/usr/lib/initcpio/hooks/nldev"
  install -m644 -D install "$pkgdir/usr/lib/initcpio/install/nldev"
}
