# Maintainer: Carl George < arch at cgtx dot us >

_name="supernova"

pkgname="${_name}"
pkgver="2.0.8"
pkgrel="1"
pkgdesc="Use novaclient with multiple OpenStack nova environments the easy way"
arch=("any")
url="https://github.com/major/${_name}"
license=("Apache")
makedepends=("python-setuptools")
conflicts=("python-supernova" "python-supernova-git" "supernova-git")
replaces=("supernova2")
source=("${url}/archive/v${pkgver}.tar.gz")
#source=("https://pypi.python.org/packages/source/${pkgname:0:1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('82011ca12911cc88b99789c9d80ebec3938673dfedfba9277d5974ca17fd8415')

build() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py build
}

package() {
    depends=("python-click"
             "python-configobj"
             "python-keyring>=0.9.2"
             "python-novaclient"
             "python-six")
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --skip-build --root="${pkgdir}" --optimize=1
    install -Dm644 "contrib/${_name}-completion.bash" "${pkgdir}/usr/share/bash-completion/completions/${_name}"
}
