# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix

pkgname=easyssh
pkgver=1.2.7
pkgrel=1
pkgdesc="SSH connection manager for Pantheon"
arch=('x86_64')
url='https://github.com/muriloventuroso/easyssh'
license=('GPL3')
depends=('libgranite.so' 'gtk3')
makedepends=('vala' 'cmake')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/muriloventuroso/easyssh/archive/${pkgver}.tar.gz")
sha256sums=('a261ef8c99e2627691feb7c6f1ec296aae5a9e2e66ba2ad7eb1c232359838a2e')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  meson build --prefix=/usr
  ninja -C build
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  DESTDIR="${pkgdir}" ninja -C build install
}
