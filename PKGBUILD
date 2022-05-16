# Maintainer: Markus Kalb <mk@filmkreis.tu-darmstadt.de>
# Maintainer: Benjamin Radel <aur@radel.tk>
# Contributor: Stefan Karner <stefan.karner@student.tuwien.ac.at>
pkgname=libsub
pkgver=1.6.19
pkgrel=1
pkgdesc="a small C++ library to read and write subtitles in a few different formats (currently STL, SubRip and DCP)"
arch=('i686' 'x86_64')
url="https://carlh.net/libsub"
license=('GPL')
depends=('openssl' 'libxml++2.6' 'xmlsec'   'libdcp>=1.8.18' 'libcxml>=0.17.3' 'libsigc++>=2.0' 'boost-libs>=1.72.0' 'libasdcp-cth>=0.1.3')
makedepends=('git' 'python' 'boost>=1.72.0')
provides=('libsub')
conflicts=('libsub')
source=("${pkgname}-${pkgver}::git+git://git.carlh.net/git/libsub.git#tag=v${pkgver}")
sha256sums=('SKIP')

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}
  python waf configure --prefix=/usr
}

build() {
  cd  "${srcdir}/${pkgname}-${pkgver}"
  python waf build
}

package() {
  cd  "${srcdir}/${pkgname}-${pkgver}"
  python waf install --destdir=$pkgdir
  cd "${pkgdir}"
  if [ -d usr/lib64   ]
    then
       mv usr/lib64 usr/lib
    fi
}
