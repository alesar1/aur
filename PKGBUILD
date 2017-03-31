# Maintainer: Donald Webster <fryfrog@gmail.com>
# Maintainer: Zack Baldwin <zack@zackb.com>

pkgname=ombi
pkgver=2.2.0
pkgrel=1
pkgdesc="Simple automated way for users to request new content for Plex"
arch=('any')
url="https://github.com/tidusjar/Ombi"
license=('GPL2')
depends=('mono')
optdepends=('couchpotato' 'sickrage' 'sonarr' 'plex-media-server' 'plex-media-server-plexpass' 'headphones')
replaces=('plexrequests')
install='ombi.install'
source=("https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/Ombi.zip"
        "${pkgname}.service"
        "${pkgname}.sysusers")

sha256sums=('d33a8c9e596382290420d922de480c6d1c4ed995dc67fdfac176afc825a903d1'
            '2407c8183aa48f8666063169dc79d0cbdb99a01b11cdf47c168ce8f2c990d3f8'
            '27704e4b5c5d944b774bf4d180684ff76f157d37ba9c5e39f7d03493962c81c6')

package() {
  install -d "${pkgdir}/opt/${pkgname}"
  cp -r "Release/." "${pkgdir}/opt/${pkgname}"
  #install -Dm644 "Release/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -Dm644 "${srcdir}/ombi.sysusers" "${pkgdir}/usr/lib/sysusers.d/ombi.conf"
}

# vim:set ts=2 sw=2 et:
