# Maintainer: Firegore <admin@firegore.com>
pkgname=bloonix-plugins-linux
#_pkgname=
provides=('bloonix-plugins-linux')
pkgver=0.53
pkgrel=1
pkgdesc='Bloonix Plugins Linux'
arch=('i686' 'x86_64')
url='https://bloonix.org'
license=('GPLv3')
options=('!emptydirs')

depends=('bloonix-core')
source=(https://download.bloonix.de/sources/$pkgname-$pkgver.tar.gz)

build() {
    cd "$srcdir"/$pkgname-$pkgver
    #perl Configure.PL
    perl Configure.PL --prefix /usr --without-perl --ssl-ca-path /etc/ssl/certs --build-package
    make
}

package() {
	cd "$srcdir"/$pkgname-$pkgver
    make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
md5sums=('93107c29c354e89eec16c64b2de048e2')
sha1sums=('ac12d047d754f2856fa4a3ae529b56d9f454f2cd')
