pkgbase=bxdecay0
pkgname=('bxdecay0' 'bxdecay0-geant4')
pkgver=1.0.10
pkgrel=1
pkgdesc='C++ port of the legacy Decay0 FORTRAN library'
url="https://github.com/BxCppDev/bxdecay0"
license=('GPL')
arch=('x86_64')
depends=('gsl')
makedepends=('gcc' 'cmake')
provides=('libBxDecay0.so' 'bxdecay0-config' 'bxdecay0-run')
source=("https://github.com/BxCppDev/${pkgbase}/archive/refs/tags/${pkgver}.tar.gz")
md5sums=("7bf4a0e184ea87d6cc0fad5cc8afeddc")

_package() {

    [[ "$1" == "geant4-ext" ]] && opt=ON || opt=OFF
    [[ "$1" == "geant4-ext" ]] && builddir=build-g4 || builddir=build

    cmake -B ${builddir} -S "${pkgbase}-${pkgver}" \
        -DCMAKE_BUILD_TYPE='None' \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DBXDECAY0_WITH_GEANT4_EXTENSION=${opt} \
        -Wno-dev

    make -C ${builddir}
    make -C ${builddir} test
}

package_bxdecay0() {
    conflicts=('bxdecay0-geant4')

    _package
}

package_bxdecay0-geant4() {
    depends+=('geant4')
    conflicts=('bxdecay0')
    provides+=('libBxDecay0_Geant4.so')

    _package geant4-ext
}
