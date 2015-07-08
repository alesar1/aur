# Maintainer : Martin Wimpress <code@flexion.org>

pkgname=caja-dropbox
pkgver=1.8.0
pkgrel=2
pkgdesc="Dropbox for Linux - Caja extension"
url="http://forums.dropbox.com/topic.php?id=21111"
arch=('i686' 'x86_64')
license=('custom:CC-BY-ND-3' 'GPL')
depends=('caja' 'glib2' 'libnotify' 'polkit' 'procps' 'pygtk' 'xdg-utils')
makedepends=('mate-common' 'python2-docutils')
optdepends=('dropbox: Dropbox support')
options=('!emptydirs')
source=("http://pub.mate-desktop.org/releases/1.8/${pkgname}-${pkgver}.tar.xz")
sha1sums=('616ef634f2a5ba479dd2402d8527fcd5cf9950b0')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    autoreconf -fi
    sed -i "s/python/python2/" configure.ac configure caja-dropbox.in Makefile.am Makefile.in rst2man.py
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./configure \
        --prefix=/usr \
        --disable-static
    make
}

package() {
    cd "${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
    # Remove the cruft
    #rm -f "${pkgdir}/usr/bin/dropbox"
    #rm -rf "${pkgdir}/usr/share/applications"
    #rm -rf "${pkgdir}/usr/share/icons"*
    #rm -rf "${pkgdir}/usr/share/man/"*
}
