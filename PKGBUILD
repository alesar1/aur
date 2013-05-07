# Contributor: Jose Negron <josenj.arch@mailnull.com>
# Maintainer: Florian Dejonckheere <florian@floriandejonckheere.be>

pkgname=flip
pkgver=20130224
pkgrel=2
pkgdesc="Utility program to convert text files between UNIX or Mac newlines and DOS linefeed + newlines."
arch=('i686' 'x86_64')
url="http://www-ccrma.stanford.edu/~craig/utility/flip/"
license=('unknown')
source=(http://www-ccrma.stanford.edu/~craig/utility/flip/$pkgname.cpp)
md5sums=('21dc9256584eceffcfc27e137b3f8bc5')

build() {
  cd ${srcdir}
  g++ ${CXXFLAGS} flip.cpp -o flip
}

package(){
  mkdir -p ${pkgdir}/pkg/usr/bin
  install -m755 flip ${pkgdir}/pkg/usr/bin
}
