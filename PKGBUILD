# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=huzheng001
_pkgname=stardict-3
_basever=3.0.6
pkgname=stardict-tools-git
pkgver=3.0.6.r657.6a5b1d4
pkgrel=1
pkgdesc='Stardict tools'
arch=('i686' 'x86_64')
url='http://www.huzheng.org/stardict/'
license=('GPLv3')
depends=('gtk3' 'glib2' 'libmariadbclient')
makedepends=('git' 'intltool')
provides=("${pkgname//-git}=${pkgver}")
conflicts=(${pkgname//-git})
source=("${_pkgname}::git://github.com/${_orgname}/${_pkgname}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}

  count="$(git rev-list --count HEAD)"
  head="$(git rev-parse --short HEAD)"

  printf "%s.r%s.%s" "${_basever}" "${count}" "${head}"
}

build() {
  cd ${_pkgname}

  ./autogen.sh
  ./configure --prefix=/usr --disable-dict
  sed -i 's/noinst_PROGRAMS =/bin_PROGRAMS =/' tools/src/Makefile
  make
}

package() {
  cd ${_pkgname}

  make DESTDIR=$pkgdir/ install
  find $pkgdir/usr/bin/ -not -name 'stardict-*' -type f | sed 'p;s#usr/bin/#usr/bin/stardict-#' | xargs -n2 mv
}
