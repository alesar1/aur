# Maintainer: Roman Vasilev <2rvasilev@live.ru>

pkgname=zoomdl
pkgver=2021.07.28
pkgrel=2
epoch=
pkgdesc="Download Zoom recorded meetings easily"
arch=('any')
url="https://github.com/Battleman/zoomdl"
license=('GPL')
groups=()
depends=('python')
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
source=("$pkgname-$pkgver::$url/releases/download/$pkgver/$pkgname")
noextract=()
md5sums=('2d3da1cf85373112620fec6be8da5236')
validpgpkeys=()

package() {
    chmod +x "$pkgname-$pkgver"
    install -D "$pkgname-$pkgver" "$pkgdir/usr/bin/$pkgname"
}

