# Maintainer: Samuel Martin Moro <samuel@peerio.com>
pkgname=peerio-client
pkgver=1.6.0
pkgrel=1
pkgdesc="Peerio Client"
arch=('i686' 'x86_64')
url='https://peerio.com'
license=('GPL3')
depends=('alsa-lib' 'glibc' 'cairo' 'libdbus' 'fontconfig' 'gconf' 'gdk-pixbuf2' 'gtk3' 'libnotify' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxfixes' 'libxi' 'libxrandr' 'libxrender' 'libxss' 'libxtst' 'nspr' 'nss' 'pango')
makedepends=('curl' 'fakeroot' 'git' 'make' 'patch')
options=('!strip')
#source=('http://linux.peerio.com/sources/${pkgname}-${pkgver}.tar.gz')
source=('http://linux.peerio.com/sources/peerio-client-1.6.0.tar.gz')
md5sums=('2268c527a031662864b8de0614f726b8')
build() {
    cd "${srcdir}/${pkgname}"
    curl http://linux.peerio.com/sources/07-build.patch >build.patch
    patch -p0 <build.patch && rm -f build.patch
    make client
}
package() {
    cd "${srcdir}/${pkgname}"
    make install PREFIX="${pkgdir}/usr/share" BINPREFIX="${pkgdir}/usr"
}
