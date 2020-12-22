# Maintainer: mehalter <micah at mehalter.com>
# Maintainer: Jean Lucas <jean@4ray.co>
# Maintainer: Luke Street <luke@street.dev>

pkgname=ghidra-bin
pkgver=9.2.1
_date=20201215
pkgrel=1
pkgdesc='Software reverse engineering framework (bin)'
arch=(x86_64)
url=https://www.nsa.gov/ghidra
license=(Apache)
provides=(ghidra)
conflicts=(ghidra)
depends=('java-environment>=11' bash)
source=(
  https://ghidra-sre.org/ghidra_${pkgver}_PUBLIC_$_date.zip
  ghidra.desktop
  ghidra.png::https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_${pkgver}_build/Ghidra/Framework/Generic/src/main/resources/images/GhidraIcon256.png
  https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_${pkgver}_build/LICENSE
)
sha256sums=('cfaeb2b5938dec90388e936f63600ad345d41b509ffed4727142ba9ed44cb5e8'
            'e4855b100fbe6b60f868cd74828d0b4ff4eda1ea0a097d3b45fcc034f77cc07f'
            '0e53f1b091046809c0f393326cadc69c27b1d574254e1094beedb312d09aa9c9'
            'c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4')

package() {
  install -d "$pkgdir"/{opt,usr/bin}
  cp -a ghidra_${pkgver}_PUBLIC "$pkgdir"/opt/ghidra
  ln -s /opt/ghidra/ghidraRun "$pkgdir"/usr/bin/ghidra
  ln -s /opt/ghidra/support/analyzeHeadless "$pkgdir"/usr/bin/ghidra-headless

  install -Dm 644 ghidra.desktop -t "$pkgdir"/usr/share/applications
  install -Dm 644 ghidra.png -t "$pkgdir"/usr/share/pixmaps
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/ghidra
}
