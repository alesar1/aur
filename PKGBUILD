# Maintainer: Chan Beom Park <cbpark@gmail.com>

pkgname=whizard
pkgver=2.3.0
pkgrel=1
pkgdesc="A program system designed for the efficient calculation of multi-particle scattering cross sections and simulated event samples."
arch=("i686" "x86_64")
url="http://whizard.hepforge.org"
license=('GPL2')
makedepends=(texlive-bin texlive-pictures ghostscript)
depends=(ocaml gcc-fortran pythia lhapdf fastjet looptools hepmc)
source=("http://www.hepforge.org/archive/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('b0053195f22025df801e94cc6c1343ab6986a30e11b84f3f46f92400e4bcc82f')

build() {
  cd "$pkgname-$pkgver"
  ./configure --prefix=/usr --enable-lhapdf --enable-hepmc --enable-pythia8 --enable-fastjet --enable-looptools
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  install -D -m644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
