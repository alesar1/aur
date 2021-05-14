# Maintainer: ml <>
# Contributor: sum01 <sum01@protonmail.com>
pkgname=rocketchat-desktop
pkgver=3.2.2
_pkgname="Rocket.Chat.Electron-${pkgver}"
pkgrel=1
pkgdesc='Rocket.Chat Native Cross-Platform Desktop Application via Electron.'
arch=('i686' 'x86_64')
url='https://github.com/RocketChat/Rocket.Chat.Electron'
license=('MIT')
depends=('electron11')
makedepends=('nodejs-lts-fermium' 'node-gyp' 'python' 'yarn')
conflicts=('rocketchat-client-bin')
install=rocketchat-desktop.install
source=("${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        rocketchat-desktop
        rocketchat-desktop.desktop)
sha256sums=('abbe4687972884c3e073f72e81cb04c8fdb89cdb3b83af3ec9564860adb72372'
            '57f2d0a2295ce4ed62a0461338d225f6c13e286ecb1ca418d722f8d4bdece6c4'
            '31fae4f98a61a774f84030fd43d2ef92c7633740dc5aa55967a21d0e29ea621a')

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
