# Maintainer: Amos Onn <amosonn at gmail dot com>
# Maintainer: Blair Bonnett <blair dot bonnett @ gmail dot com>

pkgname=python-distributed
_pkgname=distributed
pkgver=2.10.0
pkgrel=1
pkgdesc="Python library for distributed computing"
arch=('any')
depends=(
  'python' 'python-click' 'python-cloudpickle' 'python-dask' 'python-msgpack'
  'python-psutil' 'python-sortedcontainers' 'python-tblib' 'python-toolz'
  'python-tornado' 'python-zict' 'python-yaml'
)
optdepends=(
  # Packages suggested in dev-requirements.txt
  'python-joblib: Joblib integration'
  'python-pandas: Pandas integration'
  'python-numpy: NumPy integration'
  'python-bokeh: Interactive visualisation of scheduler tasks'
  'python-pyzmq: Asynchronous messaging with ZeroMQ'
  'python-ipykernel: IPython integration for computing and debugging'
  'python-prometheus_client: Prometheus integration for monitoring and alerting'

  # Packages which have optional unit tests (pytest.importorskip calls)
  'python-keras: Support for the Keras deep learning library'
  'python-lz4: LZ4 compression of messages'
  'python-netcdf4: Support for netCDF4 data files'
  'python-numba: JIT compilation of code'
  'python-h5py: Support for the HDF5 binary data format'
  'python-asyncssh: Computing cluster using SSH communication'
  'python-pytorch: Support for tensors and dynamic neural networks'
  'python-ipywidgets: Extra widgets in diagnostic pages'
)
url="https://distributed.dask.org/"
license=('BSD')
source=(
  "https://files.pythonhosted.org/packages/source/d/distributed/distributed-$pkgver.tar.gz"
)
sha256sums=(
  '2f8cca741a20f776929cbad3545f2df64cf60207fb21f774ef24aad6f6589e8b'
)

build() {
  cd "$_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$_pkgname-$pkgver"
  python setup.py install --skip-build --root="$pkgdir" --prefix=/usr --optimize=1
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  install LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname"
}
