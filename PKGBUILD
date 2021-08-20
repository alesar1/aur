# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>
# Contributor: ml <>
# Contributor: sum01 <sum01@protonmail.com>

pkgname=rocketchat-desktop
pkgver=3.2.4
_pkgname="Rocket.Chat.Electron-${pkgver}"
pkgrel=1
pkgdesc='Rocket.Chat Native Cross-Platform Desktop Application via Electron.'
arch=('i686' 'x86_64')
url='https://github.com/RocketChat/Rocket.Chat.Electron'
license=('MIT')
depends=('electron11')
makedepends=('nodejs>=14.17.0' 'node-gyp' 'python' 'yarn')
conflicts=('rocketchat-client-bin')
install=rocketchat-desktop.install
source=("${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        rocketchat-desktop
        rocketchat-desktop.desktop)
sha256sums=('9a1f9c042f3b7d24e155ed8602d0880b47dcc5fbc30e247aa78921233afa99ad'
            '57f2d0a2295ce4ed62a0461338d225f6c13e286ecb1ca418d722f8d4bdece6c4'
            '31fae4f98a61a774f84030fd43d2ef92c7633740dc5aa55967a21d0e29ea621a')
validpgpkeys=('9EA06BE6FD613A03') # Tasso Evangelista

prepare() {
  cd "$_pkgname"
  yarn upgrade electron@"$(</usr/lib/electron11/version)"
}

build() {
  cd "$_pkgname"
  local i686=ia32 x86_64=x64
  export NODE_ENV=production
  yarn build
  yarn run electron-builder --linux --"${!CARCH}" --dir \
    -c.electronDist=/usr/lib/electron11 \
    -c.electronVersion="$(</usr/lib/electron11/version)"
}

package() {
  local i686=linux-ia32-unpacked x86_64=linux-unpacked
  install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  install -Dm755 -t "${pkgdir}/usr/bin" "$pkgname"

  cd "$_pkgname"
  install -Dm644 "build/icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
  install -Dm644 "dist/${!CARCH}/resources/app.asar" "${pkgdir}/usr/lib/${pkgname}.asar"
}
