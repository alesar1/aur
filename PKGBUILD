# Maintainer: Ricardo (XenGi) Band <email@ricardo.band>
pkgbase=virtualfish
pkgname=('python-virtualfish' 'python2-virtualfish')
pkgver=1.0.6
pkgrel=2
pkgdesc="A virtualenv wrapper for the Fish shell"
arch=(any)
url="https://github.com/adambrenecki/virtualfish"
license=('MIT')
options=(!emptydirs)
install=virtualfish.install
source=("${pkgbase}::git+https://github.com/adambrenecki/${pkgbase}.git#tag=${pkgver}")
sha256sums=('SKIP')

prepare() {
    cp -a "$srcdir/$pkgbase"{,-py2}
}

package_python-virtualfish() {
    depends=('python-virtualenv')
    makedepends=('python-setuptools')

    cd "${srcdir}/${pkgbase}"
    python setup.py install --root="$pkgdir/" --optimize=1
}

package_python2-virtualfish() {
    depends=('python2-virtualenv')
    makedepends=('python2-setuptools')

    cd "${srcdir}/${pkgbase}-py2"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
