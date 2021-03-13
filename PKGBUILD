# Maintainer: Clansty <i@gao4.pw>
pkgname=electron-qq
pkgver=1.3.0
pkgrel=2
pkgdesc='A cross-platform QQ made with Electron'
license=('GPL')
depends=('electron')
arch=('any')
source=("app.asar::https://ipfs.io/ipfs/QmdKTamBXKDtvki7fyJpbvSoj3M91EotTAWsWCwgdKv1JM"
        512x512.png
        electron-qq.desktop
        ${pkgname})

package() {
  install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  install -Dm644 "512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
  install -Dm644 "app.asar" "${pkgdir}/usr/lib/${pkgname}.asar"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/local/sbin/${pkgname}"
} 

md5sums=('4a1aed9673062c864194d365bf704a1e'
         'f6edfa276c96b746048458413b8c26ce'
         '77bdf165bded76c2bac542402e8fe35c'
         '58617d5f16ae1ba9041e19f87faa798f')
