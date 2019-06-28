# Maintainer: Malachi Soord <me@malachisoord.com>
pkgname=psalm
pkgver=3.4.7
pkgrel=3
pkgdesc="Psalm is a static analysis tool for finding errors in PHP applications, built on top of PHP Parser."
url="https://getpsalm.org"
arch=('any')
license=('MIT')
depends=('php')

source=("https://github.com/vimeo/psalm/releases/download/${pkgver}/psalm.phar")
sha512sums=('7abcf2347ac3aa5334bd049b9904206c9f93f4548d7879a7e27518139f78b679a2296468ff15386ee9e145062b1486df73d70a550725f168c0c683b0bb7d25cc')

package() {
  install -D -m 755 ${srcdir}/psalm.phar ${pkgdir}/usr/share/webapps/bin/${pkgname}.phar
  install -d ${pkgdir}/usr/bin
  ln -s /usr/share/webapps/bin/${pkgname}.phar ${pkgdir}/usr/bin/${pkgname}
}
