# Maintainer: Markus Kalb <mk@filmkreis.tu-darmstadt.de>
# Contributor: Stefan Karner <stefan.karner@student.tuwien.ac.at>
pkgname=libdcp
pkgver=1.6.17
pkgrel=1
pkgdesc="A small C++ library which can create and read Digital Cinema Packages using JPEG2000 and WAV files"
arch=('i686' 'x86_64')
url="https://carlh.net/libdcp"
license=('GPL')
depends=('openssl' 'libxml++2.6' 'xmlsec' 'imagemagick' 'openjpeg2' 'libcxml>=0.16.1' 'libsigc++>=2.0' 'boost-libs>=1.72.0' 'libasdcp-cth>=0.1.3')
makedepends=('python2' 'boost>=1.72.0' 'python2' 'gcc' 'pkg-config')
source=("https://carlh.net/downloads/${pkgname}/${pkgname}-${pkgver}.tar.bz2"  )
sha512sums=('b5902f6f43ab4bd17d03766d611be4c1a5801a48f39330eb41c2c23fe0a3570c720efad52d07f360b5af73fc83d69402418be1fb551c541bd74380efe8b0157e')

build() {
  CXXFLAGS="$CXXFLAGS -std=c++11"
  cd "${srcdir}/${pkgname}-${pkgver}"
  python2 waf configure --prefix=/usr
  python2 waf build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python2 waf install --destdir=$pkgdir
  cd "${pkgdir}"
  if [ -d usr/lib64   ]
    then
       mv usr/lib64 usr/lib
    fi
}
