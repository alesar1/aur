# Maintainer: Ian Young <ian at iangreenleaf dot com>

pkgname=gigalixir-cli
_name=gigalixir
pkgver=1.1.8
pkgrel=1
epoch=
pkgdesc="CLI tool for Gigalixir hosting service"
arch=('any')
url="https://www.gigalixir.com/"
license=('MIT')
depends=('python'
  'python-click'
  'python-requests'
  'python-stripe'
  'python-rollbar'
  'python-pygments')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=("e7a00aa5420cb63d47beb9f6cfb8dca08bf9621fc73780a80a4a97ad2fb7b170")

prepare() {
  cd "$_name-$pkgver"
  sed -e 's/stripe~=1.51/stripe>=1.28/g' -i setup.py
  sed -e 's/~=/>=/g' -i setup.py
}

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
