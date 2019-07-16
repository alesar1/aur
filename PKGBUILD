# Maintainer: Martin Sandsmark <martin.sandsmark@kde.org>

pkgname=qssh-git
pkgver=r125.08e4e5a
pkgrel=1
pkgdesc='A Qt based implementation of SSH and SFTP'
arch=('i686' 'x86_64')
url='https://github.com/sandsmark/QSsh'
license=('LGPL')
depends=('qt5-base' 'botan')
makedepends=('qt5-base')
conflicts=(qssh)
provides=(qssh)
source=('git://github.com/sandsmark/QSsh.git')
md5sums=('SKIP')

pkgver() {
  cd QSsh
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd QSsh
  qmake
  make
}

package() {
  cd QSsh
  make INSTALL_ROOT="$pkgdir" install
  install -vDm 644 README -t "${pkgdir}/usr/share/doc/${pkgname}"

}
