# Maintainer: Joseph R. Prostko <joe dot prostko at gmail dot com>

pkgname=concrete5
_pkgname=concrete
pkgver=5.7.5.8
pkgrel=1
pkgdesc="A PHP-based open source content management system"
arch=('any')
url="http://www.concrete5.org/"
license=('MIT')
depends=('php' 'mysql')
optdepends=('apache: Web server to run concrete5'
            'nginx: Web server to run concrete5'
            'cherokee: Web server to run concrete5'
            'lighttpd: Web server to run concrete5')
install="$pkgname.install"
options=('!strip')
source=(http://www.concrete5.org/releases/$_pkgname$pkgver.zip)
sha256sums=('44bcfbc378457541c768dd7dd7eedcd61c0ed4b41a352f68449ae4a6bc072534')

package() {
  _instdir=$pkgdir/usr/share/webapps/$pkgname
  install -d ${_instdir}
  cp -a ${_pkgname}$pkgver/* ${_instdir}

  # Make certain directories writable by the web server
  chown -R http:http ${_instdir}/packages
  chown -R http:http ${_instdir}/application/config
  chown -R http:http ${_instdir}/application/files
}
