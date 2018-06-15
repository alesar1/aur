# Maintainer: Joffrey <j-off@live.fr>

pkgbase='python-django-ranged-response'
pkgname=('python-django-ranged-response' 'python2-django-ranged-response')
pkgver='0.2.0'
pkgrel=1
pkgdesc='Django ranged response'
arch=('any')
url='https://pypi.org/project/django-ranged-response'
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/70/e3/9372fcdca8e9c3205e7979528ccd1a14354a9a24d38efff11c1846ff8bf1/django-ranged-response-$pkgver.tar.gz")
sha256sums=('f71fff352a37316b9bead717fc76e4ddd6c9b99c4680cdf4783b9755af1cf985')

package_python-django-ranged-response() {
	depends=('python-django')
    cd "$srcdir/django-ranged-response-$pkgver"
    python './setup.py' install --root="$pkgdir" --optimize=1
}

package_python2-django-ranged-response() {
	depends=('python2-django')
    cd "$srcdir/django-ranged-response-$pkgver"
    python2 './setup.py' install --root="$pkgdir" --optimize=1
}
