# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=ghidra-bin
pkgver=9.0.4
_date=20190516
pkgrel=4
pkgdesc='Software reverse engineering framework (bin)'
arch=(x86_64)
url=https://www.nsa.gov/ghidra
license=(Apache)
provides=(ghidra)
conflicts=(ghidra)
depends=('java-environment>=11' bash)
source=(https://ghidra-sre.org/ghidra_${pkgver}_PUBLIC_$_date.zip
        https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_${pkgver}_build/LICENSE
        ghidra.desktop
        https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_${pkgver}_build/Ghidra/Framework/Generic/src/main/resources/images/GhidraIcon256.png)
sha256sums=('a50d0cd475d9377332811eeae66e94bdc9e7d88e58477c527e9c6b78caec18bf'
            'c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4'
            '15b6fa386be85b23c879331e93124953cd724765248895a7e305c68ca698867c'
            '0e53f1b091046809c0f393326cadc69c27b1d574254e1094beedb312d09aa9c9')

package() {
  install -d "$pkgdir"/{opt,usr/bin}
  cp -a ghidra_$pkgver "$pkgdir"/opt/ghidra
  ln -s /opt/ghidra/ghidraRun "$pkgdir"/usr/bin/ghidra
  ln -s /opt/ghidra/support/analyzeHeadless "$pkgdir"/usr/bin/ghidra-headless

  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/ghidra

  install -Dm 644 ghidra.desktop -t "$pkgdir"/usr/share/applications
  install -Dm 644 GhidraIcon256.png "$pkgdir"/usr/share/pixmaps/ghidra.png
}
