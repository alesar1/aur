# Maintainer: Kevin Azzam <aur@azz.am>
# Contributor: David Runge <dave@sleepmap.de>

pkgbase=python-dotenv
pkgname=('python-dotenv' 'python2-dotenv')
pkgver=0.10.3
pkgrel=1
pkgdesc="Get and set values in your .env file in local and production servers"
arch=('any')
url="https://github.com/theskumar/python-dotenv/"
license=('BSD')
makedepends=('python-click' 'python-setuptools' 'python2-click' 'python2-setuptools')
checkdepends=('python-pytest' 'python2-pytest')
source=("https://files.pythonhosted.org/packages/source/${pkgbase::1}/${pkgbase}/${pkgbase}-${pkgver}.tar.gz")
sha256sums=('f157d71d5fec9d4bd5f51c82746b6344dffa680ee85217c123f4a0c8117c4544')


build() {
    cd "${pkgbase}-${pkgver}"
    python setup.py build
    python2 setup.py build
}

# tests not included in pypi sources (yet):
# https://github.com/theskumar/python-dotenv/issues/169
# check(){
#     cd "${pkgbase}-${pkgver}"
#     export PYTHONPATH=build:${PYTHONPATH}
#     py.test
#     py.test2
#}

package_python-dotenv() {
    depends=('python-click' 'python-setuptools')
    optdepends=('ipython')
    conflicts=('python2-dotenv')
    cd "${pkgbase}-${pkgver}"
    python setup.py install --skip-build \
        --optimize=1 \
        --prefix=/usr \
        --root="${pkgdir}"
    install -vDm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
}

package_python2-dotenv() {
    depends=('python2-click' 'python2-setuptools')
    optdepends=('ipython2')
    conflicts=('python-dotenv')
    cd "${pkgbase}-${pkgver}"
    python2 setup.py install --skip-build \
        --optimize=1 \
        --prefix=/usr \
        --root="${pkgdir}"
    install -vDm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
}
