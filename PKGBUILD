# Maintainer: Dario Piombo <piombo.dario at gmail dot com>

pkgname=rdm-bin
pkgver=2021.2
pkgrel=2
pkgdesc='Cross-platform open source database management tool for Redis ®'
arch=('x86_64')
url="https://rdm.dev/"
license=('GPL3')
depends=(
  'botan'
  'libssh2'
  'qt5-base'
  'qt5-imageformats'
  'qt5-tools'
  'qt5-declarative'
  'qt5-quickcontrols'
  'qt5-quickcontrols2'
  'qt5-charts'
  'qt5-graphicaleffects'
  'qt5-svg'
  'python'
  'python-bitstring'
  'python-cbor'
  'python-phpserialize'
  'python-pandas'
  'python-msgpack')
conflicts=('redis-desktop-manager-bin' 'redis-desktop-manager')
source=('rdm.desktop'
        "https://github.com/pidario/rdm-build/releases/download/${pkgver}/rdm"
        'https://raw.githubusercontent.com/uglide/RedisDesktopManager/2021/src/resources/images/rdm.png')
sha256sums=('5e96ea919336c483fba09fd40839a77f33dc98a0aa5e9de0c7570d9fd888f62e'
            '00b199087e5803460effcea781671b4480a191698b51d7f1ee59ba3eb2bb51b4'
            'SKIP')

package() {
  _bindir="$pkgdir/usr/bin"
  _pixdir="$pkgdir/usr/share/pixmaps"
  _appdir="$pkgdir/usr/share/applications"

  mkdir -p "${_bindir}"
  mkdir -p "${_pixdir}"
  mkdir -p "${_appdir}"

  install -Dm755 "$srcdir/rdm" "${_bindir}/rdm"
  install -Dm644 "$srcdir/rdm.png" "${_pixdir}/rdm.png"
  install -Dm644 "$srcdir/rdm.desktop" "${_appdir}/rdm.desktop"
}
