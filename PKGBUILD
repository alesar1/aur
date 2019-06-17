# Maintainer: CountMurphy <spartan1086@gmail.com>
# Maintainer: Shelvacu <aur@shelvacu.com>

_gitname=libserial
pkgname="${_gitname}-git"
pkgver=r516.ff5b6b0
pkgrel=1
pkgdesc="A library for accessing serial ports on POSIX systems (git version)"
arch=('x86_64')
url="https://github.com/crayzeewulf/${_gitname}/"
license=('GPL2')
makedepends=(
    'git' 
    'python-sip'
    'python-sphinx'
    'python-sphinx_rtd_theme'
    'gtest'
    'boost'
)
conflicts=("${_gitname}")
provides=("${_gitname}")

source=("$pkgname"::"git+https://github.com/crayzeewulf/${_gitname}.git")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${pkgname}"


  mkdir -p build
  cd build
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib

  make

  sphinx-build -b html "../docs/user_manual/" "docs/html/"
}

package() {
  cd "${pkgname}"
  cd "build"
  DESTDIR="${pkgdir}" make install

  install -d "${pkgdir}/usr/share/docs/${gitname}"
  cp -R "docs/html" "${pkgdir}/usr/share/docs/${gitname}"
}
