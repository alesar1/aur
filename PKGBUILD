# Maintainer: robertfoster
# Contributor: <kfgz at interia dot pl>

pkgname=nwipe
pkgver=0.32
pkgrel=1
pkgdesc="A fork of the dwipe command that will securely erase disks using a variety of recognised methods"
arch=('i686' 'x86_64')
url="http://www.andybev.com/index.php/Nwipe"
depends=('device-mapper' 'ncurses' 'parted')
optdepends=('dmidecode' 'smartmontools')
license=('GPL2')
source=("https://github.com/martijnvanbrummelen/nwipe/archive/v${pkgver}.tar.gz")

build() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}

sha256sums=('40b7a3833d60a28834ccc190174c97a28141fdd43d93652ae93bb4928f567a5c')
