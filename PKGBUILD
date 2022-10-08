# Maintainer: iTrooz_ <itrooz at protonmail dot com>
# Contributor: Morten Linderud <foxboron@archlinux.org>

pkgname=imhex-bin
pkgver=1.24.0
pkgrel=1
pkgdesc="A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when working at 3 AM. "
arch=("x86_64")
url="https://github.com/WerWolv/ImHex"
license=('GPL2')
depends=(glfw mbedtls python freetype2 libglvnd dbus xdg-desktop-portal curl fmt yara nlohmann-json)
makedepends=(git)
provides=(imhex)
conflicts=(imhex)
source=("$url/releases/download/v$pkgver/imhex-$pkgver-ArchLinux.pkg.tar.zst")
md5sums=(5e04b81fbed3a8f73c5dd1f48f722764)

package() {
    install -Dm755 "$srcdir/usr/bin/imhex" "$pkgdir/usr/bin/imhex"
    install -Dm644 "$srcdir/usr/lib/libimhex.so.$pkgver" "$pkgdir/usr/lib/libimhex.so.$pkgver"

    for plugin in "$srcdir/usr/lib/imhex/plugins/"*.hexplug; do
        install -Dm644 "$plugin" "$pkgdir/usr/lib/imhex/plugins/${plugin##*/}"
    done

    install -d "$pkgdir/usr/share/imhex"
    cp -r "$srcdir/usr/share/imhex/"{constants,encodings,includes,magic,patterns} "$pkgdir/usr/share/imhex"
    cp -r "$srcdir/usr/share/"{applications,licenses} "$pkgdir/usr/share"
}
