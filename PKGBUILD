# Maintainer: Donald Webster <fryfrog@gmail.com>
# Helpful url: https://readarr.servarr.com/v1/update/readarr/updatefile?os=linux&runtime=netcore&arch=x64

pkgname="readarr"
pkgver=0.1.0.17
pkgrel=1
pkgdesc="eBook and audio book downloader for usenet and torrents."
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/Readarr/Readarr"
license=("GPL3")
depends=('sqlite')
options=('!strip' 'staticlibs')
optdepends=('sabnzbd: usenet downloader'
            'nzbget: usenet downloader'
            'transmission-cli: torrent downloader (CLI and daemon)'
            'transmission-gtk: torrent downloader (GTK+)'
            'transmission-qt: torrent downloader (Qt)'
            'deluge: torrent downloader'
            'rtorrent: torrent downloader'
            'qbittorrent: torrent downloader'
            'qbittorrent-nox: torrent downloader (no X)'
            'jackett: torrent indexer proxy')

source_x86_64=("readarr.${pkgver}.linux-core-x64.tar.gz::https://readarr.servarr.com/v1/update/readarr/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=x64")
source_aarch64=("readarr.${pkgver}.linux-core-arm64.tar.gz::https://readarr.servarr.com/v1/update/readarr/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm64")
source_armv7h=("readarr.${pkgver}.linux-core-arm.tar.gz::https://readarr.servarr.com/v1/update/readarr/updatefile?version=${pkgver}&os=linux&runtime=netcore&arch=arm")

source=('readarr.service'
        'readarr.tmpfiles'
        'readarr.sysusers')

sha512sums=('9a8a56929999a6c79c4acf816f88002c5cc1271ca28f5ba100a7fc76ade1aed3f7b5fd9a209d754bfff67bddf71fa1a5c6465040c1c38cffacfd2b49032e7a3a'
            '91d27251667d9ffa03b5ab1b5ba459889a62b6f26a575c1fa47bac323d7c31913ee46eab27057bdfecb9719ecb4eb3c3d631351d9fa6cda3ecbb501757d60a14'
            '99f8210754ea5ec742ba6b0b9f05c8312237cb0225bc0d28a2a8ee8362b464da0880499b64ea58c84b64c0eb727748c3c15630cedb8785d7d94d856c76cf17eb')
sha512sums_x86_64=('e8d2ab85ff83311c72f7db181c022b4b8dbb007ed8269dc88e20c721745dab50153b208cb9c71d05e7a3b9d3a96415d9500281920fd8b508a7d64d49ee955a50')
sha512sums_aarch64=('f2a8624751935b7d9c3855cf1a15ecb689f1723ff22a60b1fc92c4f2be28d73e4e991557e55456dcdaafea4697f59806d44835294080ed2d65cb2fb7c6db7a95')
sha512sums_armv7h=('855125372552654c9baaf04ad4f896ce253a1469563aae71a127dd975fc421c7eea244a6dcd1e4191532b76f1f96b25274f7479d449b467a6ed9cda8df851193')



package() {
  # Update environment isn't needed.
  rm -rf "${srcdir}/Readarr/Readarr.Update"

  install -d -m 755 "${pkgdir}/usr/lib/readarr"
  cp -dpr --no-preserve=ownership "${srcdir}/Readarr/"* "${pkgdir}/usr/lib/readarr"
  chmod -R a=,a+rX,u+w "${pkgdir}/usr/lib/readarr/"
  chmod +x "${pkgdir}/usr/lib/readarr/Readarr"

  install -D -m 644 "${srcdir}/readarr.service" "${pkgdir}/usr/lib/systemd/system/readarr.service"
  install -D -m 644 "${srcdir}/readarr.sysusers" "${pkgdir}/usr/lib/sysusers.d/readarr.conf"
  install -D -m 644 "${srcdir}/readarr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/readarr.conf"
}
