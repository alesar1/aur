# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Matěj Týč <matej.tyc@gmail.com>
pkgname=argbash
pkgver=2.7.0
pkgrel=1
epoch=
pkgdesc="Bash argument parsing code generator"
arch=(any)
url="https://argbash.io"
license=('BSD')
groups=()
depends=('autoconf')
makedepends=('make')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/matejak/$pkgname/archive/$pkgver.tar.gz" LICENSE)
noextract=()
sha256sums=('f3387f8ab3491b4017459d703d0a117c31b1da0ed577e6026dc5fe2e146277e6' '2dd898f51dae8239523717e0c9e5a35fcc47da5db8a1d5170cd74d4ca24a52ef')
validpgpkeys=()

build() {
	true
}

check() {
	cd "$pkgname-$pkgver/resources"
	make check
}

package() {
	LICENSES="$pkgdir/usr/share/licenses/$pkgname"
	mkdir -p "$LICENSES"
	cp LICENSE "$LICENSES"

	cd "$pkgname-$pkgver/resources"
	make ROOT="$pkgdir" PREFIX="/usr" BASH_COMPLETION_DIRECTORY=/usr/share/bash-completion/completions/ INSTALL_COMPLETION=yes install
}
