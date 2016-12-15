# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=albion-online-live-game-data-bin
pkgver=1.0.307.69352
pkgrel=1
pkgdesc="The first true cross-platform Sandbox MMO -- game data files for live server"
url="https://albiononline.com/"
arch=('x86_64')
license=('custom')
depends=('libgl' 'gstreamer0.10-good' 'albion-online-launcher-bin')
source=("https://live.albiononline.com/autoupdate/albiononline-linux-full-${pkgver}.zip" "albion-online-live.desktop")
noextract=("albiononline-linux-full-${pkgver}.zip")

options=(!strip docs libtool emptydirs !zipman staticlibs !upx)
md5sums=('f82bd810e08e4fcb35b17d4ce32f2154'
         '0bde53bc71f7d3f5fec295f156a34235')

PKGEXT='.pkg.tar'

package() {
  mkdir -p "${pkgdir}/opt/albion-online-launcher-bin/game_x64"
  bsdtar --verbose --extract --directory "${pkgdir}/opt/albion-online-launcher-bin/game_x64" --file "albiononline-linux-full-${pkgver}.zip"
  chmod +x "${pkgdir}/opt/albion-online-launcher-bin/game_x64/Albion-Online"

  mkdir -p "${pkgdir}/usr/bin"
  echo "#!/bin/sh" > "${pkgdir}/usr/bin/albion-online-live"
  echo "/opt/albion-online-launcher-bin/game_x64/Albion-Online" >> "${pkgdir}/usr/bin/albion-online-live"
  chmod +x "${pkgdir}/usr/bin/albion-online-live"

  # install .desktop file
  install -m755 -D "${srcdir}/albion-online-live.desktop" -t "${pkgdir}/usr/share/applications"
}

# vim:set ts=2 sw=2 et:

