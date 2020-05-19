# Maintainer: Oystein Sture <oysstu@gmail.com>
# Contributor: 

pkgname=python-pyntcloud
pkgver=0.1.2
pkgrel=1
pkgdesc="Python library for working with 3D point clouds"
arch=("any")
license=("MIT")
url="https://github.com/daavoo/pyntcloud"
depends=('python' 'python-numpy' 'python-scipy' 'python-pandas')
optdepends=('python-laspy: LAS support' 
            'python-matplotlib: plotting support' 
            'python-pyvista: plotting support' 
            'ipython: plotting support' 
            'python-numba: numba acceleration support')
makedepends=()
source=("https://github.com/daavoo/pyntcloud/archive/v${pkgver}.tar.gz")
sha256sums=('728e4fbb376f608f37bc7594eddc2946d87adefb36f7c8cd10b26ce01a8abcd1')

build() {
    cd "pyntcloud-${pkgver}"
    python setup.py build
}

package() {
    cd "pyntcloud-${pkgver}"
    python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE.md "${pkgdir}/usr/share/licenses/python-pyntcloud/LICENSE.md"
}
