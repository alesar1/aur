# Maintainer: Andrew Sun <adsun701@gmail.com>

pkgname=lib32-libnftnl
_pkgbasename=libnftnl
pkgver=1.1.1
pkgrel=1
pkgdesc='Netfilter library providing interface to the nf_tables subsystem'
arch=('x86_64')
url='https://netfilter.org/projects/libnftnl/'
license=('GPL2')
depends=('lib32-libmnl' 'libnftnl')
validpgpkeys=('C09DB2063F1D7034BA6152ADAB4655A126D292E4') # Netfilter Core Team
# 2016-11-03: https sources download is broken with curl
source=("http://netfilter.org/projects/libnftnl/files/libnftnl-${pkgver}.tar.bz2"{,.sig})
sha1sums=('d2be642a54e0f105cb5564471ae4aaaed8b97ca6'
          'SKIP')

prepare() {
  cd "${srcdir}/${_pkgbasename}-${pkgver}"
  autoreconf -fiv
}

build() {
  cd "${srcdir}/${_pkgbasename}-${pkgver}"
  
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  export LDFLAGS+=' -m32'
  
  ./configure \
    --prefix=/usr \
    --libdir=/usr/lib32
  make
}

package() {
  cd "${srcdir}/${_pkgbasename}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{bin,include,share}
}
