# Maintainer: Martin Weinelt <martin@darmstadt.freifunk.net>

# things can get a little crashy at times, so better have debug symbols handy
# OPTIONS+=(debug !strip)

pkgname=tinc-pre-git
pkgver=1.1pre11.144.g45a46f0
pkgrel=1
pkgdesc="Virtual Private Network daemon (prerelease)"
arch=('any')
url="http://www.tinc-vpn.org/"
license=('GPL')
depends=('lzo2' 'zlib' 'openssl')
optdepends=('wxpython: gui support')
provides=('tinc-pre')
conflicts=('tinc' 'tinc-pre' 'tinc-pre-systemd')
source=('git+https://github.com/gsliepen/tinc#branch=1.1'
        'tinc@.service')
_gitname=tinc

pkgver() {
    cd "$_gitname"
    git describe --tags | sed 's/-/./g' | cut -d'.' -f2-
}

build() {
    cd "$_gitname"
    autoreconf -fsi
    ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --sbindir=/usr/bin
    make
}

package() {
    cd "$_gitname"
    make DESTDIR="$pkgdir" install

    install -D -d doc/sample-config "$pkgdir/etc/tinc/"

    sed 's,#!/usr/bin/env python,#!/usr/bin/env python2,' $pkgdir/usr/bin/tinc-gui > $pkgdir/usr/bin/tinc-gui2
    install -D -m755 "$pkgdir/usr/bin/tinc-gui2" "$pkgdir/usr/bin/tinc-gui"

    install -D -m644 "$srcdir/tinc@.service" "$pkgdir/usr/lib/systemd/system/tinc@.service"
}

md5sums=('SKIP'
         '8029b9d35e0abe980d4677c41647f395')
