# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Jameson Pugh <imntreal@gmail.com>

_pkgname=onedrive
pkgname=$_pkgname-git
pkgver=r132.g88d2a94
pkgrel=1
epoch=1
pkgdesc='Free OneDrive client written in D'
arch=('i686' 'x86_64')
url='https://github.com/skilion/onedrive'
license=('GPL3')
depends=('curl' 'gcc-libs' 'glibc' 'sqlite')
makedepends=('dmd')
provides=("onedrive=$pkgver")
conflicts=('onedrive')
source=('git+https://github.com/skilion/onedrive.git')
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname

  printf 'r%s.g%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  sed -i 's|/usr/local|/usr|g' $_pkgname/onedrive.service
}

build() {
  make -C $_pkgname
}

package() {
  cd $_pkgname

  install -Dm755 onedrive -t "$pkgdir/usr/bin/"
  install -Dm644 config "$pkgdir/usr/share/onedrive/config.default"
  install -Dm644 onedrive.service -t "$pkgdir/usr/lib/systemd/user/"
}
