# Maintainer: Davi da Silva Böger <dsboger at gmail dot com>
# Contributor: Moritz Maxeiner <moritz@ucworks.org>

pkgname=dub-git
_gitname=dub
pkgver=0.9.24.r1542.cb1a20a
pkgrel=1
pkgdesc="Package manager for D packages, git version"
arch=('i686' 'x86_64')
url="https://github.com/D-Programming-Language/dub"
license=('MIT')
depends=('curl')
makedepends=('git' 'dmd')
provides=('dub')
conflicts=('dub')
source=('git+https://github.com/D-Programming-Language/dub')
md5sums=('SKIP')
sha256sums=('SKIP')

pkgver() {
  cd ${srcdir}/${_gitname}
  echo $(git describe --abbrev=0 | sed 's|v||g' | sed 's|-||g').r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd ${srcdir}/${_gitname}
  ./build.sh
}

package() {
  cd ${srcdir}/${_gitname}
  install -D -m755 bin/dub "${pkgdir}/usr/bin/dub"
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
