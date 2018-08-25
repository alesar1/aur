# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Yushin Huang <hyslion AT gmail.com>

_pkgname=libchewing
pkgname=libchewing-git
pkgver=0.5.1.r74.g3df07c9
pkgrel=1
epoch=1
pkgdesc='Intelligent Chinese phonetic input method'
url='http://chewing.im/'
arch=('i686' 'x86_64')
license=('GPL')
conflicts=("$_pkgname")
provides=("$_pkgname=$pkgver")
depends=('sqlite')
makedepends=('git')
source=("git+https://github.com/chewing/libchewing/"
        "issue219.patch"::"https://github.com/chewing/libchewing/pull/294.patch")
md5sums=('SKIP'
         '22a1d758203218c3f1e264eac77017e5')

pkgver() {
  cd "${_pkgname}"
  ( set -o pipefail
    git describe --long --tag 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
  )
}

prepare() {
  cd "${_pkgname}"

  patch -Np1 -i ../issue219.patch

  autoreconf -fvi
}

build() {
  cd "${_pkgname}"
  ./configure --prefix=/usr --disable-static
  make
}

check() {
  cd "${_pkgname}"
  # parallel testing is broken (https://github.com/chewing/libchewing/issues/293)
  make -j1 check
}

package() {
  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install
}
