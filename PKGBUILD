# Maintainer: Rocka <i at Rocka dot me>

pkgname=p3x-onenote
pkgver=2019.4.122
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

md5sums=('cf712f2b343724e3559b17bf94e83f1c'
         'ef34fda1179a804e31b9684788e2ed25'
         'ff11d699c2aeac0caebf1a9d8533e664')

build() {
    cd "$srcdir/onenote-${pkgver//_/-}"
    npm_config_cache="$srcdir/npm_cache" npm install --production --ignore-scripts --no-shrinkwrap
}

package() {
    mkdir -p "$pkgdir/usr/lib"
    cp -r "$srcdir/onenote-${pkgver//_/-}" "$pkgdir/usr/lib/$pkgname"

    install -Dm755 "$srcdir/p3x-onenote.sh" "$pkgdir/usr/bin/p3x-onenote"
    install -Dm644 "$srcdir/p3x-onenote.desktop" -t "$pkgdir/usr/share/applications/"
    install -Dm644 "$srcdir/onenote-${pkgver//_/-}/artifacts/onenote-icon-2018/onenote-icon.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg"
    install -Dm644 "$srcdir/onenote-${pkgver//_/-}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
