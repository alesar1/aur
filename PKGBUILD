# Maintainer: Fabian Maurer <dark.shadow4@web.de>
# Contributor: Rafael Fontenelle <rafaelff@gnome.org>

_name=ldb
pkgname=lib32-$_name
pkgver=2.1.2
pkgrel=3
pkgdesc="A schema-less, ldap like, API and database"
arch=('x86_64')
url="https://ldb.samba.org/"
license=('GPL3')
depends=('lib32-talloc' 'lib32-tevent' 'lib32-tdb-temp>=1.4.3' 'lib32-popt' 'lib32-libbsd' 'ldb' 'python')
makedepends=('lib32-cmocka')
source=(https://samba.org/ftp/${_name}/${_name}-${pkgver}.tar.gz)
md5sums=('17d1d6238a6846a593776e71d0d1df03')

build() {
  cd ${_name}-${pkgver}

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  ./configure --prefix=/usr \
    --disable-rpath \
    --disable-rpath-install \
    --bundled-libraries=NONE \
    --builtin-libraries=replace \
    --libdir=/usr/lib32 \
    --with-modulesdir=/usr/lib32/ldb/modules \
    --with-privatelibdir=/usr/lib32/ldb \
    --disable-python
  
  make
}

package() {
  cd "${_name}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{bin,include,share}
}
