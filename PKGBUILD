# Maintainer: dianlujitao <dianlujitao[at]gmail[dot]com>

_pkgname=jadx
pkgname=jadx-unstable-bin
pkgver=0.7.0
_pkgver=b375-d42bf2d
pkgrel=2
pkgdesc='Command line and GUI tools to produce Java source code from Android Dex and APK files'
url='https://github.com/skylot/jadx'
arch=('any')
license=('Apache')
depends=('java-runtime' 'bash' 'fontconfig' 'xorg-font-utils')
provides=('jadx')
conflicts=('jadx')
source=("https://dl.bintray.com/skylot/$_pkgname/${_pkgname}-${pkgver}-${_pkgver}.zip")
sha256sums=('59b248cc18bdbbc5767ac92544538936c2eaa3091bbc8a09e60d9c959dc23966')

package() {
  install -Dm 755 bin/jadx "${pkgdir}/usr/share/java/${_pkgname}/bin/jadx"
  install -Dm 755 bin/jadx-gui "${pkgdir}/usr/share/java/${_pkgname}/bin/jadx-gui"
  install -Dm 644 lib/* -t "${pkgdir}/usr/share/java/${_pkgname}/lib"

  install -d "${pkgdir}/usr/bin"
  ln -s /usr/share/java/${_pkgname}/bin/jadx "${pkgdir}/usr/bin/jadx"
  ln -s /usr/share/java/${_pkgname}/bin/jadx-gui "${pkgdir}/usr/bin/jadx-gui"

  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
  install -Dm 644 NOTICE "${pkgdir}/usr/share/doc/${_pkgname}/NOTICE"
  install -Dm 644 README.md "${pkgdir}/usr/share/doc/${_pkgname}/README.md"
}
