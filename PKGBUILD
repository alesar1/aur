# Maintainer: robertfoster
# Contributor: <kfgz at interia dot pl>

pkgname=nwipe
pkgver=0.27
pkgrel=1
pkgdesc="A fork of the dwipe command that will securely erase disks using a variety of recognised methods"
arch=('i686' 'x86_64')
url="http://www.andybev.com/index.php/Nwipe"
depends=('device-mapper' 'ncurses' 'parted')
license=('GPL2')
source=("https://github.com/martijnvanbrummelen/nwipe/archive/v${pkgver}.tar.gz")

build() {
	cd "${srcdir}"/${pkgname}-${pkgver}
	./init.sh
	./configure --prefix=/usr
	make
}

package() {
	cd "${srcdir}"/${pkgname}-${pkgver}
	make DESTDIR="${pkgdir}" install
}

md5sums=('c6eb5aa9487e8f513a418500c08a8960')
