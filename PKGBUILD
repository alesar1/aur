# Maintainer: Jaime Martínez Rincón <jaime(at)jamezrin(dot)name>

pkgname=httptoolkit-bin
pkgver=1.1.1
pkgrel=1
pkgdesc="Beautiful, cross-platform & open-source HTTP(S) proxy, analyzer and client."
arch=("x86_64")
url="https://httptoolkit.tech/"
license=('GPL3')
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=(httptoolkit)
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/httptoolkit/httptoolkit-desktop/releases/download/v${pkgver}/HttpToolkit-${pkgver}.deb")
noextract=()
validpgpkeys=()
md5sums=('74d4af5d40dec79a276865e8aca108aa')

package() {
    # Extract package fs from deb
    bsdtar -O -xf "HttpToolkit-${pkgver}.deb" data.tar.xz | bsdtar -C "${pkgdir}" -xJf -

    # Set all directories to 755 mode
    find "${pkgdir}" -type d -exec chmod 755 {} +
}
