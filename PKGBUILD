# Maintainer: acxz <akashpatel2008 at yahoo dot com>

pkgname=python-torch-geometric
pkgver=2.0.4
pkgrel=1
pkgdesc='Graph Neural Network Library for PyTorch'
arch=('x86_64')
url='https://pytorch-geometric.readthedocs.io'
license=('MIT')
depends=('python' 'python-tqdm' 'python-yacs' 'python-numpy' 'python-scipy'
         'python-pandas' 'python-jinja' 'python-requests' 'python-pyparsing'
         'python-hydra' 'python-scikit-learn' 'python-googledrivedownloader')
makedepends=('python' 'python-setuptools')
optdepends=('python-h5py' 'python-numba' 'python-rdflib' 'python-trimesh'
            'python-networkx' 'python-tabulate' 'python-matplotlib'
            'python-scikit-image' 'python-pytorch-memlab')
source=("$pkgname-$pkgver::https://github.com/pyg-team/pytorch_geometric/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('61b00a8c1d76455c65055645899492b37642c1bfd65a3b9beb8fe2a906d11bff')

_pkgname=pytorch_geometric

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir"/ --optimize=1
}
