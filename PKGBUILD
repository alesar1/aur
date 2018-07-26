# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Jameson Pugh <imntreal@gmail.com>

_pkgname=onedrive
pkgname=$_pkgname-git
pkgver=1.1.1.r2.gc231b13
pkgrel=1
epoch=1
pkgdesc='Free OneDrive client written in D'
arch=('i686' 'x86_64')
url='https://github.com/skilion/onedrive'
license=('GPL3')
depends=('curl' 'gcc-libs' 'glibc' 'sqlite')
makedepends=('dmd' 'git')
provides=("onedrive=$pkgver")
conflicts=('onedrive')
source=('git+https://github.com/skilion/onedrive.git')
sha256sums=('SKIP')

prepare() {
  sed -i 's/std\.c\./core.stdc./g' $_pkgname/src/sqlite.d
}

pkgver() {
  cd $_pkgname

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  make PREFIX=/usr -C $_pkgname
}

package() {
  make PREFIX=/usr DESTDIR="$pkgdir" -C $_pkgname install
  install -Dm644 $_pkgname/config "$pkgdir/usr/share/onedrive/config.default"
}
