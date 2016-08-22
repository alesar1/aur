# Maintainer: Yardena Cohen <yardenack at gmail dot com>
# Contributor: Matt Hamilton <m at tthamilton dot com>

_pkgname=tqdm
pkgname=(python-${_pkgname} python2-${_pkgname})
pkgver=4.8.4
pkgrel=1
pkgdesc="Simple Python Progress Meter"
arch=('any')
url="https://pypi.python.org/pypi/tqdm"
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
depends=('python')
options=('!emptydirs')
source=(https://github.com/tqdm/tqdm/releases/download/v${pkgver}/tqdm-${pkgver}.tar.gz)
sha512sums=('69bae17df10a0cdd3f85e3f613d78b3e22fc21fb0260598bc1bc42ab517673ec71d13aa5b72641b5e984b78d6c82dca04f1211fcd1ee08da468fee2eb20d2062')

prepare() {
    cp -a "${srcdir}/${_pkgname}-${pkgver}"{,-py2}
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py build

    cd "${srcdir}/${_pkgname}-${pkgver}-py2"
    python2 setup.py build
}

package_python-tqdm() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python  setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-tqdm() {
    cd "${srcdir}/${_pkgname}-${pkgver}-py2"
    python2 setup.py install --root="${pkgdir}" --optimize=1

    # Prevent both python2 and python3 packages from installing executable
    # in the same place, prefer python3.
    rm -f "${pkgdir}/usr/bin/tqdm"
}
