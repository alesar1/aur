# Maintainer: NicKoehler <grillinicolavocal at gmail dot com>
# Contributor: Eric Brandwein <brandweineric at gmail dot com>
# Contributor: 01189998819991197253 <dev.ben01189998819991197253+aur@gmail.com>

pkgname=clonehero
pkgver=1.0.0.4080
pkgrel=1
pkgdesc="Clone of Guitar Hero and Rockband-style games"
arch=('x86_64')
url="https://clonehero.net/"
license=('freeware-proprietary')
install="$pkgname.install"
depends=('gtk2')
source=("${pkgname}-${pkgver}.tar.gz"::"https://pubdl.clonehero.net/clonehero-v$pkgver-final/clonehero-linux.tar.xz"
        "$pkgname.install"
        "$pkgname.desktop")
sha1sums=('135788e5e99aef454252c0bae8fa88daca338a63'
          'SKIP'
          'SKIP')
sha256sums=('SKIP'
            '01125237ef90f8435523fed5ae09246a76eb562408c50e76597964b5675385cf'
            'a97d85930ac4844b3c5e90d4da8faa7a9b5267909d45be59b1fa39abc76df5fe')

package() {
    mkdir -p "$pkgdir/usr/bin"
    install -dm755 "$pkgdir/opt/"
    cp -r "$srcdir/$pkgname-linux" "$pkgdir/opt/$pkgname"

    find "$pkgdir/opt/$pkgname" -type d -exec chmod 755 {} +
    find "$pkgdir/opt/$pkgname" -type f -exec chmod 644 {} +
    chmod +x "$pkgdir/opt/$pkgname/$pkgname"
    ln -s -f "$pkgdir/opt/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"

    # Install script, .desktop launcher with icon
    install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm644 "$srcdir/$pkgname-linux/clonehero_Data/Resources/UnityPlayer.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
}

