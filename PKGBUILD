# Maintainer: BenObiWan <benobiwan @t gmail dot com>

pkgname=zelda-xd2
pkgver=1.0.0
pkgrel=2
epoch=
pkgdesc="Free and opensource, amateur Zelda game with humoristic characters."
arch=('any')
url="http://www.zelda-solarus.com/"
license=('custom')
groups=()
depends=('solarus>=1.5.0')
makedepends=('zip' 'cmake')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(http://www.zelda-solarus.com/downloads/$pkgname/$pkgname-$pkgver.tar.gz)
noextract=()
md5sums=('5f47bbc560311b729bd5f05aa800aec8')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cmake -D CMAKE_INSTALL_PREFIX="/usr" -D CMAKE_BUILD_TYPE=Release .
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}/" PREFIX="/usr" install
}

