# Maintainer: Tom Moore <t.moore01@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Rob Sletten <rsletten@gmail.com>
# Contributor: monty <linksoft@gmx.de>
# Contributor: Jon Wiersma <archaur@jonw.org>
# Contributor: Arthur <arthur.darcet@m4x.org>
# Contributor: Praekon <praekon@googlemail.com>

pkgname=plex-media-server
pkgver=1.5.6.3790
_pkgsum=4613ce077
pkgrel=1
pkgdesc='Plex Media Server'
arch=('armv7h' 'i686' 'x86_64')
url='https://plex.tv/'
license=('custom')
depends=('systemd')
makedepends_i686=('prelink')
makedepends_x86_64=('prelink')
provides=('plex-media-server')
conflicts=('plex-media-server-plexpass')
backup=('etc/conf.d/plexmediaserver')
install='plex-media-server.install'
source=('plexmediaserver.conf.d'
        'plexmediaserver.service'
        'plex.sysusers'
        'terms.txt')
source_armv7h=("https://downloads.plex.tv/plex-media-server/${pkgver}-${_pkgsum}/PlexMediaServer-${pkgver}-${_pkgsum}-arm7.spk")
source_i686=("https://downloads.plex.tv/plex-media-server/${pkgver}-${_pkgsum}/plexmediaserver-${pkgver}-${_pkgsum}.i386.rpm")
source_x86_64=("https://downloads.plex.tv/plex-media-server/${pkgver}-${_pkgsum}/plexmediaserver-${pkgver}-${_pkgsum}.x86_64.rpm")
sha256sums=('7ab1ee8da9012d257b7f473fb79d76b201ca592cbe3722f977a43b58bfad180e'
            '9a214a37cc8dd5fd912d5bcca16445f023f892aafd4ca54226aeb2b4910d23a2'
            'ebf153d5789f9d24cb98ae607d227286e1da6ce54e149c8be4f47e08ee729573'
            '7bb97271eb2dc5d1dcb95f9763f505970d234df17f1b8d79b467b9020257915a')
sha256sums_armv7h=('41b27c76557277da22975c949abab8e215cf5804ddcd286554609dfe54f4de04')
sha256sums_i686=('2a331cbf6aae9026f118741406da31651c15932dcc96274213e4ebec77ebb57d')
sha256sums_x86_64=('9234f61c1d37d12f0d8aad65f8711c37772636d9cb6ac043cf85a119d50ae2b4')

prepare() {

case "$CARCH" in
  arm*) mkdir -p usr/lib/plexmediaserver && tar -zxf package.tgz -C usr/lib/plexmediaserver/;;
        #Fix for SELinux and Grsecurity
     *) execstack -c usr/lib/plexmediaserver/libgnsdk_dsp.so*;;
esac

}

package() {
  install -dm 755 "${pkgdir}"/{opt,etc/conf.d,usr/lib/systemd/system}
  cp -dr --no-preserve='ownership' usr/lib/plexmediaserver "${pkgdir}"/opt/
  install -m 644 plexmediaserver.service "${pkgdir}"/usr/lib/systemd/system/
  install -m 644 plexmediaserver.conf.d "${pkgdir}"/etc/conf.d/plexmediaserver
  install -Dm 644 "$srcdir/plex.sysusers" "$pkgdir/usr/lib/sysusers.d/plex.conf"

  install -dm 755 "${pkgdir}"/usr/share/licenses/${pkgname}
  install -m 644 terms.txt "${pkgdir}"/usr/share/licenses/${pkgname}/
}

# vim: ts=2 sw=2 et:
