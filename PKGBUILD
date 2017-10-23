# Maintainer: Fabio Loli <loli_fabio@protonmail.com>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Andreas Schönfelder <passtschu at freenet dot de>
# https://github.com/FabioLolix

pkgname=phoronix-test-suite-milestone
pkgver=7.6.0m1
pkgrel=1
pkgdesc="The most comprehensive testing and benchmarking platform available for Linux, milestone version"
arch=('any')
license=('GPL3')
url="http://www.phoronix-test-suite.com/"
depends=('php')
optdepends=('php-gtk'
            'php-gd'
            'gcc-fortran')
provides=('phoronix-test-suite')
conflicts=('phoronix-test-suite' 'phoronix-test-suite-milestone')
install=${pkgname}.install
source=(http://www.phoronix-test-suite.com/releases/development/phoronix-test-suite-$pkgver.tar.gz)
sha256sums=('113956045d0d9816db87fe2a479e0717806241491e4bbc7971a31de103e5842e')

package() {
  cd "$srcdir"/phoronix-test-suite
  sed -i "s#--noconfirm#--noconfirm --asdeps#" pts-core/external-test-dependencies/scripts/install-arch-packages.sh
  install -dm755 "$pkgdir"/usr/share/phoronix-test-suite
  sed -e "s/^export PTS_DIR=.*/export PTS_DIR=\/usr\/share\/phoronix-test-suite/g" -i phoronix-test-suite
  install -Dm755 phoronix-test-suite "$pkgdir"/usr/bin/phoronix-test-suite
  rm -f "$pkgdir"/usr/share/phoronix-test-suite/pts/etc/scripts/package-build-*
  cp -r pts-core/ "$pkgdir"/usr/share/phoronix-test-suite/
}
