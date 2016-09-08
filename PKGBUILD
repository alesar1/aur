# Maintainer: Zhang Hai <dreaming.in.code.zh@gmail.com>

# Taken from android-sdk

pkgname=android-sdk-dummy
_pkgname=android-sdk
pkgver=25.2.2
pkgrel=1
pkgdesc='Google Android SDK, dummy package'
arch=('i686' 'x86_64')
url='http://developer.android.com/sdk/'
license=('custom')
depends_i686=('java-environment' 'alsa-lib' 'openal' 'libstdc++5' 'libxv' 'sdl'
              'ncurses' 'swt' 'zlib')
depends_x86_64=('java-environment' 'lib32-alsa-lib' 'lib32-openal'
               'lib32-libstdc++5' 'lib32-libxv' 'lib32-mesa' 'lib32-ncurses'
               'lib32-sdl' 'lib32-zlib' 'lib32-fontconfig' 'lib32-libpulse'
               'swt')
optdepends=('android-udev: udev rules for Android devices'
            'android-sdk-platform-tools: adb, aapt, aidl, dexdump and dx')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
install="${pkgname}.install"
source=("${_pkgname}.png"
        "${_pkgname}.desktop::https://aur.archlinux.org/cgit/aur.git/plain/${_pkgname}.desktop?h=${_pkgname}"
        "${_pkgname}.sh::https://aur.archlinux.org/cgit/aur.git/plain/${_pkgname}.sh?h=${_pkgname}"
        "${_pkgname}.csh::https://aur.archlinux.org/cgit/aur.git/plain/${_pkgname}.csh?h=${_pkgname}"
        "${_pkgname}.conf::https://aur.archlinux.org/cgit/aur.git/plain/${_pkgname}.conf?h=${_pkgname}"
        "license.html::https://aur.archlinux.org/cgit/aur.git/plain/license.html?h=${_pkgname}")
sha1sums=('429cfcb7c161e5fd60c9f155a6436ba5c78f7af7'
          '8f886de363ad91a7f93a0c6ded993e99bef3e1a7'
          'ab7251df3a382a920e81663f25d4a7813918ae1c'
          '5430d75f38ff74667919efc13f380bef0d67e8ff'
          '145bdf3eb41a56574b289c1577a24bc47097ec83'
          'bfb91be7e0b602d765b7a1fcaf0ce1b7e1a93faa')

package() {
  install -Dm755 "${_pkgname}.sh" "${pkgdir}/etc/profile.d/${_pkgname}.sh"
  install -Dm755 "${_pkgname}.csh" "${pkgdir}/etc/profile.d/${_pkgname}.csh"
  install -Dm644 "${_pkgname}.conf" "${pkgdir}/etc/ld.so.conf.d/${_pkgname}.conf"
  install -Dm644 "${_pkgname}.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 license.html "${pkgdir}/usr/share/licenses/${_pkgname}/license.html"
}
