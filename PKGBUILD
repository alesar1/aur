# Maintainer: Torge Matthies <openglfreak at googlemail dot com>
# Contributor: Zhang Hai <dreaming.in.code.zh@gmail.com>

# shellcheck disable=SC2034

pkgname=android-emulator-canary
pkgver=29.1.12
pkgrel=1
pkgdesc='Google Android Emulator (Canary channel)'
arch=('x86_64')
url='https://developer.android.com/studio/releases/emulator.html'
license=('custom')
depends=('libpulse' 'libx11' 'libxcb' 'libxdamage' 'libxext'
         'libxfixes' 'ncurses5-compat-libs' 'zlib')
makedepends=('xmlstarlet')
provides=('android-emulator')
conflicts=('android-emulator')
install="${pkgname}.install"
source=('https://dl.google.com/android/repository/emulator-linux-5839083.zip'
        'https://dl.google.com/android/repository/repository2-1.xml'
        "${pkgname}.sh"
        "${pkgname}.csh")
sha256sums=('d7db35d5e2143475467d2540ff1abbe090faa83bbcacdf917feffcb449473393'
            'SKIP'
            '2d7cd6457bc848c369ee215783146da7dce71d7c7f7043f944700f0a7b0d587d'
            '630ea153f52154ac51b3e76357c8a123bea9ed0c910c64b8585775a345834803')

package() {
  # shellcheck disable=SC2154
  install -Dm755 "${pkgname}.sh" "${pkgdir}/etc/profile.d/${pkgname}.sh"
  install -Dm755 "${pkgname}.csh" "${pkgdir}/etc/profile.d/${pkgname}.csh"

  install -d "${pkgdir}/opt/android-sdk/"
  cp -a emulator "${pkgdir}/opt/android-sdk/"

  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  xml sel -t -v '/sdk:sdk-repository/license[@id="android-sdk-preview-license"]' repository2-1.xml > "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Fix broken permissions
  chmod -R o=g "${pkgdir}/opt/android-sdk/emulator"
  find "${pkgdir}/opt/android-sdk/emulator" -perm 744 -exec chmod 755 {} +
}

# see https://dl.google.com/android/repository/repository2-1.xml for new versions
# vim:set ts=2 sw=2 et:
