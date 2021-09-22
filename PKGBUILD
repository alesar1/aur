# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-pytest-doctestplus
_pyname=${pkgname#python-}
pkgver=0.11.0
pkgrel=1
pkgdesc="Pytest plugin that provides advanced features for testing example code in documentation"
arch=('i686' 'x86_64')
url="https://github.com/astropy/pytest-doctestplus"
license=('BSD')
depends=('python-pytest>=4.6' 'python-setuptools>=30.3.0' 'python-packaging>=17.0')
makedepends=('python-setuptools-scm')
checkdepends=('python-pytest-remotedata')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('c759b220acb20d6dc6b2247369719ef3')

prepare() {
    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
    ln -rs ${srcdir}/${_pyname}-${pkgver}/${_pyname/-/_}*egg-info \
        build/lib/${_pyname/-/_}-${pkgver}-py${_pyver}.egg-info
    PYTHONPATH="build/lib" pytest || warning "Tests failed"
}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
