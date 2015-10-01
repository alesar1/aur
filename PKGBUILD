# Maintainer: Carl George < arch at cgtx dot us >

_name="PyGithub"
_module="github"
_check="enabled"

pkgname=("python-${_module}" "python2-${_module}")
pkgver="1.25.2"
pkgrel="5"
pkgdesc="Use the full Github API v3"
arch=("any")
url="http://jacquev6.net/${_name}/v1/"
license=("Apache")
makedepends=("python-setuptools" "python2-setuptools")
source=("https://pypi.python.org/packages/source/${_name:0:1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('72aee507625e8ce6e3bef825e2ba543d0a2a20cb5ba5edfbe6436fc6eadfcef8')

prepare() {
    cp -a "${srcdir}/${_name}-${pkgver}" "${srcdir}/${_name}-${pkgver}-python2"
}

build() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py build
    cd "${srcdir}/${_name}-${pkgver}-python2"
    python2 setup.py build
}

check() {
    if [[ "${_check}" == "enabled" ]]; then
        cd "${srcdir}/${_name}-${pkgver}"
        python setup.py test
        cd "${srcdir}/${_name}-${pkgver}-python2"
        python2 setup.py test
    else
        echo "_check is not set to \"enabled\", skipping check()"
    fi
}

package_python-github() {
    conflicts=("python-pygithub")
    depends=("python")
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --skip-build --root="${pkgdir}" --optimize=1
}

package_python2-github() {
    conflicts=("python2-pygithub")
    depends=("python2")
    cd "${srcdir}/${_name}-${pkgver}-python2"
    python2 setup.py install --skip-build --root="${pkgdir}" --optimize=1
}
