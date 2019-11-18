# Maintainer: Arkadiusz Dzięgielewski <arek.dzski@gmail.com>

pkgname=teamspeak
pkgver=5.0.0beta16
pkgrel=1
pkgdesc="TeamSpeak is software for quality voice communication via the Internet"
url="http://www.teamspeak.com"
license=('custom')
optdepends=('libpulse')
arch=('x86_64')
source=('teamspeak.desktop'
        'teamspeak.svg'
        "https://files.teamspeak-services.com/teamspeak/teamspeak-client.tar.gz")
noextract=('teamspeak-client.tar.gz')
sha512sums=('57c618d386023d27fcb5f6b7e5ce38fe7012680988aff914eeb6c246d855b190689bbad08d9824c864c1776af322e8df34019234128beb306a09b114673b37c9'
            '3b0c7fe2e71eb207a9874c3fba31c18067867481d81c7a8a2a9fef5956f04cfbd559186f6996e2e3d79292d1aaaae443ab6ea6272d0f6b3205fdd12387de27b0'
            '399f22c331e2faa0e9d7fb41f4c51ae693ec005a32cb6672db1d4b9465fc1bebf55bdc196ce20d461530b355353720e0b65865817e8079f94b1a8ef9c193567d')

prepare() {
  # Manually extracting archive to prevent mess in srcdir
  mkdir -p archive && cd archive
  bsdtar -xf "${srcdir}/teamspeak-client.tar.gz"
}

package() {
  install -d "${pkgdir}/usr/bin/"
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -d "${pkgdir}/opt/${pkgname}"

  cp -r "${srcdir}/archive/"* "${pkgdir}/opt/${pkgname}/"

  install -Dm644 "${srcdir}/teamspeak.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${srcdir}/teamspeak.svg" "${pkgdir}/usr/share/pixmaps/teamspeak.svg"

  ln -s /opt/${pkgname}/TeamSpeak/licenses/en/la.html "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  ln -s /opt/${pkgname}/TeamSpeak "${pkgdir}/usr/bin/teamspeak"
}
