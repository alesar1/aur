# Maintainer: Crotok <crotok [at] mailbox [dot] org>

pkgname=streamstudio-bin
pkgver=2.9.1
pkgrel=1
pkgdesc="Provide a popcorntime clone for streaming movies directly from T411, Cpasbien, Songza, Twitch, Piratebay, Youtube and Dailymotion"
arch=('x86_64' 'i686')
url="https://www.streamstudio.me/"
license=('GPL3')
depends=('libnotify' 'desktop-file-utils' 'ttf-font' 'gconf' 'nss' 'libxtst' 'gtk2' 'alsa-lib')
optdepends=('ttf-liberation: open source ttf fonts')
provides=('streamstudio')
conflicts=('streamstudio')
options=('!strip')
install="streamstudio.install"
sha1sums=('44955f573ae00b13d45c9124ed74f3528b279ac6'
          '31854b1a0a045efe9eabf3763c9c9b3f9092b523'
          '6797889bd842a5329d62120523f5b51a61eae244')

_platform='64'

if [ "$CARCH" = 'i686' ]; then
  _platform='32'
  sha1sums[0]='9570536ea74cb3f4557ccc3d75d676c299021476'
fi

source=("https://streamstudio.me/StreamStudio/streamstudio-${_platform}.zip"
        "streamstudio.install"
        "streamstudio.desktop")

package() {
  cd "${srcdir}"

  install -dm755 "${pkgdir}/opt/${pkgname}/"
  install -dm755 "${pkgdir}/usr/bin"
  install -dm755 "${pkgdir}/usr/share"

  # Program
  echo "${pkgdir}/opt/${pkgname}/"
  install -Dm755 "${srcdir}/streamstudio" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/nw.pak" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/libffmpegsumo.so" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/ffmpeg" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/icudtl.dat" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/package.json" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/config.html" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/index.html" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/playlist.html" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/selectdir.html" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/update.html" "${pkgdir}/opt/${pkgname}/"
  install -Dm644 "${srcdir}/warning.html" "${pkgdir}/opt/${pkgname}/"

  # Directories
  cp -a "${srcdir}/css" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/fonts" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/images" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/js" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/locales" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/node_modules" "${pkgdir}/opt/${pkgname}/"
  cp -a "${srcdir}/setup-images" "${pkgdir}/opt/${pkgname}/"

  # Link to program
  ln -s "/opt/${pkgname}/streamstudio" "${pkgdir}/usr/bin/streamstudio"

  # Desktop file
  install -Dm644 "${srcdir}/streamstudio.desktop" "${pkgdir}/usr/share/applications/streamstudio.desktop"

  # Icon
  install -Dm644 "${srcdir}/images/logo.png" "${pkgdir}/usr/share/pixmaps/streamstudio.png"

  # Force youtube-dl write attribute (for auto-updating)
  chmod 777 "${pkgdir}/opt/${pkgname}/node_modules/youtube-dl/bin/youtube-dl"

  # Force ffmpeg execute attribute
  chmod +x "${pkgdir}/opt/${pkgname}/ffmpeg"
}
