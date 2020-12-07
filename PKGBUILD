# Maintainer: Mark Wagie <mark.wagie at tutanota dot com>
pkgname=sticky-git
pkgver=0.0.1.r63.6af87f9
pkgrel=1
pkgdesc="A sticky notes app for the Linux desktop"
arch=('x86_64')
url="https://github.com/collinss/sticky"
license=('GPL')
depends=('gtk3' 'xapp' 'gspell' 'python-gobject' 'python-xapp')
makedepends=('git')
optdepends=('libappindicator-gtk3: for tray icon'
            'gnote: Import notes from Gnote'
            'aspell: spell checking'
            'nuspell: spell checking'
            'hspell: spell checking'
            'libvoikko: spell checking for Finnish lanuage')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/collinss/sticky.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s.r%s.%s" "$(head -n 1 debian/changelog | cut -d'(' -f 2 | cut -d')' -f 1 | \
		sed 's/-/./')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	cp -r etc usr "$pkgdir"
	chmod +x "$pkgdir/usr/bin/${pkgname%-git}"
}
