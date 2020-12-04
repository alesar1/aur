# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgname=('python-catkin_tools')
pkgver='0.4.5'
pkgrel=4
pkgdesc='Command line tools for working with catkin'
arch=('any')
url='https://github.com/catkin/catkin_tools'
license=('Apache')
depends=('python' 'python-catkin_pkg' 'python-osrf_pycommon' 'python-yaml')
makedepends=('python-setuptools')
provides=('python-catkin-tools')
conflicts=('python2-catkin_tools' 'python-catkin-tools')
source=("https://github.com/catkin/catkin_tools/archive/${pkgver}.tar.gz"
        "execution-controllers-python3.patch"
        "no-trollius-py39.patch")
sha256sums=('6a9a2512183824a8250979c7772dc9487e3d2830a956fbd52fd2d8d71fba6d58'
            'c56697c2d8baaca3c586d0c6479739b1b992d82b99332822bcc35c95bb577ac4'
            '9a2625194f9e615b973c587d323b06e23b699ba20f7f8c4e32e56f51cb7af649')

_module='catkin_tools'

prepare() {
    cd "${srcdir}/${_module}-${pkgver}"
    patch -p1 -i "${srcdir}/execution-controllers-python3.patch"
    patch -p1 -i "${srcdir}/no-trollius-py39.patch"
}

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
