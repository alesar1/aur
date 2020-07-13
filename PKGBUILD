# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgname=('python-rosinstall_generator')
pkgver='0.1.22'
pkgrel=1
pkgdesc='A tool for generating rosinstall files'
arch=('any')
url='https://github.com/ros-infrastructure/rosinstall_generator'
license=('BSD')
depends=('python' 'python-argparse' 'python-catkin_pkg' 'python-rosdistro' 'python-rospkg' 'python-yaml')
makedepends=('python-setuptools')
provides=('python-rosinstall-generator')
conflicts=('python2-rosinstall_generator' 'python-rosinstall-generator')
source=("https://github.com/ros-infrastructure/rosinstall_generator/archive/${pkgver}.tar.gz")
sha256sums=('84ad54735ad7db62fa6d23326426f258d265bd469431a8d2d538779afc75ae50')

_module='rosinstall_generator'

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
