# Maintainer: taotieren <admin@taotieren.com>

pkgname=ldscript-generator
pkgver=20.08.00.00
pkgrel=2
epoch=
pkgdesc="This is a python tool based on pydevicetree (GitHub/PyPI) which generates linker scripts for Freedom Metal applications."
arch=('any')
url="https://github.com/sifive/ldscript-generator"
license=('Apache')
groups=('sifive')
depends=('python' 'python-jinja-time' 'python-markupsafe' 'python-pylint' 'python-pydevicetree')
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
source=("${pkgname}-${pkgver}.tar.gz::https://download.fastgit.org/sifive/ldscript-generator/archive/refs/tags/v${pkgver}.tar.gz")
noextract=()
sha256sums=('81699bc1cc9cb6727d2b22e97192bf0431bf7018436d57cfedd13a10dc809144')
#validpgpkeys=()

package() {
    install -dm0755 "${pkgdir}/usr/share/sifive/${pkgname}" \
                    "${pkgdir}/usr/bin"

    cd "${srcdir}/${pkgname}-${pkgver}"
    cp -r `ls -d */` "${pkgdir}/usr/share/sifive/${pkgname}"
    cp -r memory_map.py "${pkgdir}/usr/share/sifive/${pkgname}"
    cp -r generate_ldscript.py "${pkgdir}/usr/share/sifive/${pkgname}"
    ln -sf "/usr/share/sifive/${pkgname}/generate_ldscript.py" "${pkgdir}/usr/bin/${pkgname}"
}
