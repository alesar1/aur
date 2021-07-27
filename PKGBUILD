# Maintainer: taotieren <admin@taotieren.com>

pkgname=esdk-settings-generator
pkgver=20.05.00.00
pkgrel=1
epoch=
pkgdesc="This is a python tool based on pydevicetree (GitHub/PyPI) which generates the settings.mk files for freedom-e-sdk."
arch=('any')
url="https://github.com/sifive/esdk-settings-generator"
license=('Apache')
groups=()
depends=('python' 'python-pylint' 'python-pydevicetree')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=('!strip')
install=
changelog=
source=("${pkgname}-${pkgver}.tar.gz::https://download.fastgit.org/sifive/esdk-settings-generator/archive/refs/tags/v${pkgver}.tar.gz")
noextract=()
sha256sums=('bab855d6323f56cc9cc5139927ba7955cc9e1458826a0c1451514d30e6a20b2c')
#validpgpkeys=()

package() {
    install -dm0755 "${pkgdir}/usr/share/sifive/${pkgname}" \
                    "${pkgdir}/usr/bin"

    cd "${srcdir}/${pkgname}-${pkgver}"
    cp -r `ls -d */` "${pkgdir}/usr/share/sifive/${pkgname}"
    cp -r generate_settings.py "${pkgdir}/usr/share/sifive/${pkgname}"
    ln -sf "/usr/share/sifive/${pkgname}/generate_settings.py" "${pkgdir}/usr/bin/${pkgname}"
}
