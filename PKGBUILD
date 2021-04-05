# Maintainer: Astro Benzene <universebenzene at sina dot com>
_pyname=tweakwcs
pkgname=python-${_pyname}-doc
pkgver=0.7.1
pkgrel=1
pkgdesc="Documentation for tweakwcs"
arch=('i686' 'x86_64')
url="https://tweakwcs.readthedocs.io"
license=('BSD')
makedepends=("python-${_pyname}=${pkgver}" 'python-numpydoc' 'python-sphinx_rtd_theme' 'python-stsci_rtd_theme' 'texlive-latexextra')
source=("https://github.com/spacetelescope/${_pyname}/archive/${pkgver}.tar.gz")
md5sums=('d10f38fd4fe6a861e0f9cb054c6b2897')

prepare() {
    cd ${srcdir}/${_pyname}-${pkgver}

    mv ${_pyname} _${_pyname}
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}/docs

    make html
}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../LICENSE.txt
    install -d -m755 "${pkgdir}/usr/share/doc/${pkgname%-doc}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgname%-doc}"
}
