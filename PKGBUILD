# Maintainer: Jan Holthuis <holthuis.jan@googlemail.com>

pkgname=python2-fakeuseragent
_pypiname=fake-useragent
pkgver=0.0.4
pkgrel=1
pkgdesc="Up to date simple useragent faker with real world database."
arch=('any')
url="https://github.com/hellysmile/fake-useragent"
license=('Apache')
depends=('python2')
makedepends=('python2-setuptools')
conflicts=('python2-fakeuseragent-git')
provides=('python2-fakeuseragent')
source=("https://pypi.python.org/packages/source/f/${_pypiname}/${_pypiname}-${pkgver}.tar.gz")
md5sums=('792012fae10935d7dfe0f233c77367ad')

package() {
  cd "$srcdir/$_pypiname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}
