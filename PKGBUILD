# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

_name=talloc
pkgname=lib32-${_name}
pkgver=2.1.13
pkgrel=1
pkgdesc='A hierarchical pool based memory allocator with destructors'
arch=('x86_64')
url='http://talloc.samba.org/'
license=('GPL3')
source=("https://samba.org/ftp/${_name}/${_name}-${pkgver}.tar.gz")
depends=('lib32-glibc' 'talloc')
makedepends=('lib32-python2' 'python2')
sha256sums=('84f399dbf0ad97006a2b4953ea99452d033faac15aabfddd4ba61734764c6047')

prepare() {
  cd ${_name}-${pkgver}
  sed -i -e "s|/usr/bin/env python$|/usr/bin/env python2|" buildtools/bin/waf
}

build() {
  cd ${_name}-${pkgver}

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  export PYTHON='/usr/bin/python2-32'
  export PYTHON_CONFIG='/usr/bin/python2-32-config'

  ./configure --prefix=/usr \
     --libdir='/usr/lib32' \
     --sysconfdir=/etc/samba \
     --localstatedir=/var \
     --bundled-libraries=NONE \
     --builtin-libraries=replace \
     --enable-talloc-compat1

  make
}

package() {
  cd ${_name}-${pkgver}
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{include,share}
}
