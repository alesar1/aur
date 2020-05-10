# Maintainer: Kevin Azzam <aur@azz.am>
# Contributor: David Runge <dave@sleepmap.de>

pkgbase=python-dotenv
pkgname=('python-dotenv' 'python2-dotenv')
pkgver=0.13.0
pkgrel=1
pkgdesc="Get and set values in your .env file in local and production servers"
arch=('any')
url="https://github.com/theskumar/python-dotenv/"
license=('BSD')
depends=('python-click' 'python2-click')
makedepends=('python-setuptools' 'python2-setuptools')
# checkdepends=('python-pytest' 'python-sh' 'python2-pytest' 'python2-sh')
source=("https://files.pythonhosted.org/packages/source/${pkgbase::1}/${pkgbase}/${pkgbase}-${pkgver}.tar.gz")
sha256sums=('3b9909bc96b0edc6b01586e1eed05e71174ef4e04c71da5786370cebea53ad74')


build() {
    cd "${pkgbase}-${pkgver}"
    python setup.py build
    python2 setup.py build
}

# Doesn't look like we can do seperate checks in split packages
# Or at least I didn't yet figure it out - tips welcome!
# check() {
#     cd "${pkgbase}-${pkgver}"
#     export PYTHONPATH=build:${PYTHONPATH}
#     py.test
#     py.test2
# }

package_python-dotenv() {
    depends=('python-click')
    optdepends=('ipython')

    cd "${pkgbase}-${pkgver}"
    python setup.py install --skip-build \
        --optimize=1 \
        --prefix=/usr \
        --root="${pkgdir}"
    install -vDm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
}

package_python2-dotenv() {
    depends=('python2-click')
    optdepends=('ipython2')

    cd "${pkgbase}-${pkgver}"
    python2 setup.py install --skip-build \
        --optimize=1 \
        --prefix=/usr \
        --root="${pkgdir}"
    install -vDm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
    mv "${pkgdir}/usr/bin/dotenv" "${pkgdir}/usr/bin/dotenv2"
}
