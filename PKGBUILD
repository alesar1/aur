# Maintainer:
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Daniel Wallace <danielwallace at gtmanfred dot com>
# Contributor: Lex Black <autumn-wind at web dot de>
# Contributor: Alasdair Haswell <ali at arhaswell dot co dot uk>

_name=apache-libcloud
pkgname=python-apache-libcloud
pkgver=2.8.0
pkgrel=1
pkgdesc="standard Python library that abstracts away differences among multiple cloud provider APIs"
arch=('any')
url="https://libcloud.apache.org"
license=('Apache')
depends=('python-requests')
makedepends=('python-setuptools')
checkdepends=('python-mock' 'python-pytest-runner' 'openssh' 'python-requests-mock')
source=(https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz{,.asc})
sha512sums=('b041c85b80279b63ca38e8fd778794ce065dee2906919577b207e225f1647767eab02f316a50a6c4da3ed3f5827a584a932a06aa745fc82f8bc104c1bfe6551b'
            'SKIP')
validpgpkeys=('3ACBB4086C01F7376628088CAB4A19AE1CE85744'  # Anthony Shaw <anthonyshaw@apache.org>
              '35542BB9C0C01D5E5478BADE6A61AF8545413203') # Quentin Pradet <quentin.pradet@gmail.com>


build() {
  cd $_name-$pkgver
  python setup.py build
}

check() {
  cd $_name-$pkgver
  cp libcloud/test/secrets.py-dist libcloud/test/secrets.py
  python setup.py test
  rm libcloud/test/secrets.py
}

package() {
  cd $_name-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
