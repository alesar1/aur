# Maintainer: enihcam <nanericwang at the google email domain which is .com>
# Contributor: enihcam <nanericwang at the google email domain which is .com>

pkgname=chakracore
pkgver=1.8.1
pkgrel=1
pkgdesc='ChakraCore is the core part of the Chakra Javascript engine that powers Microsoft Edge'
arch=('x86_64')
url='https://github.com/Microsoft/ChakraCore'
license=('MIT')
depends=('icu')
makedepends=('cmake' 'clang' 'python2')
provides=('libChakraCore.so')
source=("https://github.com/Microsoft/ChakraCore/archive/v${pkgver}.tar.gz")
sha256sums=('5c9ca5f4169bda73dba2fd3813f7747b89822a5942bbee775a93fb8879e24745')

build() {
  cd "$srcdir/ChakraCore-${pkgver}"
  sed -i 's|python|python2|' ./build.sh
  ./build.sh
}

package() {
  mkdir -p "${pkgdir}/usr/lib"
  mkdir -p "${pkgdir}/usr/include"
  cp "$srcdir/ChakraCore-${pkgver}/out/Release/bin/ChakraCore/libChakraCore.so" "${pkgdir}/usr/lib"
  cp "$srcdir/ChakraCore-${pkgver}/out/Release/include/"*.h "${pkgdir}/usr/include/."
}
