# Maintainer: Deon Spengler <deon at spengler dot co dot za>
# Contributor:  DJ Lucas <dj_AT_linuxfromscratch_DOT_org>
# Contributor: Steven Hiscocks <steven [at] hiscocks [dot] me [dot] uk>
# Contributor: Andre Wayand <aur-sope@awayand.sleepmail.com>
pkgname=sope
pkgdesc="application server used by SOGo"
pkgver=5.0.1
pkgrel=1
arch=('x86_64')
url="http://www.sogo.nu/files/downloads/SOGo/Sources/"
license=('GPL')
options=('!strip')
replaces=('sope2')
depends=('gnustep-base')
makedepends=('gcc-objc'
             'gnustep-make'
             'libxml2'
             'libmariadbclient'
             'libldap'
             'openssl'
             'postgresql-libs')
optdepends=('libxml2: parse XML coniguration files'
            'mariadb: run database server for sogo locally'
            'openldap: run directory server for sogo locally'
            'openssl: create SSL secured connectons'
            'postgresql: run database server for sogo locally')
source=("http://www.sogo.nu/files/downloads/SOGo/Sources/SOPE-${pkgver}.tar.gz"
        "sope_configure.patch")
sha256sums=('07f3158719b5f5da0f742238cac6d4adda2ce9e6bf1631b9c710a3a2a865a00b'
            '7ff3387daffd15b5f97146da1fd61aefc9591b7b6a41f1f0e60b572106fdbc9a')

prepare() {
  cd "${srcdir}/SOPE"
  patch configure ../sope_configure.patch
}

build() {
  cd "${srcdir}/SOPE"
  ./configure --with-gnustep --disable-strip --disable-debug
  make
}

package() {
  cd "${srcdir}/SOPE"
  make install DESTDIR="${pkgdir}"
}
