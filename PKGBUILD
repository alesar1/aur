# Maintainer: Sergey Kasmy <SleeplessSloth79 [at] gmail [dot] com>
pkgname=jump-bin
_pkgname=jump
pkgver=0.40.0
pkgrel=1
pkgdesc="Navigate faster by learning your habits"
arch=('x86_64')
url="https://github.com/gsamokovarov/$_pkgname"
license=('MIT')
provides=("$_pkgname")
install=$_pkgname.install
source=("$pkgname-$pkgver.deb::$url/releases/download/v$pkgver/${_pkgname}_${pkgver}_amd64.deb")
md5sums=('014aea9c5a47c67d8be68803b42af255')
noextract=("$pkgname-$pkgver.deb")

prepare() {
	ar p "$pkgname-$pkgver.deb" "data.tar.bz2" | tar -xj
}

package() {
	install -Dm755 "usr/bin/jump" "$pkgdir/usr/bin/jump"
	install -Dm644 "usr/share/man/man1/j.1" "$pkgdir/usr/man/man1/j.1"
	install -Dm644 "usr/share/man/man1/jump.1" "$pkgdir/usr/man/man1/jump.1"
}
