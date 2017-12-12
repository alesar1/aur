# $Id$
# Maintainer: Jörg Schuck <joerg_schuck@web.de>
# Contributor: T. Baumann <arch AT nnamuab DOT de>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: dorphell <dorphell@archlinux.org>

pkgname=enchant1.6
_pkgname=enchant
pkgver=1.6.1
pkgrel=7
pkgdesc="A wrapper library for generic spell checking"
arch=('i686' 'x86_64')
url="https://abiword.github.io/enchant/"
license=('LGPL')
depends=('aspell' 'hunspell' 'hspell' 'libvoikko' 'glib2')
makedepends=('git')
_commit=7c0ec265a89808893a692f6205f2555f30198444  # tags/enchant-1-6-1
source=(
	"git+https://github.com/AbiWord/enchant.git#commit=$_commit"
	"makefile_1.6.patch"
	"aclocal.patch"
)
sha256sums=('SKIP'
            'e36a045b347b1540b9612472563c523e24a354764b21e7734c48f6adaf1bda5d'
            'd13f13836b14ba80b6b3ef2f8ed91f78aff41faa34ebf739a8bc90caa4b4e302')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/^enchant-//;s/-/\./g'
}

prepare() {
  cd $_pkgname
  patch -p1 < ../makefile_1.6.patch
  patch -p1 < ../aclocal.patch
  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd $_pkgname
  ./configure --prefix=/usr \
    --disable-static \
    --disable-ispell \
    --with-myspell-dir=/usr/share/myspell
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd $_pkgname
  local _tempdir=$(readlink -f "./maketarget")
  make DESTDIR="${_tempdir}" install

  install -dm 755 "${pkgdir}/usr/lib/enchant1.6"
  cp -a "${_tempdir}/usr/lib/enchant/"* "${pkgdir}/usr/lib/enchant1.6/."
  cp -a "${_tempdir}/usr/lib/libenchant.so.1"* "${pkgdir}/usr/lib/."
  
}
