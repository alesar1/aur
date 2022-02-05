# Maintainer: Grant Moyer <grantmoyer@gmail.com>

pkgname=xcursor-box-cursor
pkgver=1.0.0
pkgrel=1
pkgdesc='A minimal cursor theme'
arch=('any')
url="https://gitlab.com/GrantMoyer/$pkgname.git"
license=('MIT')
makedepends=('python' 'xorg-xcursorgen' 'inkscape')
source=("git+https://gitlab.com/GrantMoyer/$pkgname.git#tag=v$pkgver")
sha512sums=('SKIP')

build() {
    cd "$pkgname"
    python build.py
}

package() {
	install -d "$pkgdir/usr/share/icons/$pkgname/"
    cp -r "$pkgname/target/cursors/" "$pkgdir/usr/share/icons/$pkgname/"
}
