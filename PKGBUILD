# Maintainer: Zack Baldwin <zack@zackb.com>
pkgname=plexrequests
pkgver=1.3.0
pkgrel=1
pkgdesc="Simple automated way for users to request new content for Plex"
arch=('any')
url="https://github.com/lokenx/plexrequests-meteor"
license=('MIT')
depends=('meteor-js')
optdepends=('couchpotato' 'sickrage' 'sonarr')
install='plexrequests.install'
source=("https://github.com/lokenx/plexrequests-meteor/archive/v${pkgver}.tar.gz"
        "${pkgname}.service")
md5sums=('cf6f3e3a2171deda713eea634e34c02e'
         'f3b655ae8dda417d1f4fe08f565d3b86')

package() {
  install -d "${pkgdir}/opt/${pkgname}"
  cp -r "plexrequests-meteor-${pkgver}/." "${pkgdir}/opt/${pkgname}"
  install -Dm644 "plexrequests-meteor-${pkgver}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}

# vim:set ts=2 sw=2 et: