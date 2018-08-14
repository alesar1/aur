# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=ttl2c
pkgname="${_pkgname}-git"
pkgver=1.0.1.r5.b64e425
pkgrel=2
epoch=1
pkgdesc="Turtle to header conversion utility for LV2 Plugin developers "
arch=('i686' 'x86_64')
url="https://github.com/lvtk/ttl2c"
license=('GPL3')
depends=('boost-libs')
makedepends=('python2')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/lvtk/ttl2c.git")
md5sums=('SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=$(grep ^VERSION wscript | cut -f 2 -d "'")
  local rev=$(git rev-list --count HEAD)
  local githash=$(git rev-parse --short HEAD)
  echo ${ver}.r${rev}.${githash}
}

build() {
  cd "${srcdir}/${_pkgname}"

  python2 waf configure --prefix=/usr
  python2 waf build
}

package() {
  cd "${srcdir}/${_pkgname}"

  python2 waf install --destdir="$pkgdir"
}

# vim:set ts=2 sw=2 et:
