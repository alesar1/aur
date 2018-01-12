# Maintainer: marcs <aur (at) odd (dot) red>
# Contributor: Dennis Kempin <mail@dennis-kempin.de>

pkgname=boost-build
pkgver=1.66
pkgrel=1
pkgdesc="Boost.Build makes it easy to build C++ projects, everywhere."
arch=('any')
url="http://www.boost.org/build/"
license=('custom:boost')
depends=('gcc' 'boost' 'python')
conflicts=('boost-build-nightly')
source=("https://github.com/boostorg/build/archive/boost-${pkgver}.0.tar.gz"
        "http://www.boost.org/LICENSE_1_0.txt")
sha256sums=('f5ae37542edf1fba10356532d9a1e7615db370d717405557d6d01d2ff5903433'
            'c9bff75738922193e67fa726fa225535870d2aa1059f91452c411736284ad566')

prepare() {
  cd ${srcdir}/build-boost-${pkgver}.0/

  ./bootstrap.sh
}

package() {
  cd ${srcdir}/build-boost-${pkgver}.0/

  echo ${pkgdir}

  ./b2 install --prefix=${pkgdir}/usr

  # Removing b2 and bjam, already installed by boost
  msg2 "Removing /usr/bin/b2 and /usr/bin/bjam files, already installed by boost"
  rm -rf ${pkgdir}/usr/bin/

  install -Dm644 ${srcdir}/LICENSE_1_0.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
