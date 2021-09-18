# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
# Maintainer: ValHue <vhuelamo at gmail dot com>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Daniel Isenmann <daniel@archlinux.org>
pkgname="python2-gimp"
_pkgname="gimp"
pkgver="2.10.28"
pkgrel="1"
pkgdesc='Python 2 plugins support for GIMP'
url='https://www.gimp.org/'
arch=('x86_64')
license=('LGPL')
depends=('gimp' 'pygtk')
makedepends=('gtk-doc' 'intltool' 'autoconf')
source=("https://download.gimp.org/pub/gimp/v${pkgver%.*}/${_pkgname}-${pkgver}.tar.bz2")
sha512sums=('587f6f46741672f0700fd642a5b779694d2d8bc8ad70e7677ccdbfc2266dc62203ed347d6aaffaa4b8e7d84a84a25f7d5a51507dfd64b21b4c05970856d3ab94')


prepare() {
    cd ${_pkgname}-${pkgver}
    sed -i 's/^libgimpui = .*/ libgimpui = -lgimpui-2.0/
            s/^libgimpconfig = .*/ libgimpconfig = -lgimpconfig-2.0/
            s/^libgimpwidgets = .*/ libgimpwidgets = -lgimpwidgets-2.0/
            s/^libgimp = .*/ libgimp = -lgimp-2.0/
            s/^libgimpcolor = .*/ libgimpcolor = -lgimpcolor-2.0/
            s/^libgimpbase = .*/ libgimpbase = -lgimpbase-2.0/
            s/^libgimpmath = .*/ libgimpmath = -lgimpmath-2.0/
            s/^libgimpthumb = .*/ libgimpthumb = -lgimpthumb-2.0/' plug-ins/pygimp/Makefile.am
    autoreconf -fi
}

build() {
    cd ${_pkgname}-${pkgver}
    PYTHON=/usr/bin/python2 ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --libexecdir=/usr/bin \
        --enable-python \
        --without-aa

    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
    make -C plug-ins/pygimp
}

package() {
    cd ${_pkgname}-${pkgver}
    make -C plug-ins/pygimp DESTDIR="${pkgdir}" install
}
