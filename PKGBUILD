# Contributor: TuxSpirit <tuxspirit AT archlinux DOT fr>
# Maintainer: Skydrome <skydrome@i2pmail.org>

pkgname=rar-beta
pkgver=5.3.0
pkgrel=1
pkgdesc="A command-line port of the rar compression utility Beta Version"
url="http://www.rarlab.com/rarnew.htm"
arch=('i686' 'x86_64')
license=('custom')
backup=('etc/rarfiles.lst')
conflicts=('rar' 'unrar')
provides=('rar' 'unrar')

source=('rar.1'
        'unrar.1')
md5sums=('4cffd2771bb4a51e4a68500d799550d8'
         '594b777453751ee331ef241160f31499')

source_i686+=("http://www.rarlab.com/rar/rarlinux-${pkgver}.tar.gz")
source_x86_64+=("http://www.rarlab.com/rar/rarlinux-x64-${pkgver}.tar.gz")
# the checksums of the source from rarlab.com are changing
# almost every day so this will never be correct
md5sums_i686=('SKIP') ; md5sums_x86_64=('SKIP')

package() {
    cd "$srcdir/rar"
    install -Dm755 rar          "${pkgdir}/usr/bin/rar"
    install -Dm755 unrar        "${pkgdir}/usr/bin/unrar"
    install -Dm755 rar_static   "${pkgdir}/usr/bin/rar_static"
    install -Dm755 default.sfx  "${pkgdir}/usr/lib/default.sfx"
    install -Dm644 license.txt  "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 ../rar.1     "${pkgdir}/usr/share/man/man1/rar.1"
    install -Dm644 ../unrar.1   "${pkgdir}/usr/share/man/man1/unrar.1"
    install -Dm644 rarfiles.lst "${pkgdir}/etc/rarfiles.lst"
}
