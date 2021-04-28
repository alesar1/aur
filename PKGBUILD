# Maintainer: MelianMiko <mikigaru@zohomail.com>
pkgname=mibandpreview-git
pkgver=0.7
pkgrel=1
pkgdesc="Simple preview tool for Mi Band 4-6 watchfaces"
arch=(any)
url="https://melianmiko.ru/mibandpreview"
license=('Apache')
depends=(python-certifi python-pillow python python-pyqt5)
makedepends=(make qt5-tools)
source=("$pkgname-$pkgver::git+https://gitlab.com/melianmiko/mibandpreview.git#branch=v0.7")
md5sums=('SKIP')

build() {
	cd "$pkgname-$pkgver"
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
