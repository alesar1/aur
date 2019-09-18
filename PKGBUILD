# Maintainer: Foxy <gmail: foxyblackhat@gmail.com>
pkgname=astreamfs-git
pkgver=r112.69efab8
pkgrel=1
pkgdesc='Fuse filesystem to read http(s) URL'
arch=(i686 x86_64)
url='https://gitlab.com/BylonAkila/astreamfs'
license=(GPL3)
depends=('fuse')
makedepends=('git')
source=(git+https://gitlab.com/BylonAkila/astreamfs.git)
sha1sums=('SKIP')

pkgver() {
  cd astreamfs
  echo r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd astreamfs
  make
}

package() {
  cd astreamfs
  install -Dm755 astreamfs "${pkgdir}/usr/bin/astreamfs"
  install -Dm755 1fichier "${pkgdir}/usr/bin/1fichier"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
