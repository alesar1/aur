# Maintainer: /dev/rs0 <rs0@secretco.de.com>
# Contributor: Daniel Perez <tuvistavie@gmail.com>

pkgname=electron
pkgver=0.37.5
pkgrel=1
pkgdesc="Framework for writing cross-platform desktop applications using JavaScript, HTML and CSS."

arch=('arm' 'i686' 'x86_64')
url="https://github.com/electron/electron"
license=('MIT')

replaces=('atom-shell')

optdepends=('nodejs')
depends=('libgcrypt15' 'libnotify' 'gconf' 'alsa-lib' 'nss' 'libxtst' 'gtk2' 'libgnome-keyring')

case $CARCH in
  'arm'   ) _arch='arm' ; sha256sums=('26535f778be48844dc5ab7da56a4b54fa365aa8ae853c73dbae3f2fccd586a1d');;
  'i686'  ) _arch='ia32'; sha256sums=('1cb66fe7611232ba42b36acf06433c76635eb964f11a1f6fc17d1c0645709340');;
  'x86_64') _arch='x64' ; sha256sums=('f0e13aee7f69748eedbde21d949afc160e2edd69ea3fa3d9a5675439d6b1a5ac');;
esac

source=("electron.zip::https://github.com/electron/electron/releases/download/v${pkgver}/electron-v${pkgver}-linux-${_arch}.zip")

package() {
  rm "${srcdir}/electron.zip"

  install -d "${pkgdir}/usr/share/electron"
  cp -a "${srcdir}/." "${pkgdir}/usr/share/electron"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/electron/electron" "${pkgdir}/usr/bin/electron"

  install -Dm644 "${pkgdir}/usr/share/electron/LICENSE" "${pkgdir}/usr/share/licenses/electron/LICENSE"
  rm "${pkgdir}/usr/share/electron/LICENSE"
  ln -sf "/usr/lib/libgcrypt.so.11" "${pkgdir}/usr/share/electron/libgcrypt.so.11"
  ln -sf "/usr/lib/libnotify.so.4" "${pkgdir}/usr/share/electron/libnotify.so.4"
  ln -sf "/usr/lib/libudev.so" "${pkgdir}/usr/share/electron/libudev.so.0"

  find "${pkgdir}" -type d -exec chmod 755 {} +
  find "${pkgdir}" -type f -exec chmod 644 {} +
  chmod 755 "${pkgdir}/usr/share/electron/electron"
}
