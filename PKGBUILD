# Maintainer: Luca CPZ <luca.cpz [at] gmail [dot] com>

_pkgname=awesome-freedesktop
pkgname=$_pkgname-git
pkgcom=109
pkgsha=b77dee0
pkgver=$pkgcom.$pkgsha
pkgrel=5
pkgdesc="Freedesktop.org compliant desktop entries and menu for Awesome WM"
arch=("any")
url="https://github.com/lcpz/$_pkgname"
license=("GPL2")
depends=("awesome")
provides=("$_pkgname")
conflicts=("$_pkgname")
sha256sums=("SKIP")
source=("$_pkgname-${pkgver}.zip::https://github.com/lcpz/$_pkgname/archive/$pkgsha.zip")

prepare() {
    rm -fr "$_pkgname/$_pkgname-$pkgsha"*
    mv "$_pkgname-$pkgsha"* $_pkgname
}

package() {
    install -dm755 "$pkgdir/usr/share/lua/5.3/${_pkgname##*-}"
    install -m644 $_pkgname/{LICENSE,README.rst,*.lua} "$pkgdir/usr/share/lua/5.3/${_pkgname##*-}"
}
