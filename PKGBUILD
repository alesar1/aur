# Maintainer: Roman Vasilev <2rvasilev@live.ru>

pkgname=zoomdl
pkgver=2021.01.01
pkgrel=1
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
source=("https://github.com/Battleman/zoomdl/releases/download/v$pkgver/$pkgname")
noextract=()
md5sums=('2dc8a4e4035674c97e742350efa7fe61')
validpgpkeys=()

package() {
    chmod +x $pkgname
    install -D $pkgname "$pkgdir/usr/bin/$pkgname"
}

