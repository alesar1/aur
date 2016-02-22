# Maintainer: Frederic Bezies <fredbezies at gmail dot com>
# Contributor: Stephen D. Cofer <stephen.d.cofer@outlook.com>

pkgname=enyo-doom
pkgver=1.02
pkgrel=2
pkgdesc="A frontend for Doom engines"
arch=('i686' 'x86_64')
url="https://github.com/stephendcofer/enyo-doom"
license=('GPL')
depends=('qt5-base')
makedepends=('cmake')
optdepends=('chocolate-doom' 'prboom' 'zdoom' 'prboom-plus')
source=("https://github.com/stephendcofer/enyo-doom/archive/1.02.tar.gz")
md5sums=('0162b30525ae0008f74990e01f698761')

build() {
cd ${srcdir}/${pkgname}-${pkgver}
cmake . -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
         -DQT_QMAKE_EXECUTABLE=qmake-qt5
make
  }

package() {
cd ${srcdir}/${pkgname}-${pkgver}
make DESTDIR=${pkgdir} install
}

