# Maintainer: Damjan Georgievski <gdamjan@gmail.com>

pkgname=nextcloud-app-u2f
_releasename=twofactor_u2f
pkgver=6.2.0
pkgrel=1
pkgdesc="Two factor U2F provider for Nextcloud"
arch=('any')
url="https://github.com/nextcloud-releases/twofactor_u2f"
license=('AGPL')
depends=('nextcloud>=20.0')
makedepends=()
options=('!strip')
source=("${_releasename}-${pkgver}.tar.gz"::"${url}/releases/download/v${pkgver}/${_releasename}.tar.gz")

package() {
    install -d --owner=root --group=root $pkgdir/usr/share/webapps/nextcloud/apps/
    cp -r --target-directory=$pkgdir/usr/share/webapps/nextcloud/apps/ $srcdir/$_releasename
}

sha256sums=('c8e3519c4a7639fd229ceb0dc32acccc64ffb6facb6fad946e02afce49023e67')
