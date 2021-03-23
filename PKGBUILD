# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-sphinx-prompt
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
pkgver=1.4.0
pkgrel=1
pkgdesc="Sphinx directive to add unselectable prompt"
arch=('i686' 'x86_64')
url="https://github.com/sbrunner/sphinx-prompt"
license=('MIT')
makedepends=('python-setuptools')
#'python-sphinx')
checkdepends=('python-sphinx' 'python-pygments')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('4b217991abf068ce9e22cf10393faf56')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py test
#   pytest #|| warning "Tests failed"
}

package_python-sphinx-prompt() {
    depends=('python-sphinx' 'python-pygments')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
