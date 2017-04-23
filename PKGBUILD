# Maintainer: Sotirios M. Roussis (xToNouSou) <xtonousou@gmail.com>

_pkgname=airgeddon
pkgname=$_pkgname-git
pkgver=r590.6e8dd63
pkgrel=6.2-1
pkgdesc='This is a multi-use bash script for Linux systems to audit wireless networks'
url='https://github.com/v1s1t0r1sh3r3/airgeddon'
license=('GPL3')
source=('git://github.com/v1s1t0r1sh3r3/airgeddon.git')
depends=(
  'aircrack-ng'
  'coreutils'
  'gawk'
  'iw'
  'net-tools'
  'sed'
  'wireless_tools'
  'xterm'
)
optdepends=(
  'curl:  for self-updating and for checking internet connection'
  'ethtool: for chipset detection'
  'pciutils:  for chipset detection'
  'rfkill:  for unblocking wireless devices'
  'usbutils:  for usb devices detection'
  'wget:  for checking internet connection'
  'xorg-xdpyinfo:  for getting the screen resolution'
)
makedepends=('git' 'coreutils' 'binutils')
conflicts=('airgeddon-git')
provides=('airgeddon-git')
sha256sums=('SKIP')
arch=('any')

prepare() {
  if [ -d "$srcdir/${pkgname}" ]; then
    rm -rf "$srcdir/${pkgname}"
  fi

  mkdir -p "$srcdir/${pkgname}"
  cd "$srcdir/${pkgname}"
}

pkgver() {
  cd "${srcdir}/${_pkgname}"
  
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/${_pkgname}"

  install -d "$pkgdir/usr/local/bin"
  install -Dm755 airgeddon.sh "$pkgdir/usr/local/bin/airgeddon"
  install -Dm755 language_strings.sh "$pkgdir/usr/local/bin/language_strings.sh"
  install -Dm755 known_pins.db "$pkgdir/usr/local/bin/known_pins.db"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}

# vim: ts=2 sw=2 et:
