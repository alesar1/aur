# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase='python2-catkin_lint'
pkgname=('python2-catkin_lint')
_module='catkin_lint'
pkgver='1.6.8'
pkgrel=2
pkgdesc="Check catkin packages for common errors"
url="https://github.com/fkie/catkin_lint"
depends=('python2' 'python2-catkin_pkg' 'python2-lxml')
provides=('python2-catkin-lint')
conflicts=('python-catkin_lint' 'python2-catkin-lint')
makedepends=('python2-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('32fffc8ff52cc49f241080381702ffc229c47a9e03606efbf43853f0d16c630f')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
