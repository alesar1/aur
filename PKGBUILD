# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://services.lidarr.audio/v1/update/nightly/changes?os=linux

pkgname="lidarr-develop"
pkgver=0.6.2.1265
_shortstupidfuckingrandomnumber="469"
_longstupidfuckingrandomnumber="2588F2241453A7DE442CCBC313C94FAE31F4E1E722A684EF402908ECB0D36B2302"
pkgrel=1
pkgdesc="Music downloader for usenet and torrents."
arch=(any)
url="https://github.com/lidarr/Lidarr"
license=("GPL3")
depends=('mono' 'libmediainfo' 'sqlite' 'chromaprint')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'transmission-cli: torrent downloader (CLI and daemon)'
            'transmission-gtk: torrent downloader (GTK+)'
            'transmission-qt: torrent downloader (Qt)'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'qbittorrent: torrent downloader'
            'qbittorrent-nox: torrent downloader (no X)'
            'jackett: torrent indexer proxy'
            'libgdiplus: provides a gdi+ compatible api')

provides=('lidarr')
conflicts=('lidarr')

source=("Lidarr.develop.${pkgver}.linux.tar.gz::https://dev.azure.com/Lidarr/Lidarr/_apis/build/builds/${_shortstupidfuckingrandomnumber}/artifacts?artifactName=Packages&fileId=${_longstupidfuckingrandomnumber}&fileName=Lidarr.develop.${pkgver}.linux.tar.gz"
        'lidarr.service'
        'lidarr.tmpfiles'
        'lidarr.sysusers')

sha512sums=('703f0b310a70ced24b7d86499b5d01024cda80654d03cebe7003fad29c7ac428f099befde0611f9f1689b6e617612968a1f1493ee014701e27e80f703e53c088'
            'e339ad3fe7d7569d65346309ffa69ea5f68001a45ae6e1a494e786fc4711a189f38cd73bb4d9bafdb3e5315a625f1c25301804473830418d8284192cb0c04c84'
            'e40ce79a3e1741e7e06312797e652a85d199bd6d719ef953ea8c3c030756ee44e202956ac9e13cff17fac38312c27398f457f79923a7d0f56bd563a69af6ab63'
            'ffd466960527256d8de1d9887d90d4da87486eff062950c46cbc4fd4af1ef89e7d5c070ef1e649b23a95fbab15651e289fd5bdc6d34649e4a6ecdf2f6da06622')

package() {
  install -d -m 755 "${pkgdir}/usr/lib/lidarr"
  cp -dpr --no-preserve=ownership "${srcdir}/Lidarr/"* "${pkgdir}/usr/lib/lidarr"
  chmod -R a=,a+rX,u+w "${pkgdir}/usr/lib/lidarr/"

  install -D -m 644 "${srcdir}/lidarr.service" "${pkgdir}/usr/lib/systemd/system/lidarr.service"
  install -D -m 644 "${srcdir}/lidarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/lidarr.conf"
  install -D -m 644 "${srcdir}/lidarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/lidarr.conf"
}
