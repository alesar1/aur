# Maintainer: M0Rf30

pkgname=ostinato
pkgver=0.8
pkgrel=2
url="http://ostinato.org/"
pkgdesc="Cross-platform network packet/traffic generator and analyzer"
source=("https://github.com/pstavirs/ostinato/archive/v$pkgver.tar.gz")
arch=('i686' 'x86_64')
depends=('protobuf' 'qt4' 'libpcap')
optdepends=('wireshark-cli' 'gzip' 'diffutils' 'awk')
license=(GPL)

build(){
   cd $srcdir/$pkgname-$pkgver
   chmod 644 COPYING
   qmake-qt4 PREFIX=/usr
   make
}

package(){
   cd $srcdir/$pkgname-$pkgver
   make INSTALL_ROOT=$pkgdir install
}

md5sums=('827b026a0443b07c99500dc3f361d3f6')
