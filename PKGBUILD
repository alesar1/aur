# Maintainer: Edison Ibañez <edison@openmailbox.org> 

pkgname=pilas-engine
my_pkgname=pilas
pkgver=1.1.0
pkgrel=1
pkgdesc="Un motor para hacer videojuegos de manera sencilla en Python.  An engine to make games in an easy way with Python."
arch=('any')
depends=('python2' 'python2-setuptools' 'python2-pyqt4' 'box2d' 'python2-pybox2d' 'python2-pygame')
makedepends=('mercurial')
conflicts=('pilas-hg' 'pilas-git', 'pilas-engine-git')
license=('LGPL')
url="http://www.pilas-engine.com.ar"

source=("https://github.com/hugoruscitti/${pkgname}/archive/${pkgver}.zip")

package() {
    cd $srcdir/$my_pkgname-$pkgver
    python2 setup.py build
    python2 setup.py install --prefix=/usr --root "${pkgdir}" || return 1
}
md5sums=('7803101a29aadaa28ebc18d22a6a4823')
