# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname=kh-webstore
pkgver=0.0.2
pkgrel=1
epoch=
pkgdesc=""
arch=(x86_64)
url=""
license=('Apache')
groups=()
depends=()
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
source=("https://github.com/CentRa-Linux/kh-webstore/releases/download/release/kh-webstore-0.0.2.tar.gz")
noextract=()
md5sums=("2ea95fd42083f7abadff85e08088513f")
validpgpkeys=()

sudo chmod -R 777 ~/.cache/yay/kh-webstore/pkg

prepare() {
    rm -rf "/usr/share/kh-webstore"
    rm -rf "/usr/share/applications/kh-webstore.desktop"
}

build() {
	cp -rf "$pkgname-$pkgver" "/usr/share/kh-webstore"
    cd "$pkgname-$pkgver"
    cp -rf "kh-webstore.desktop" "/usr/share/applications/kh-webstore.desktop"
}

package() {
    rm /usr/share/applications/kh-webstore.desktop
    mkdir $pkgdir/usr
    mkdir $pkgdir/usr/share
    mkdir $pkgdir/usr/share/applications
    cp -rf "$pkgname-$pkgver" "$pkgdir/usr/share/kh-webstore"
    cd "$pkgname-$pkgver"
    cp -rf "kh-webstore.desktop" "$pkgdir/usr/share/applications/kh-webstore.desktop"
}
