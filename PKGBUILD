# Maintainer: abdellatif-dev <abdellatif.devlog@gmail.com>
pkgname=dmenu-abdellatif
pkgver=0.6
pkgrel=0
pkgdesc="my dmenu build"
arch=(x86_64)
url="https://github.com/abdellatif-dev/dmenu-abdellatif-dev.git"
license=('MIT')
depends=(dash sh glibc coreutils libx11 libxinerama libxft freetype2 fontconfig libfontconfig.so)
makedepends=(git make)
optdepends=(st)
provides=(dmenu)
conflicts=(dmenu)
replaces=()
install=
changelog=
source=("git+$url")
md5sums=('SKIP')

package() {
	cd dmenu-abdellatif-dev 
    make DESTDIR="$pkgdir/" clean install
}
