# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: CarsonGraham <carson42g@gmail.com>
pkgname=gumbocoin
pkgver=0.1.5
pkgrel=1
epoch=
pkgdesc="The cli client"
arch=('any')
url="gumbocoin.com"
license=('GPL')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=($pkgname-$pkgver.tar.gz::https://github.com/gumbocoin/Gumbocoin/archive/v$pkgver.tar.gz)
noextract=()
validpgpkeys=()

prepare() {
        ls -la
        pwd
	tar xzf $pkgname-$pkgver.tar.gz
}

build() {
        cd "Gumbocoin-$pkgver"
	./gradlew shadowJar
}

package() {
	cd "Gumbocoin-$pkgver"
        echo "pkgdir:$pkgdir"
        mkdir "$pkgdir/usr"
	mkdir "$pkgdir/usr/bin"
        install "./bin/gumbocoin" "$pkgdir/usr/bin/gumbocoin"
        mkdir "$pkgdir/opt"
	mkdir "$pkgdir/opt/gumbocoin"
	install "./cli/build/libs/cli-1.0-all.jar" "$pkgdir/opt/gumbocoin/gumbocoin.jar"
}
md5sums=('e2107c655e9b67c4dedb0e1c1fab30d4')
