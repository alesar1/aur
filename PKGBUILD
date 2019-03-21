pkgname=python-pydotplus
pkgver=2.0.2
pkgrel=1
pkgdesc='Interface to Graphviz’s Dot language'
arch=('any')
url='https://github.com/carlos-jenkins/pydotplus'
license=('MIT')
makedepends=('python-setuptools')
depends=('python-pyparsing' 'graphviz')
source=("https://pypi.python.org/packages/60/bf/62567830b700d9f6930e9ab6831d6ba256f7b0b730acb37278b0ccdffacf/pydotplus-2.0.2.tar.gz")
md5sums=('0e2fc3dbdfd846819d4cd3769cb4595b')

build() {
  cd "${srcdir}"/pydotplus-$pkgver
  python setup.py build
} 

package() {
  cd "${srcdir}"/pydotplus-$pkgver
  python setup.py install --root="${pkgdir}" --optimize=1
}


