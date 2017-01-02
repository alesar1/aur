# Maintainer: Albert Graef <aggraef at gmail dot com>

pkgname=pdl2ork-faust
_pkgname=pd-faust
pkgver=0.13
pkgrel=1
pkgdesc="Run Faust signal processors in Pd, Pd-L2Ork version"
arch=('i686' 'x86_64')
url="http://purelang.bitbucket.org/"
depends=('pd-l2ork' 'pure'  'pdl2ork-pure' 'pure-faust' 'pure-audio' 'pure-midi' 'pure-stldict')
makedepends=('faust')
license=('LGPL3')
source=(https://bitbucket.org/purelang/pure-lang/downloads/$_pkgname-$pkgver.tar.gz)
md5sums=('a311a8d83f00f6751a7cc87d292c62b7')

build() {
  cd $srcdir/$_pkgname-$pkgver
  make prefix=/usr PUREC_FLAGS=-mcpu=generic
}

package() {
  cd $srcdir/$_pkgname-$pkgver
  make PD=pd-l2ork DESTDIR=$pkgdir prefix=/usr install 
}
