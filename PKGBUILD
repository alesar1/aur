# Maintainer: OpenSorcerer <alex at opensourcery dot eu>
pkgname=airvpn-suite-beta-bin
_pkgname=AirVPN-Suite
pkgver=1.1.0
_rc=RC4
_pkgver=1.1
pkgrel=2
pkgdesc="AirVPN client software collection including Bluetit, Goldcrest and Hummingbird – prebuilt beta"
arch=('x86_64' 'i686' 'armv7l' 'aarch64')
url="https://gitlab.com/AirVPN/$_pkgname"
license=('GPL3')
provides=('hummingbird' 'airvpn-suite')
conflicts=('hummingbird' 'airvpn-suite')
depends=('dbus' 'openssl' 'libxml2' 'xz' 'lz4')
makedepends=('curl')
source=("https://eddie.website/repository/$_pkgname/$_pkgver-$_rc/$_pkgname-$arch-$pkgver-$_rc.tar.gz")
sha512sums=(`curl -sLo - https://eddie.website/repository/$_pkgname/$_pkgver-$_rc/$_pkgname-$arch-$pkgver-$_rc.tar.gz.sha512|cut -f1 -d " "`)
install="$pkgname.install"
changelog="Changelog-Suite.txt"

package() {
    cd $srcdir/$_pkgname
    
    # place binaries
    install -Dm755 bin/bluetit "$pkgdir/usr/bin/bluetit"
    install -Dm755 bin/goldcrest "$pkgdir/usr/bin/goldcrest"
    install -Dm755 bin/hummingbird "$pkgdir/usr/bin/hummingbird"

    # place documentation
    install -Dm755 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
    
    # place license
    install -Dm755 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"

    # place configuration
    for file in etc/airvpn/*; do
        install -Dm600 "$file" "$pkgdir/etc/airvpn/$file"
    done

    # place D-Bus config
    install -Dm644 etc/dbus-1/system.d/org.airvpn.client.conf "$pkgdir/etc/dbus-1/system.d/org.airvpn.client.conf"
    install -Dm644 etc/dbus-1/system.d/org.airvpn.server.conf "$pkgdir/etc/dbus-1/system.d/org.airvpn.server.conf"

    # place Systemd service
    install -Dm644 etc/systemd/system/bluetit.service "$pkgdir/etc/systemd/system/bluetit.service"
}
