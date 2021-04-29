# Maintainer: Cole Gerdemann <aur@corvettecole.com>

pkgname=p3x-onenote
pkgver=2021.4.175
pkgrel=1
pkgdesc="Linux Electron Onenote - A Linux compatible version of OneNote"
arch=('any')
url="https://github.com/patrikx3/onenote"
license=('MIT')
depends=('electron')
makedepends=('npm')

source=("https://github.com/patrikx3/onenote/archive/v${pkgver//_/-}.tar.gz"
        "p3x-onenote.sh"
        "p3x-onenote.desktop")

sha256sums=('6696d54da93831064086143c327015f06f145aaba13c9098650195dfb11e7624'
            '97aca184d656b8021ce43d524d9de91f014c838372356844c845a531f8ab2b9f'
            '9bbb2f84f401a4da62ffe7f533aa0b149921f3f88fec7f470c4d4b5fcf63f331')

build() {
    cd "$srcdir/onenote-${pkgver//_/-}"
    npm_config_cache="$srcdir/npm_cache" npm install --production --ignore-scripts --no-shrinkwrap
}

package() {
    mkdir -p "$pkgdir/usr/lib/$pkgname"
    cp -r "$srcdir/onenote-${pkgver//_/-}/"{node_modules,package.json,src} "$pkgdir/usr/lib/$pkgname/"
    install -Dm644 "$srcdir/onenote-${pkgver//_/-}/LICENSE" "$pkgdir/usr/share/licenses/p3x-onenote/LICENSE"
    install -Dm755 "$srcdir/p3x-onenote.sh" "$pkgdir/usr/bin/p3x-onenote"
    install -Dm644 "$srcdir/p3x-onenote.desktop" -t "$pkgdir/usr/share/applications/"
    install -Dm644 "$srcdir/onenote-${pkgver//_/-}/artifacts/onenote-icon-2018/onenote-icon.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg"
    install -Dm644 "$srcdir/onenote-${pkgver//_/-}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
