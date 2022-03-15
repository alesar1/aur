# Maintainer: Jules Pénuchot <jules@penuchot.com>

_name=sciplot
_author=sciplot

pkgname=${_name}-git
pkgver=v0.2.2.r63.gfc7b7c0
pkgrel=1
pkgdesc="A modern C++ scientific plotting library powered by gnuplot"
arch=('any')
url="https://github.com/${_author}/${_name}"
license=('MIT')

depends=('gnuplot')
makedepends=('git' 'cmake' 'make')
provides=('sciplot')
conflicts=('sciplot')

source=("$pkgname::git+https://github.com/${_author}/${_name}.git#branch=master")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cmake -B build -S ${pkgname} \
        -DSCIPLOT_BUILD_EXAMPLES=OFF \
        -DSCIPLOT_BUILD_TESTS=OFF \
        -DSCIPLOT_BUILD_DOCS=OFF \
        -DCMAKE_BUILD_TYPE='None' \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -Wno-dev
  make -C build
}

package() {
  make -C build DESTDIR=$pkgdir install
}
