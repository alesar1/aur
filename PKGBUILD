# Maintainer: Alonso Rodriguez <alonso.rodriguez (at) udc.es>

pkgname=pato
pkgver=0.0.0
pkgrel=1
pkgdesc="PATO: high PerformAnce TriplexatOr is a high performance tool for the fast and efficient detection of triple helices and triplex features in nucleotide sequences"
arch=('any')
url="https://github.com/amatria/pato"
license=('MIT')
depends=()
makedepends=('git')
optdepends=()
conflicts=('pato' 'pato-git')
provides=('pato')
source=("git+${url}.git#branch=master")
sha256sums=('SKIP')

# In case there is some activity on the repo (which I doubt will happen)
# pkgver() {
#   cd "${srcdir}/${pkgname}/"
#   git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
# }

# TODO FIX PARSING ARGUMENTS FROM makepkg VARS
_wflags="-Wno-deprecated-declarations -Wno-unknown-pragmas"

prepare() {
  cd "${srcdir}/${pkgname}"
  sed -i 's/-march=native//g' Makefile.gnu
  sed -i 's/-march=native//g' Makefile.clang
  sed -i 's/-xHost//g' Makefile.intel
  sed -i "s/\"v${pkgver}\"/\"v${pkgver}-arch\"/g" src/command_line_parser.hpp
  sed -i "s/CXXFLAGS+=/CXXFLAGS+=${_wflags} /g" Makefile.gnu
}

build() {
  cd "${srcdir}/${pkgname}/"

  make gnu BUILD=serial $MAKEFLAGS
  make gnu BUILD=release $MAKEFLAGS
}

check() {
  cd "${srcdir}/${pkgname}/"

  ./test/test.bash  
}

package() {
  cd "${srcdir}/${pkgname}/"

  # TODO fix if cross-compiling (please don't do that)
  ./target/gnu/pato.release --export-help=man | gzip > pato.1.gz
  install -Dm644 pato.1.gz "$pkgdir/usr/share/man/man1/pato.1.gz"

  # Install pato.release
  install -Dm755 target/gnu/pato.release "$pkgdir/usr/bin/pato"

  # Install the license
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
