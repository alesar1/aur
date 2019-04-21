# Maintainer: Malachi Soord <me@malachisoord.com>
pkgname=psalm
pkgver=3.2.8
pkgrel=1
pkgdesc="Psalm is a static analysis tool for finding errors in PHP applications, built on top of PHP Parser."
url="https://getpsalm.org"
arch=('any')
license=('MIT')
depends=('php')

source=("https://github.com/vimeo/psalm/releases/download/${pkgver}/psalm.phar")
sha512sums=('fd212e9500296e6f715732180124accf0f301f92e7c2cc6af9774efa47a98f2215525cefa7d6bfec3e570854fddbee0bb422564caafb030e412120fc9c4958d3')

package() {
  install -D -m 755 ${srcdir}/psalm.phar ${pkgdir}/usr/share/webapps/bin/${pkgname}.phar
  install -d ${pkgdir}/usr/bin
  ln -s /usr/share/webapps/bin/${pkgname}.phar ${pkgdir}/usr/bin/${pkgname}
}
