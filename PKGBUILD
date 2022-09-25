# Maintainer: Michael Vale <mike@vale.net.au>
_pkgname=samplebrain
pkgname=$_pkgname-git
pkgver=git
pkgrel=1
epoch=
pkgdesc="A custom sample mashing app designed by Aphex Twin."
arch=('x86_64')
url="https://gitlab.com/then-try-this/samplebrain"
license=('GPL')
groups=()
depends=('libsndfile' 'portaudio' 'liblo' 'fftw' 'qt6-base')
makedepends=('git')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://gitlab.com/then-try-this/samplebrain.git")
noextract=()
md5sums=('SKIP')
validpgpkeys=()

pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$pkgname-git"
	qmake
	make
}

check() {
	cd "$pkgname-git"
	make -k check
}

package() {
	cd "$pkgname-git"
	make INSTALL_ROOT="$pkgdir/" install
}

