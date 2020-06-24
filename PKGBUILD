# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: mdraw.gh at gmail dot com

pkgname='python-markovify'
pkgver='0.8.2'
pkgrel=1
pkgdesc="A simple, extensible Markov chain generator. Uses include generating random semi-plausible sentences based on an existing text."
arch=('any')
url='https://pypi.org/project/markovify/#files'
license=('MIT')
depends=('python' 'python-unidecode')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/31/02/7ff79feeaaf67b9a4e01019ff5845213300d743858ad82dfc8852783c2d6/markovify-$pkgver.tar.gz")
sha512sums=('b424db9392edcee06df21238d737871be963fad733823934b7eef0aa47c35a8d29939dfc9c111d591ab0b7fd0999d7f9ac5a6d78d8272b870e3f50e0bb80c6fb')

build() {
  cd "${srcdir}/markovify-${pkgver}"

  python setup.py build
}


package() {
  cd "${srcdir}/markovify-${pkgver}"
  python setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1 --skip-build
}

