# Maintainer:  charlie5 on #ada @ freenode
# Contributor: Julian Leyh <julian@vgai.de>

pkgname=sphinxcontrib-adadomain
pkgver=0.2
pkgrel=1
pkgdesc="Adds Ada domain support to Sphinx."
arch=('any')
url="https://bitbucket.org/tkoskine/sphinxcontrib-adadomain"
license=('BSD')
depends=('python2-sphinx')

source=(https://bitbucket.org/tkoskine/sphinxcontrib-adadomain/get/b467b5bb918b.zip)
sha256sums=('b7680ae711290c9a300234dccb6afad0956b1a6af011ee6ae4dbf2f152aeef10')

package() {
  cd "$srcdir/tkoskine-sphinxcontrib-adadomain-b467b5bb918b"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}
