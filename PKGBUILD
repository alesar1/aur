# Maintainer: Andrejs Mivreņiks <gim at fastmail dot fm>
# Contributor: Lex Black <autumn-wind at web dot de>
# Contributor: fnord0 < fnord0 AT riseup DOT net >
pkgname=webgoat
pkgver=6.0.1
pkgrel=3
pkgdesc='Deliberately insecure J2EE web application designed to teach web application security concepts'
arch=('i686' 'x86_64')
url='https://webgoat.github.io/'
license=('GPL2')
depends=('java-runtime')
makedepends=('maven')
optdepends=('webscarab: proxy for analyzing applications that communicate using the HTTP and HTTPS protocols, used to help solve most WebGoat lessons'
            'paros: MitM HTTP/HTTPS proxy, spider, XSS and injection scanner + more, used to help solve WebGoat lessons')
source=("https://github.com/WebGoat/WebGoat/archive/v${pkgver}.tar.gz"
        "${pkgname}.sh")
sha256sums=('0fe10011df18b2ebb7ee0658026b29d0ae9a0c1ea9a68cf511ef40fb48930964'
            '3615a09c64eb07709bede9b22782bedeffe7c7097cde1c6bcc2a07adcd28712c')
install="${pkgname}.install"

build() {
  cd ${srcdir}/WebGoat-$pkgver
  # Needed to fix issues with maven
  echo "<settings><localRepository>$srcdir</localRepository></settings>" > $srcdir/maven-settings.xml
  mvn -s $srcdir/maven-settings.xml clean package
}

package() {
  install -D -m755 webgoat.sh $pkgdir/usr/bin/webgoat
  cd ${srcdir}/WebGoat-$pkgver
  install -d $pkgdir/opt/$pkgname/
  cp -r doc $pkgdir/opt/$pkgname/doc
  install -D -m644 target/WebGoat-$pkgver-war-exec.jar $pkgdir/opt/$pkgname/webgoat.jar
}
# vim:set ts=2 sw=2 et:
