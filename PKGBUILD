# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix

pkgname=headset-bin
pkgver=1.9.0
pkgrel=1
pkgdesc="An Electron-based music player for the busy ones"
arch=('x86_64')
url="https://headsetapp.co/"
license=(MIT)
depends=('alsa-lib'
         'gconf'
         'gtk2'
         'nss'
         'libxtst'
         'libxss'
         'gcc-libs')
provides=('headset')
conflicts=('headset')
source=("https://github.com/headsetapp/headset-electron/releases/download/v${pkgver}/headset_${pkgver}_amd64.deb"
        "MIT::https://github.com/headsetapp/headset-electron/raw/master/LICENSE")
md5sums=('8650064804d8ba873be09285476b40ed'
         '63f69acde84223e3a5c9545b529e9e27')

package() {
  bsdtar -xf ${srcdir}/data.tar.xz -C ${pkgdir}/
  rm -r ${pkgdir}/usr/share/lintian
  chmod 755 -R ${pkgdir}/
  install -d ${pkgdir}/usr/share/licenses/${pkgname}
  install MIT ${pkgdir}/usr/share/licenses/${pkgname}
  mv ${pkgdir}/usr/lib/headset/LICENSES.chromium.html ${pkgdir}/usr/share/licenses/${pkgname}
  mv ${pkgdir}/usr/share/doc/headset/copyright ${pkgdir}/usr/share/licenses/${pkgname}
  rm -r ${pkgdir}/usr/share/doc
}
