# Maintainer: Your Name <nguyenhongky1998@gmail.com>
pkgname=stm32pio
pkgver=1.0
pkgrel=1
#epoch=
pkgdesc="Automate managing STM32CubeMX + PlatformIO projects" 
arch=('x86_64')
url="https://github.com/kynguyen98/stm32pio"
license=('MIT')
#groups=()
depends=(python-pip python jre8-openjdk)
makedepends=(git python-pip)
#checkdepends=()
optdepends=('code: for text editing')
#provides=(stm32pio)
#conflicts=()
#replaces=()
#backup=()
#options=()
#install=
#changelog=
source=($url"/archive/v${pkgver}.tar.gz")
#("$pkgname-$pkgver.tar.gz""$pkgname-$pkgver.patch")
#noextract=()
md5sums=('SKIP')
#validpgpkeys=()

#prepare() {
#	cd "$pkgname-$pkgver"
#	patch -p1 -i "$srcdir/$pkgname-$pkgver.patch"
#}

#build() {
#	cd "$pkgname-$pkgver"
#	./configure --prefix=/usr
#	make
#}

#check() {
#	cd "$pkgname-$pkgver"
#	make -k check
#}

package() {
	cd "$srcdir/$pkgname-$pkgver"
#    cd src/stm32pio-1.0
#	make DESTDIR="$srcdir/$pkgname-$pkgver" install
	make install
#    make install --root="$pkgdir/" --optimize=1
}
