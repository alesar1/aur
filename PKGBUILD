# Maintainer: Martin Larralde <martin.larralde@ens-paris-saclay.fr>

pkgname=fiji-plugin-morpholibj
pkgver=1.4.3.1
pkgrel=0
pkgdesc="Collection of mathematical morphology methods and plugins for ImageJ (Fiji version)"
url="https://imagej.net/MorphoLibJ"
arch=("any")
license=("LGPL3")
groups=()
makedepends=()
depends=('fiji-bin')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/ijpb/MorphoLibJ/releases/download/v${pkgver}/MorphoLibJ_-${pkgver}.jar")
noextract=()
md5sums=('d792443bb1996a30de08aab4f5ad06f8')

package() {
    install -m755 -d ${pkgdir}/opt/fiji/plugins/
    install -m644  ${srcdir}/MorphoLibJ_-${pkgver}.jar ${pkgdir}/opt/fiji/plugins/
}

