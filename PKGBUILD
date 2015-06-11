# Maintainer: Kevin Brodsky <corax26 at gmail dot com>
# Contributor: Anton Jongsma <anton@felrood.nl>
pkgname=bisonc++
pkgver=4.09.02
pkgrel=2
pkgdesc='C++ parser generator'
arch=('i686' 'x86_64')
url='http://bisoncpp.sourceforge.net'
license=('GPL')
depends=('libbobcat')
makedepends=('icmake' 'yodl')
optdepends=()
source=("http://downloads.sourceforge.net/project/bisoncpp/bisonc++/${pkgver}/bisonc++_${pkgver}.orig.tar.gz"
        'manual_license.patch')
md5sums=('cdb9a11ec237f10b1c8cc31e7f4076d0'
         'bab1f76582bd7518df6debe7265fdd7c')


build() {
  cd "$srcdir/bisonc++-${pkgver}"

  patch -p1 -i "$srcdir/manual_license.patch"

  CXXFLAGS="$CXXFLAGS --std=c++11"
  ./build program
  ./build man
  ./build manual
}

package() {
  cd "$srcdir/bisonc++-${pkgver}"
  ./build install program "${pkgdir}/usr/bin/bisonc++"
  ./build install skel "${pkgdir}/usr/share/bisonc++"
  ./build install man "${pkgdir}/usr/share/man/man1"
  ./build install manual "${pkgdir}/usr/share/doc/bisonc++-doc"
  ./build install std "${pkgdir}/usr/share/doc/bisonc++"
  ./build install extra "${pkgdir}/usr/share/doc/bisonc++-doc"
}
