# Maintainer: gbr <gbr@protonmail.com>
_pkgname='xfce4-xkb-plugin'
pkgname='xfce4-xkb-plugin-git'
pkgver='0.7.0.r95.gcace06d'
pkgrel=1
pkgdesc='Plugin to switch keyboard layouts for the Xfce4 panel'
arch=('i686' 'x86_64')
url='http://goodies.xfce.org/projects/panel-plugins/xfce4-xkb-plugin'
license=('custom')
depends=('xfce4-panel' 'libxklavier' 'librsvg')
makedepends=('intltool')
conflicts=('xfce4-xkb-plugin')
source=("$pkgname::git://git.xfce.org/panel-plugins/xfce4-xkb-plugin")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"

    git describe --long | sed -r "s/^$_pkgname-//;s/([^-]*-g)/r\1/;s/-/./g"
}

build() {
    cd "$srcdir/$pkgname"

    ./autogen.sh \
        --prefix=/usr \
        --sysconfdir=/etc \
        --libexecdir=/usr/lib \
        --localstatedir=/var \
        --disable-static \
        --disable-debug
    make
}

package() {
    cd "$srcdir/$pkgname"

    make DESTDIR="$pkgdir" install

    install -Dm644 COPYING "$pkgdir/usr/share/licenses/$_pkgname/COPYING"
}
# vim:set ts=4 sw=4 et:
