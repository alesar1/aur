# Contributor: Hugo Ideler <hugo at hugoideler dot com>
pkgname=jaxx
pkgver=1.2.18
pkgrel=1
epoch=
pkgdesc="Multi-chain cryptocurrency wallet"
arch=('x86_64')
# ^ not tested on other platforms
url="https://jaxx.io/"
license=('unknown')
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
source=("https://jaxx.io/files/$pkgver/Jaxx-v$pkgver-linux-x64.zip" "jaxx.desktop")
noextract=()
md5sums=('f7a7def6aa139b5662d4954296ef6cff'
         '6c5a513df8f5b65af59512dace0f20e7')

validpgpkeys=()

prepare() {
        true
}

build() {
        true
}

check() {
        true
}

package() {
        mkdir -p $pkgdir/opt/$pkgname
        cp -a Jaxx-vv${pkgver}_linux-x64/jaxx-assets/* $pkgdir/opt/$pkgname

        mkdir -p $pkgdir/usr/bin
        ln -s ../../opt/$pkgname/Jaxx $pkgdir/usr/bin/$pkgname

        install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}

# vim: et
