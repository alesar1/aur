# Maintainer: Jordan James Klassen (forivall) <forivall@gmail.com>
pkgname=caprine-bin
pkgver=1.5.0
pkgrel=1
pkgdesc="Unofficial Facebook Messenger app"
arch=('x86_64')
url="https://github.com/sindresorhus/caprine"
repo="git://github.com/sindresorhus/caprine.git"
license=('MIT')
options=(!strip)
makedepends=('xdg-utils' 'desktop-file-utils')
depends=('gconf' 'gtk2' 'libnotify' 'libxtst' 'nss' 'alsa-lib')
optdepends=('gvfs')
conflicts=('caprine')

source=(
  "Caprine-linux-v${pkgver}.zip::https://github.com/sindresorhus/caprine/releases/download/${pkgver}/Caprine-linux-${pkgver}.zip"
  "https://raw.githubusercontent.com/sindresorhus/caprine/${pkgver}/static/Icon.png"
  "caprine.desktop")
noextract=("Caprine-linux-v${pkgver}.zip")
sha256sums=('e4cea592e183f67fafae2702114780cef7b8c39098004fa686fd0104ecedb905'
            'e9cf18877fe54746d16d5f2106a67899c38f91b24d039cef43d75c62da25fc38'
            '12b68650885651f78c6c7c2eb81fe0042474a0e7b1a857213732a449106aeaf8')

package() {
  mkdir -p "${pkgdir}/usr/share/caprine"
  bsdtar -C "${pkgdir}/usr/share/caprine" -xf "${srcdir}/Caprine-linux-v${pkgver}.zip"
  mkdir -p "${pkgdir}/usr/bin"
  ln -s "/usr/share/caprine/Caprine" "${pkgdir}/usr/bin/caprine"
  RPM_BUILD_ROOT="$pkgdir" desktop-file-install "${srcdir}/caprine.desktop"
  install -Dm644 "${srcdir}/Icon.png" "${pkgdir}/usr/share/pixmaps/Caprine.png"
}
