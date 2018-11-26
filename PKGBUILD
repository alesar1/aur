_pkgname=libsass
pkgname=python-libsass
pkgver=0.16.1
pkgrel=1
pkgdesc="Sass for Python: A straightforward binding of libsass for Python."
arch=('x86_64')
url="https://sass.github.io/libsass-python/"
license=('MIT')
depends=('python' 'python-six' 'libsass' 'python-setuptools')
_name=${pkgname#python-}
makedepends=('gcc')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('a230ec627cd355b9154b5afe7d6006d5')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
