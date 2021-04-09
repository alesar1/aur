# Maintainer: Matheus Gabriel Werny de Lima <matheusgwdl@protomail.com>

pkgname=keysmith
pkgver=0.2
pkgrel=1
epoch=
pkgdesc="OTP client for Plasma Mobile and Desktop."
arch=("any")
url="https://github.com/KDE/${pkgname}"
license=("GPL3")
groups=()
depends=("frameworkintegration" "libsodium" "qt5-base")
makedepends=("cmake" "extra-cmake-modules")
checkdepends=()
optdepends=()
provides=()
conflicts=("keysmith-git")
replaces=()
backup=()
options=()
install=
changelog=
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/KDE/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
noextract=()
md5sums=("SKIP")
validpgpkeys=()

build()
{
    mkdir -p ${srcdir}/${pkgname}-${pkgver}/build/
    cd ${srcdir}/${pkgname}-${pkgver}/build/
    cmake ..
    make
}

package()
{
    # Assure that the directories exist.
    mkdir -p ${pkgdir}/usr/share/doc/${pkgname}/
    mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}/

    # Install the software.
    cd ${srcdir}/${pkgname}-${pkgver}/build/
    sudo make install

    # Install the documentation.
    install -Dm644 ${srcdir}/${pkgname}-${pkgver}/README.md ${pkgdir}/usr/share/doc/${pkgname}/

    # Install the license.
    install -Dm644 ${srcdir}/${pkgname}-${pkgver}/LICENSES/GPL-3.0-or-later.txt ${pkgdir}/usr/share/licenses/${pkgname}/
}
