# Maintainer: Paulo Castro <p.oliveira.castro@gmail.com>
pkgname=python-drawnow
pkgver=0.71.2
pkgrel=1
pkgdesc="MATLAB-like drawnow"
arch=('any')
url="https://github.com/stsievert/python-drawnow"
license=('MIT')
depends=('python' 'python-matplotlib')
options=(!emptydirs)
source=("https://pypi.python.org/packages/source/d/drawnow/drawnow-0.71.2.tar.gz")
md5sums=('a8588fc4435590b6942e31101c71741c')

package() {
  cd "$srcdir/drawnow-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}
