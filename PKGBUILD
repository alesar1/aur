# Maintainer: Stephen Zhang <stephen at gmail dot com>

pkgbase="python-pytorch"
pkgname=("python-pytorch" "python2-pytorch")
_pkgname="pytorch"
pkgver=0.2.0
pkgrel=3
pkgdesc="Tensors and Dynamic neural networks in Python with strong GPU acceleration"
arch=('x86_64')
url="http://pytorch.org"
license=('BSD')
makedepends=('python' 'python-setuptools' 'python2' 'python2-setuptools'
             'python-yaml' 'python2-yaml' 'python-numpy' 'python2-numpy'
             'gcc5' 'cmake')
depends=('cuda' 'cudnn')
source=("https://github.com/pytorch/pytorch/archive/v${pkgver}.tar.gz")
sha256sums=('b76d61aaa8fc18b928ca3c910c398687be08f5661d6615884c4faba3e8742a26')

prepare() {
  cd "$srcdir/"

  cd "${_pkgname}-${pkgver}"
  sed -i -e '144icp -r nccl gloo/third-party/' torch/lib/build_all.sh
  sed -i -e '470,475d' setup.py
  cd ..

  cp -a "${_pkgname}-${pkgver}" "${_pkgname}-${pkgver}-py2"
}

build() {
  msg "Building Python 2"
  cd "$srcdir/${_pkgname}-${pkgver}-py2"
  # Uncomment and modify the following line to enable Intel MKL and magma support
  #CMAKE_PREFIX_PATH=/opt/intel/mkl/include:/opt/intel/mkl/lib/intel64:/opt/magma \
  CC=gcc-5 \
  CXX=g++-5 \
  CFLAGS="${CFLAGS/-fno-plt/} -D_BITS_FLOATN_H" \
  CXXFLAGS="${CFLAGS/-fno-plt/} -D_BITS_FLOATN_H" \
  WITH_CUDA=1 \
  CUDA_HOME=/opt/cuda \
  WITH_CUDNN=1 \
  CUDNN_LIB_DIR=/opt/cuda/lib64 \
  CUDNN_INCLUDE_DIR=/opt/cuda/include \
  python2 setup.py build

  msg "Building Python 3"
  cd "$srcdir/${_pkgname}-${pkgver}"
  # Uncomment and modify the following line to enable Intel MKL and magma support
  #CMAKE_PREFIX_PATH=/opt/intel/mkl/include:/opt/intel/mkl/lib/intel64:/opt/magma \
  CC=gcc-5 \
  CXX=g++-5 \
  CFLAGS="${CFLAGS/-fno-plt/} -D_BITS_FLOATN_H" \
  CXXFLAGS="${CFLAGS/-fno-plt/} -D_BITS_FLOATN_H" \
  WITH_CUDA=1 \
  CUDA_HOME=/opt/cuda \
  WITH_CUDNN=1 \
  CUDNN_LIB_DIR=/opt/cuda/lib64 \
  CUDNN_INCLUDE_DIR=/opt/cuda/include \
  python setup.py build
}

package_python2-pytorch() {
  depends+=('python2' 'python2-yaml' 'python2-numpy')
  cd "$srcdir/${_pkgname}-${pkgver}-py2"
  python2 setup.py install --root="$pkgdir"/ --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}

package_python-pytorch() {
  depends+=('python' 'python-yaml' 'python-numpy')
  cd "$srcdir/${_pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir"/ --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}

# vim:set ts=2 sw=2 et:
