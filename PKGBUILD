# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase='python-catkin_pkg'
pkgname=('python-catkin_pkg')
_module='catkin_pkg'
pkgver='0.4.11'
pkgrel=1
pkgdesc="catkin package library"
url="http://wiki.ros.org/catkin_pkg"
depends=('python' 'python-argparse' 'python-dateutil' 'python-docutils')
provides=('python-catkin-pkg')
conflicts=('python2-catkin_pkg' 'python-catkin-pkg')
makedepends=('python-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/03/b5/a6092bc2b697110885421074d28168e0092636489fcaf22994375fe5038b/catkin_pkg-0.4.11.tar.gz")
md5sums=('ab3adff656c9921adc74cc043bc7cf1d')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
