# Maintainer: Alexander Pohl <alex at ahpohl dot com>
pkgname=convpot
pkgver=1.1.7
pkgrel=1
epoch=
pkgdesc="Convert potentiostat data to a SQLite database"
arch=('i686' 'x86_64')
url="https://github.com/ahpohl/convpot"
license=('MIT')
groups=()
depends=('unixodbc' 'mdbtools' 'sqlite3')
makedepends=('cmake' 'git')
checkdepends=()
optdepends=('plotpot: for plotting potentiostat data')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=convpot.install
changelog=
source=("$pkgname-$pkgver::git+https://github.com/ahpohl/convpot.git#tag=v${pkgver}")
noextract=()
sha256sums=('SKIP')
validpgpkeys=()

prepare() {
	cd "$pkgname-$pkgver"
	cp cmake/CMakeLists.txt.linux CMakeLists.txt
}

build() {
	cd "$pkgname-$pkgver"
	cmake -DCMAKE_INSTALL_PREFIX=/usr .
        make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
