# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
# Contributor: Francois Boulogne <fboulogne at april dot org>

pkgname='python-dask'
_pkgname=dask
pkgver=2.10.1
pkgrel=1
pkgdesc="Minimal task scheduling abstraction"
arch=('any')
url="https://github.com/dask/dask"
license=('BSD')
checkdepends=('python-bcolz' 'python-cachey' 'python-pytest')
depends=('python' 'python-fsspec' 'python-numpy' 'python-scipy' 'python-pandas' 'python-toolz' 'python-cloudpickle' 'python-partd>=0.3.8' 'python-yaml')
optdepends=('ipython: ipython integration'
  'python-bcolz'
  'python-bokeh'
  'python-cachey'
  'python-cityhash: faster hashing'
  'python-distributed'
  'python-fastparquet: Parquet support'
  'python-graphviz'
  'python-h5py: hdf5 support'
  'python-psutil'
  'python-pyarrow: Parquet support'
  'python-sparse: sparse data support'
  'python-s3fs: S3 support'
  'python-gcsfs: Google Cloud Storage fs support'
  'python-zarr')
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/dask/dask/archive/$pkgver.tar.gz")
sha256sums=('d6854934ea53beb86e790f7bd73953d1fa7b739e17687167952ed562273c8314')

package(){
  cd "$srcdir/$_pkgname-$pkgver"
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1
}

check(){
  cd "$srcdir/$_pkgname-$pkgver"
  pytest dask/tests 
}
# vim:ts=2:sw=2:et:
