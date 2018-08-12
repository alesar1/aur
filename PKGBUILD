# Maintainer: Janek Thomaschewski <janek@jbbr.net>

pkgname=signal-desktop-bin
pkgver=1.15.4
pkgrel=1
pkgdesc='Private messaging from your desktop'
arch=('x86_64')
url='https://github.com/signalapp/Signal-Desktop'
license=('GPL3')
provides=('signal-desktop')
conflicts=('signal')
options=(!strip)
depends=('gconf' 'gtk3' 'libnotify' 'nss' 'xdg-utils' 'libxss')

sha512sums=('204b07c965704a7dcac6d6bc2e8769f9170217744742ecd73e80cc10d148ebde15ced069709fed60c5ed888d5b68a2213079ae60bc68c8a47300d979ed390945'
            '7db7ee79a07fb86fec471e63c5189d61e8a2ca8fc2e659ea89ef22516e24e0a3c9f32c93f8ee520f56abc187b9b9304355e8aadb427c4920cda4f663ab1489fa')
source=("https://updates.signal.org/desktop/apt/pool/main/s/signal-desktop/signal-desktop_${pkgver}_amd64.deb"
        'signal-desktop')

package() {
  # extract package data
  tar xf data.tar.xz -C "${pkgdir}"

  # fix permissions in 1.9.0+ (Some directories have now 775; changing them back to 755)
  find "${pkgdir}" -type d -not -perm 755 -exec chmod 755 {} \;

  # install alias in /usr/bin
  mkdir "${pkgdir}/usr/bin"
  install -D -m755 signal-desktop "${pkgdir}/usr/bin/signal-desktop"
}
