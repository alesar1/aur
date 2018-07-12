# Maintainer: Donald Webster <fryfrog@gmail.com>
# Contributor:: Justin Dray <justin@dray.be>
# Contributor:: Daniel Egeberg <daniel.egeberg@gmail.com>

pkgname="sonarr-develop"
pkgver=2.0.0.5239
pkgrel=1
pkgdesc="TV download automation for usenet and torrents."
arch=(any)
url="http://www.sonarr.tv"
license=('GPL3')
depends=('mono' 'libmediainfo' 'sqlite')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'transmission-cli: torrent downloader (CLI and daemon)'
            'transmission-gtk: torrent downloader (GTK+)'
            'transmission-qt: torrent downloader (Qt)'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'jackett: torrent indexer proxy')

install='sonarr.install'
provides=('sonarr')
conflicts=('sonarr')
source=("https://download.sonarr.tv/v2/develop/mono/NzbDrone.develop.${pkgver}.mono.tar.gz"
        "sonarr.service"
        "sonarr.install"
        "sonarr.sysusers"
        "sonarr.tmpfiles")

noextract=()
sha256sums=('15206c3ba421c7db282de82562084a473666e09447d2ccd7fa28557e03860548'
            '738193114a554ef74b26ba163b28eb9835816bf106934f08c616b1adbcfd4bd6'
            'bd00676bddce255e42ebbed60e4af6d0910b0efcd0602f2307dedb510dd22033'
            'cc3c69f719fa64335f4c5b41b2588f1ec56865fb2202f5919d3668b50b8f398e'
            'a436a979ca3a9e78bdc410bd0027d97956bfa8d2d4f2b7bdf3f7d2ed199dd6a8')

package() {
  cd "$srcdir"

  install -d -m 755 "${pkgdir}/var/lib/sonarr"

  install -d -m 755 "${pkgdir}/usr/lib/sonarr"
  cp -dpr --no-preserve=ownership "${srcdir}/NzbDrone/"* "${pkgdir}/usr/lib/sonarr"

  install -D -m 644 "${srcdir}/sonarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/sonarr.conf"
  install -D -m 644 "${srcdir}/sonarr.service" "${pkgdir}/usr/lib/systemd/system/sonarr.service"
  install -D -m 644 "${srcdir}/sonarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/sonarr.conf"
}
