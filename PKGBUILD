# Maintainer: Razer <razer@neuf.fr>

pkgname=('python-django-celery-results')
_pypi_pkgname=('django_celery_results')
pkgver=1.2.1
pkgrel=0
pkgdesc='Celery Result Backends using the Django ORM/Cache framework'
arch=('any')
url='http://github.com/celery/django-celery-results'
license=('BSD')
makedepends=('python-setuptools' 'python-django' 'python-celery')
checkdepends=('python-django' 'python-celery')
optdepends=()              
conflicts=()
provides=('python-django-celery-results')
source=("https://pypi.io/packages/source/d/${_pypi_pkgname}/${_pypi_pkgname}-${pkgver}.tar.gz")
sha256sums=('e390f70cc43bbc2cd7c8e4607dc29ab6211a2ab968f93677583f0160921f670c')

build() {
  cd "$srcdir"/"$_pypi_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir"/"$_pypi_pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 || return 1
}
