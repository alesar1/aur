# Contributor: Andrew Mellor

pkgname=vstream-client
pkgver=1.2.1.1
pkgrel=1
pkgdesc="A fork off of the vstream library from the tivo-mplayer project."
arch=('i686' 'x86_64')
license=('GPL')
url="http://vstream-client.googlecode.com"
depends=('glibc')
makedepends=()
source=("http://vstream-client.googlecode.com/files/vstream-client-1.2.1.1.tar.bz2")
md5sums=('4f2fc3e5835592f5d8c230aaacd6a7b6')

build() {
    cd ${srcdir}/vstream-client-${pkgver}
    ./configure --prefix=${pkgdir}/usr
    make vstream-client
}

package() {
    cd ${srcdir}/vstream-client-${pkgver}
    make INSTALL='install -D' install
}
