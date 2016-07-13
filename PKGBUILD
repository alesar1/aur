# Maintainer:  eadrom <eadrom@archlinux.info>
# Contributor:  Martin Wimpress <code@flexion.org>

_ver=1.15
_pkgbase=mate-polkit
pkgname="${_pkgbase}-1.15-gtk3"
pkgver=${_ver}.0
pkgrel=1
pkgdesc="PolicyKit integration for the MATE desktop"
url="http://mate-desktop.org"
arch=('i686' 'x86_64')
provides=("${_pkgbase}" "${_pkgbase}-gtk3")
conflicts=("${_pkgbase}-gtk3")
license=('LGPL')
depends=('gtk3' 'polkit' 'accountsservice')
makedepends=('gobject-introspection' 'mate-common>=1.15')
source=("http://pub.mate-desktop.org/releases/${_ver}/${pkgname}-${pkgver}.tar.xz")
sha1sums=('f70a0efc5c484f265eea08f2a8315b2cfc4cb99f')

prepare() {
    cd "${srcdir}"
    mv "${pkgname}-${pkgver}" "${_pkgbase}-gtk3"
}

build() {
    cd "${srcdir}/${_pkgbase}-gtk3"
    ./configure \
        --prefix=/usr \
        --libexecdir=/usr/lib/${_pkgbase} \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --with-gtk=3.0 \
        --enable-introspection \
        --disable-static
    make
}

package() {
    pkgdesc+=' (GTK3 version [EXPERIMENTAL])'
    groups=('mate')
    cd "${srcdir}/${_pkgbase}-gtk3"
    make DESTDIR="${pkgdir}" install
}
