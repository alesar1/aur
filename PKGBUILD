# Maintainer: Majid Butler <majidbutler@akuma-dev.com>
pkgname=creeptifica
pkgver=2.8
pkgrel=1
pkgdesc="A 4px wide terminal font for nerds."
arch=('any')
url="https://github.com/akuma-dev/creeptifica"
license=('MIT')
source=("git+https://github.com/akuma-dev/creeptifica.git")
makedepends=('git')
md5sums=('SKIP')

package() {
	cd "$srcdir/creeptifica"
    install -D -m644 creeptifica.ttf "$pkgdir/usr/share/fonts/misc/creeptifica.ttf"
	install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
