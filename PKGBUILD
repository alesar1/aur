# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://ci.appveyor.com/project/galli-leo/radarr-usby1/branch/develop/artifacts
pkgname="radarr-develop"
pkgver="0.2.0.1201"
_pkghash="29mtixybs6ai7j8k"
pkgrel=1
pkgdesc="Movie download automation for usenet and torrents."
arch=(any)
url="https://github.com/Radarr/Radarr"
license=('GPL3')
depends=('mono' 'libmediainfo' 'sqlite')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'transmission-cli: torrent downloader (CLI and daemon)'
            'transmission-gtk: torrent downloader (GTK+)'
            'transmission-qt: torrent downloader (Qt)'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'jackett: torrent indexer proxy'
            'libgdiplus: provides a gdi+ compatible api')

provides=('radarr')
conflicts=('radarr')

source=("Radarr.develop.${pkgver}.linux.tar.gz::https://radarr.aeonlucid.com/v1/download/nightly/linux/${pkgver}"
        'radarr.service'
        'radarr.tmpfiles'
        'radarr.sysusers')

sha512sums=('aa552cdfc21387c81d95ab91dd079c4695869569f13719a877b7317ab6539e10b95d083fb65a1041378c66c5299dce03cbc9e9054d131b1d4194f93d6d3770ea'
            '4c064051c7592529a7ed41c4fdd6381b5e9ace938608f9e271aa4126194db456e85b7602d8e13718efcc4c40d66f82a338199cb6fd924177ad23154090e48da3'
            'e0d55353f0bf89f826eb7eb9ee26c3e3f38bd46a8884135139536ae220c0c531d5df486bc3b50f580679f9607bb4b7bfb9f29998609dc966fbfb8e1809834650'
            'c1ee3925eced182ea7fffa55a6dc2a4e099ccf18636fc237ef0a2fc9517a38cfc2a819ae5a7bc546b63e383506f9f47e89454a71e34106c579d7454d71b2299e')

package() {
  install -d -m 755 "${pkgdir}/usr/lib/radarr"
  cp -dpr --no-preserve=ownership "${srcdir}/Radarr/"* "${pkgdir}/usr/lib/radarr"
  chmod -R a=,a+rX,u+w ${pkgdir}/usr/lib/radarr

  install -D -m 644 "${srcdir}/radarr.service" "${pkgdir}/usr/lib/systemd/system/radarr.service"
  install -D -m 644 "${srcdir}/radarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/radarr.conf"
  install -D -m 644 "${srcdir}/radarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/radarr.conf"
}
