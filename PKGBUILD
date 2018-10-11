# Maintainer: Deon Spengler <deon at spengler dot co dot za>
# Contributor:  DJ Lucas <dj_AT_linuxfromscratch_DOT_org>
# Contributor: Steven Hiscocks <steven [at] hiscocks [dot] me [dot] uk>
# Contributor: Andre Wayand <aur-sope@awayand.sleepmail.com>
pkgname=sope
pkgdesc="application server used by SOGo"
pkgver=4.0.2
pkgrel=2
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
        "sope_configure.patch"
        "sope-bugfix_4566.patch")
sha256sums=('19ebeb0854f63003cd1c99e271e9f8b7476a2c7f666027d46a2e12b6abc94738'
            '7ff3387daffd15b5f97146da1fd61aefc9591b7b6a41f1f0e60b572106fdbc9a'
            'f46e873f4def6aec07d6ac3bf6ee817f4cd9873928623a731ce98da86aaa3108')

prepare() {
  cd "${srcdir}/SOPE"
  patch configure ../sope_configure.patch
  patch -Np1 -i ../sope-bugfix_4566.patch
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
