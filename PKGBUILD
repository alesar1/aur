# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python2-iminuit
_pyname=${pkgbase#python2-}
pkgname=("python-${_pyname}" "python2-${_pyname}")
pkgver=1.3.3
pkgrel=1
pkgdesc="Python interface for MINUIT, a physics analysis tool for function minimization."
arch=('any')
url="http://iminuit.readthedocs.io/"
license=('GPL' 'MIT')
makedepends=('python-setuptools' 'python2-setuptools' 'python-numpy' 'python2-numpy')
checkdepends=('python-pytest' 'jupyter-nbconvert')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('35f074f44dadd4e20dd110576c8a0ffc')

prepare() {
    cd ${srcdir}/${_pyname}-${pkgver}

    cp -a ${srcdir}/${_pyname}-${pkgver}{,-py2}
}

build() {
    msg "Building Python2"
    cd ${srcdir}/${_pyname}-${pkgver}-py2
    python2 setup.py build

    msg "Building Python3"
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py test

#   cd ${srcdir}/${_pyname}-${pkgver}-py2
#   python2 setup.py test
}

package_python2-iminuit() {
    depends=('python2>=2.7' 'python2-numpy')
    optdepends=('ipython2'
                'python2-matplotlib'
                'python2-pytest-cov: For testing and get a coverage report'
                'cython2'
                'python2-sphinx: For docs building'
                'python-iminuit-doc: Documentation for python-iminuit')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python2 setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

package_python-iminuit() {
    depends=('python>=3.4' 'python-numpy')
    optdepends=('ipython'
                'python-matplotlib'
                'python-pytest-cov: For testing and get a coverage report'
                'cython'
                'python-sphinx: For docs building'
                'python-iminuit-doc: Documentation for python-iminuit')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
