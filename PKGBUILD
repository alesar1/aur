# Maintainer: Jeff Cuevas-Koch <jeff at [lastname-no-dashes] dot com>

pkgname=gogitver-bin
pkgver=0.6.4
pkgrel=2
pkgdesc="gogitver: semantic versioning through git history"
arch=('x86_64')
url="https://github.com/annymsMthd/gogitver"
license=('MIT')
depends=('glibc')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/annymsMthd/gogitver/releases/download/${pkgver}/linux.tar.gz")
md5sums=('664b26a09e259a57e98dbfd1aa7c9080')


package() {
  install -Dm755 $srcdir/gogitver $pkgdir/usr/bin/gogitver
}
