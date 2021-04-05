# Maintainer: Clansty <i@gao4.pw>
pkgname=electron-qq
pkgver=1.4.3_rc
pkgrel=5
pkgdesc='A cross-platform QQ made with Electron'
license=('GPL')
depends=('electron11')
optdepends=('mongodb-bin: provides faster storage')
arch=('any')
source=("app-${pkgver}.asar::https://files.catbox.moe/ru6knp.asar"
        512x512.png
        ${pkgname}.desktop
        ${pkgname})

package() {
  install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  install -Dm644 "512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
  install -Dm644 "app-${pkgver}.asar" "${pkgdir}/usr/share/${pkgname}/${pkgname}.asar"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
} 

md5sums=('3a3e9ae94b518049d5f2cd3e26601c70'
         'f6edfa276c96b746048458413b8c26ce'
         '77bdf165bded76c2bac542402e8fe35c'
         '7e7d23fb2905bc45943f5bcc67d1d1e2')
