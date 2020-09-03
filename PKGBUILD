# Maintainer: Mark Wagie <mark.wagie at tutanota dot com
# Contributor: Brian Bidulock <bidulock@openss7.org>
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: Andriy Kovtun <kovtunos@yandex.ru>
# Contributor: sausageandeggs <sausageandeggs@archlinux.us>
pkgname=x-tile
pkgver=3.2
pkgrel=1
pkgdesc="Allows you to select a number of windows and tile them in different ways"
arch=('any')
url="https://www.giuspen.com/x-tile"
license=('GPL2')
depends=('gtk3' 'python-gobject')
optdepends=('libappindicator-gtk3: Tray icon support')
source=("http://www.giuspen.com/software/$pkgname-$pkgver.tar.xz")
sha256sums=('e930c7ee9c96c712f65784335c2f78edad72546e5eec7d8074e36407867610da')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --prefix=/usr --exec-prefix=/usr -f \
		--root="$pkgdir/" --optimize=1
}
