# Maintainer: Clansty <i@gao4.pw>
pkgname=electron-qq
pkgver=1.5.5
pkgrel=4
pkgdesc='A cross-platform QQ made with Electron'
license=('GPL')
depends=('electron')
optdepends=('mongodb-bin: provides faster storage'
            'redis: provides faster storage')
arch=('any')
url="https://github.com/Clansty/electron-qq"
source=("app-${pkgver}.asar::https://github.com/Clansty/${pkgname}/releases/download/v${pkgver}/app.asar"
        512x512.png
        ${pkgname}.desktop
        ${pkgname})

package() {
  install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  install -Dm644 "512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
  install -Dm644 "app-${pkgver}.asar" "${pkgdir}/usr/share/${pkgname}/${pkgname}.asar"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
} 

md5sums=('a7c525c9f8dc4a6ffec5ff80732c9f5d'
         'f6edfa276c96b746048458413b8c26ce'
         '77bdf165bded76c2bac542402e8fe35c'
         'f88f67ee85da8a00d21770ef73b02915')
