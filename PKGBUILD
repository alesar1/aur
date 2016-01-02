# Maintainer: Michael Gerber <aur at lynxcore dot org >
pkgname=open-xchange-osgi
pkgver=7.8.0
pkgrel=6
pkgdesc='3rd party OSGi bundles used by the Open-Xchange backend'
groups=('open-xchange-minimal')
install='open-xchange-osgi.install'
arch=('any')
url='http://www.ox.io/'
license=('GPLv2')
depends=()
makedepends=()
conflicts=()
provides=('open-xchange-osgi')
source=('https://software.open-xchange.com/products/appsuite/stable/backend/DebianJessie/all/open-xchange-osgi_7.8.0-6_all.deb')
sha256sums=('d4b96f5e6b0e194bc3a6c6c3827b12972b801765491d3dd27dcc750f5697ead9')

package() {
    if test -f "data.tar.xz"; then
        tar xf data.tar.xz
        cp -a $(find . -mindepth 1 -maxdepth 1 -type d) "$pkgdir"
    fi
    
    if test -f "data.tar.gz"; then
        tar xf data.tar.gz
        cp -a $(find . -mindepth 1 -maxdepth 1 -type d) "$pkgdir"
    fi
}
