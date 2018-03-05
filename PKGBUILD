# Maintainer: Donald Webster <fryfrog@gmail.com>
# Maintainer: Zack Baldwin <zack@zackb.com>

pkgname=ombi
pkgver=3.0.2970
pkgrel=2
pkgdesc="Simple automated way for users to request new content for Plex"
arch=('x86_64' 'i686' 'armv7h')
url="https://github.com/tidusjar/Ombi"
license=('GPL2')
depends=('libunwind' 'openssl-1.0')
optdepends=('sonarr: TV daemon for usenet & torrents'
            'radarr: Movie daemon for usenet & torrents (sonarr fork)'
            'sickrage: TV daemon for usenet & torrents (sickbeard fork)'
            'couchpotato: Movie daemon for usenet & torrents'
            'plex-media-server: Media server'
            'plex-media-server-plexpass: Media server (plexpass version)'
            'emby-server: Media server')
replaces=('plexrequests')
install='ombi.install'
options=('staticlibs')

source=("${pkgname}.service"
        "${pkgname}.sysusers")

source_x86_64=("${pkgname}-x86_64-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux.tar.gz")
source_i686=("${pkgname}-i686-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux.tar.gz")
source_armv7h=("${pkgname}-armv7h-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux-arm.tar.gz")

noextract=("${pkgname}-x86_64-${pkgver}.tar.gz"
           "${pkgname}-i686-${pkgver}.tar.gz"
           "${pkgname}-armv7h-${pkgver}.tar.gz")

sha256sums=('d5893f6b665a0646054343a051e462a49569d51de224b45d3d2542b6c4e3d168'
            '6efc381990e1113737686d4f61795095fa8edbc176daa877fd755f1ddb3a40fa')
sha256sums_x86_64=('1de418f83fd8ca230c0e0fbed049acde045132f667af54cf9763d44aec500699')
sha256sums_i686=('1de418f83fd8ca230c0e0fbed049acde045132f667af54cf9763d44aec500699')
sha256sums_armv7h=('fb5cd416074f90daec881570b9c12bac2934eaf9de5c2f7dbe27955b8de3eb77')



prepare() {
  # The source is packaged w/o a sub directory, so create our own and 
  # extract to it. Arm package has a different name too.
  mkdir -p "${srcdir}/ombi"
  bsdtar -x -C "${srcdir}/ombi" -f "${pkgname}-${CARCH}-${pkgver}.tar.gz"
}

package() {
  install -d -m 755 "${pkgdir}/var/lib/ombi"
  install -d -m 755 "${pkgdir}/usr/lib/ombi"

  # Copy in files and then fix permissions
  cp -dpr --no-preserve=ownership "${srcdir}/ombi/"* "${pkgdir}/usr/lib/ombi/"
  find ${pkgdir}/usr/lib/ombi/ -type f -exec chmod 644 '{}' ';'
  find ${pkgdir}/usr/lib/ombi/ -type d -exec chmod 755 '{}' ';'
  chmod 755 ${pkgdir}/usr/lib/ombi/Ombi

  install -Dm644 "${srcdir}/ombi.service" "${pkgdir}/usr/lib/systemd/system/ombi.service"
  install -Dm644 "${srcdir}/ombi.sysusers" "${pkgdir}/usr/lib/sysusers.d/ombi.conf"
}

# vim:set ts=2 sw=2 et:
