# Maintainer: Hexchain Tong <i at hexchain dot org>

pkgname=tinc-pre
pkgver=1.1pre11
pkgrel=5
pkgdesc="VPN (Virtual Private Network) daemon (Pre-release)"
arch=(i686 x86_64)
url="http://www.tinc-vpn.org/"
license=('GPL')
depends=('lzo2' 'openssl')
makedepends=('git' 'autoconf')
optdepends=('python2' 'wxpython: gui support')
provides=('tinc-pre' 'tinc-pre-systemd')
conflicts=('tinc' 'tinc-pre-systemd')
install="${pkgname}.install"
source=("git+https://github.com/gsliepen/tinc.git#tag=release-$pkgver" "tincd.service" "tincd@.service")
#sha256sums=('942594563d3aef926a2d04e9ece90c16daf1c700e99e3b91ff749e8377fbf757')
sha256sums=('SKIP'
            '44959a62e7738d5febc7705165b0eb9e4265f9d2680e408c22d31c14cfe06410'
            '98bd9941313822b30f66caeb6df9bbe225ed0a8eeed217a3a7eb1de72d9fa704')

build() {
    cd "$srcdir/tinc"

    autoreconf -i
    ./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --localstatedir=/var
    make
}

package() {
    cd "$srcdir/tinc"
    make DESTDIR="$pkgdir" install

    mkdir -p "$pkgdir/etc/tinc/"
    mkdir -p "$pkgdir/usr/share/doc/tinc-pre/"
    cp -rv "$srcdir/tinc/doc/sample-config/" "$pkgdir/usr/share/doc/tinc-pre/"
    install -Dm644 "$srcdir/tincd.service" -t "$pkgdir/usr/lib/systemd/system"
    install -Dm644 "$srcdir/tincd@.service" -t "$pkgdir/usr/lib/systemd/system"

    sed -i 's,#!/usr/bin/env python,#!/usr/bin/env python2,' "$pkgdir/usr/bin/tinc-gui"
}
