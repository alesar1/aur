# $Id$
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: Marti Raudsepp <marti@juffo.org>
# Contributor: Radu Andries <admiral0@tuxfamily.org>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>
# Mantainer: Lorenzo Ferrillo <lorenzofer at live dot it>
_pkgname=zbar
pkgname=lib32-zbar
pkgver=0.23.1
pkgrel=2
pkgdesc="Application and library for reading bar codes from various sources. 32bit libraries only version"
arch=('x86_64')
url="https://github.com/procxx/zbar"
license=('LGPL')
depends=('zbar' 'lib32-v4l-utils' 'lib32-dbus' 'lib32-libsm' 'lib32-libxv')
makedepends=('docbook-xsl' 'xmlto')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/mchehab/zbar/archive/$pkgver.tar.gz", "configure.patch")
sha256sums=('297439f8859089d2248f55ab95b2a90bba35687975365385c87364c77fdb19f3' '4b6bd83d5923aed8ac34ff088340a65514bcff0a345dc6acd08e348e72744702')
prepare() {
  cd zbar-$pkgver
  patch -i ${srcdir}/configure.patch configure.ac
  autoreconf -vfi
}

build() {
  cd zbar-$pkgver
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  #export PYTHON='/usr/bin/python2-32'
  #export PYTHON_CONFIG='/usr/bin/python2-32-config'

  #PKG_CONFIG_PATH="/usr/lib32/imagemagick6/pkgconfig"  
  
  ./configure --prefix=/usr --libdir=/usr/lib32 --without-python --without-qt --without-gtk --without-imagemagick --without-java CFLAGS="$CFLAGS -DNDEBUG"
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make 

}

package() {

  cd zbar-$pkgver
  make DESTDIR="$pkgdir" install 

  rm -Rf "$pkgdir"/usr/lib32/*.a \
	"$pkgdir"/usr/include/ \
        "$pkgdir"/usr/bin \
	"$pkgdir"/usr/share \
	"$pkgdir"/etc
	
}
