# Maintainer: Mike Sampson <mike at sambodata dot com>
# Contributor: Thomas Zervogiannis <tzervo@gmail.com>
# Contributor: Loui Chang <louipc dot ist at gmail company>
# Contributor: rabyte <rabyte__gmail>

pkgname=tintin
pkgver=2.02.11
pkgrel=1
pkgdesc="A console-based MUD client"
arch=('i686' 'x86_64')
url="http://tintin.sourceforge.net/"
license=('GPL3')
depends=('zlib' 'pcre' 'gnutls')
options=('strip')
source=(https://github.com/scandum/tintin/releases/download/$pkgver/tintin-$pkgver.tar.gz)
sha512sums=('5e745f45e3608910c2f8c149c83086f182548631311e6334e3a5c79b09349f18e9d11b9c31b8ad4838aa3974108a1634a6298ac16c6b158930565f33c9f4dd18')

build() {
  cd $srcdir/tt/src
  sh configure --prefix=/usr --enable-big5
  make

}

package() {
  cd $srcdir/tt/src
  install -m755 -D tt++ $pkgdir/usr/bin/tt++
  ln -sf tt++ $pkgdir/usr/bin/tintin

}
