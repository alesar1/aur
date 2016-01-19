# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=serd
pkgname="${_pkgname}-git"
pkgver=0.22.1.r498.b1be377
pkgrel=1
pkgdesc="A lightweight C library for RDF syntax which supports reading and writing Turtle and NTriples"
arch=('i686' 'x86_64')
url="http://drobilla.net/software/serd/"
license=('custom:ISC')
makedepends=('python' 'git')
conflicts=("${_pkgname}" 'serd-svn')
provides=("${_pkgname}")
install="${_pkgname}.install"
source="$_pkgname::git+http://git.drobilla.net/serd.git"
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=`grep "^SERD_VERSION" wscript | cut -d "'" -f 2`
  echo "$ver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_pkgname}"

  python ./waf configure --prefix=/usr
  python waf build $MAKEFLAGS
}

package() {
  cd "$srcdir/$_pkgname"

  python waf install --destdir="$pkgdir"
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
