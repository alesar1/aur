# Maintainer: Donald Webster <fryfrog@gmail.com>
# Maintainer: Zack Baldwin <zack@zackb.com>

pkgname=ombi
pkgver=3.0.3268
pkgrel=1
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
options=('staticlibs')

source=("${pkgname}.service"
        "${pkgname}.sysusers"
        "${pkgname}.tmpfiles")

source_x86_64=("${pkgname}-x86_64-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux.tar.gz")
source_i686=("${pkgname}-i686-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux.tar.gz")
source_armv7h=("${pkgname}-armv7h-${pkgver}.tar.gz::https://github.com/tidusjar/Ombi/releases/download/v${pkgver}/linux-arm.tar.gz")

noextract=("${pkgname}-x86_64-${pkgver}.tar.gz"
           "${pkgname}-i686-${pkgver}.tar.gz"
           "${pkgname}-armv7h-${pkgver}.tar.gz")

sha256sums=('d5893f6b665a0646054343a051e462a49569d51de224b45d3d2542b6c4e3d168'
            '6efc381990e1113737686d4f61795095fa8edbc176daa877fd755f1ddb3a40fa'
            '284c2d947c94c44bc40e1da3af207b85f1a5fc11213720f1e9fa4ff237da2e54')
sha256sums_x86_64=('9797fd4d74929b2850821a5e5cd090b4becd125688fc0bad110cdd0074726979')
sha256sums_i686=('9797fd4d74929b2850821a5e5cd090b4becd125688fc0bad110cdd0074726979')
sha256sums_armv7h=('6e42b38a311fbddad02b8874ba992d6f23d14fd078ca201410193e357a3207f8')

prepare() {
  # The source is packaged w/o a sub directory, so create our own and 
  # extract to it. Arm package has a different name too.
  mkdir -p "${srcdir}/ombi"
  bsdtar -x -C "${srcdir}/ombi" -f "${pkgname}-${CARCH}-${pkgver}.tar.gz"
}

package() {
  # Copy in files and then fix permissions
  install -d -m 755 "${pkgdir}/usr/lib/ombi"
  cp -dpr --no-preserve=ownership "${srcdir}/ombi/"* "${pkgdir}/usr/lib/ombi/"
  find ${pkgdir}/usr/lib/ombi/ -type f -exec chmod 644 '{}' ';'
  find ${pkgdir}/usr/lib/ombi/ -type d -exec chmod 755 '{}' ';'
  chmod 755 ${pkgdir}/usr/lib/ombi/Ombi

  install -D -m 644 "${srcdir}/ombi.service" "${pkgdir}/usr/lib/systemd/system/ombi.service"
  install -D -m 644 "${srcdir}/ombi.sysusers" "${pkgdir}/usr/lib/sysusers.d/ombi.conf"
  install -D -m 644 "${srcdir}/ombi.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/ombi.conf"
}

# vim:set ts=2 sw=2 et:
