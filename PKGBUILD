# Maintainer: Christian Rebischke <Chris.Rebischke@archlinux.org>

pkgbase=python-virustotal-api
_pyname=virustotal-api
pkgname=('python-virustotal-api' 'python2-virustotal-api')
makedepends=('python' 'python2')
pkgver=1.0.9
pkgrel=1
pkgdesc="Virus Total Public/Private/Intel API"
arch=('any')
url="https://pypi.python.org/pypi/virustotal-api#downloads"
license=('MIT')
source=("https://pypi.python.org/packages/source/v/$_pyname/$_pyname-$pkgver.tar.gz")
sha512sums=('c4536f1cf656c4aa868025e3043ea7095ce8e0d09275a5769a8be1746fbdf0f1888fde0a6c9fdd1448eb34545cf528f1ba54b065a6afaa6ec716ec63d165782b')

package_python-virustotal-api() {
    depends=('python')
    cd "$srcdir/$_pyname-$pkgver"
    python setup.py install -O1 --root=$pkgdir
}

package_python2-virustotal-api() {
    depends=('python2')
    cd "$srcdir/$_pyname-$pkgver"
    python2 setup.py install -O1 --root=$pkgdir
}

# vim:set et sw=4 ts=4 tw=76:
