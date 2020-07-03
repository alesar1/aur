# Maintainer: acxz <akashpatel2008 at yahoo dot com>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: Stephen Zhang <zsrkmyn at gmail dot com>

pkgbase=python-pytorch-rocm
pkgname=("python-pytorch-rocm" "python-pytorch-opt-rocm")
_pkgname="pytorch"
pkgver=1.5.0
pkgrel=1
pkgdesc="Tensors and Dynamic neural networks in Python with strong GPU acceleration"
arch=('x86_64')
url="https://pytorch.org"
license=('BSD')
depends=('google-glog' 'gflags' 'opencv' 'openmp' 'rccl' 'pybind11' 'python' 'python-yaml'
         'python-numpy' 'protobuf' 'ffmpeg' 'python-future' 'qt5-base' 'onednn' 'intel-mkl')
makedepends=('python' 'python-setuptools' 'python-yaml' 'python-numpy' 'cmake' 'rocm'
             'git' 'magma' 'ninja' 'pkgconfig' 'doxygen')
source=("${_pkgname}-${pkgver}::git+https://github.com/pytorch/pytorch.git#tag=v$pkgver"
        https://patch-diff.githubusercontent.com/raw/pytorch/pytorch/pull/35359.patch
        fix_include_system.patch)
sha256sums=('SKIP'
            '1a67a90174276e9462e632df1bbb2e9fd7890f08da45d831edf1610c0e3e3c72'
            '147bdaeac8ec46ea46382e6146878bd8f8d51e05d5bd6f930dfd8e2b520859b9')

get_pyver () {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

prepare() {
  cd "${_pkgname}-${pkgver}"

  # This is the lazy way since pytorch has sooo many submodules and they keep
  # changing them around but we've run into more problems so far doing it the
  # manual than the lazy way. This lazy way (not explicitly specifying all
  # submodules) will make building inefficient but for now I'll take it.
  # It will result in the same package, don't worry.
  git submodule update --init --recursive

  # https://github.com/pytorch/pytorch/pull/35359
  patch -Np1 -i "${srcdir}/35359.patch"

  # https://bugs.archlinux.org/task/64981
  patch -N torch/utils/cpp_extension.py "${srcdir}"/fix_include_system.patch

  # remove local nccl
  rm -rf third_party/nccl/nccl

  cd ..

  cp -a "${_pkgname}-${pkgver}" "${_pkgname}-${pkgver}-rocm"
  cp -a "${_pkgname}-${pkgver}" "${_pkgname}-${pkgver}-opt-rocm"

  export VERBOSE=1
  export PYTORCH_BUILD_VERSION="${pkgver}"
  export PYTORCH_BUILD_NUMBER=1

  # Check tools/setup_helpers/cmake.py, setup.py and CMakeLists.txt for a list of flags that can be set via env vars.
  export USE_MKLDNN=ON
  # export BUILD_CUSTOM_PROTOBUF=OFF
  # export BUILD_SHARED_LIBS=OFF
  export USE_FFMPEG=ON
  export USE_GFLAGS=ON
  export USE_GLOG=ON
  export BUILD_BINARY=ON
  export USE_OPENCV=ON
  export USE_SYSTEM_NCCL=ON
  export NCCL_VERSION=$(pkg-config nccl --modversion)
  export NCCL_VER_CODE=$(sed -n 's/^#define NCCL_VERSION_CODE\s*\(.*\).*/\1/p' /usr/include/nccl.h)
  export CUDAHOSTCXX=g++-8
  export CUDA_HOME=/opt/cuda
  export CUDNN_LIB_DIR=/usr/lib
  export CUDNN_INCLUDE_DIR=/usr/include
  export TORCH_NVCC_FLAGS="-Xfatbin -compress-all"
  export TORCH_CUDA_ARCH_LIST="3.2;3.5;3.7;5.0;5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX"
}

build() {
  echo "Building with rocm and without non-x86-64 optimizations"
  export USE_ROCM=1
  cd "${srcdir}/${_pkgname}-${pkgver}-rocm"
  python setup.py build


  echo "Building with rocm and with non-x86-64 optimizations"
  export USE_ROCM=1
  cd "${srcdir}/${_pkgname}-${pkgver}-opt-rocm"
  echo "add_definitions(-march=haswell)" >> cmake/MiscCheck.cmake
  python setup.py build
}

_package() {
  # Prevent setup.py from re-running CMake and rebuilding
  sed -e 's/RUN_BUILD_DEPS = True/RUN_BUILD_DEPS = False/g' -i setup.py

  python setup.py install --root="${pkgdir}"/ --optimize=1 --skip-build

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  pytorchpath="usr/lib/python$(get_pyver)/site-packages/torch"
  install -d "${pkgdir}/usr/lib"

  # put CMake files in correct place
  mv "${pkgdir}/${pytorchpath}/share/cmake" "${pkgdir}/usr/lib/cmake"

  # put C++ API in correct place
  mv "${pkgdir}/${pytorchpath}/include" "${pkgdir}/usr/include"
  mv "${pkgdir}/${pytorchpath}/lib"/*.so* "${pkgdir}/usr/lib/"

  # clean up duplicates
  # TODO: move towards direct shared library dependecy of:
  #   c10, caffe2, libcpuinfo, CUDA RT, gloo, GTest, Intel MKL,
  #   NVRTC, ONNX, protobuf, libthreadpool, QNNPACK
  rm -rf "${pkgdir}/usr/include/pybind11"

  # python module is hardcoded to look there at runtime
  ln -s /usr/include "${pkgdir}/${pytorchpath}/include"
  find "${pkgdir}"/usr/lib -type f -name "*.so*" -print0 | while read -rd $'\0' _lib; do
    ln -s ${_lib#"$pkgdir"} "${pkgdir}/${pytorchpath}/lib/"
  done
}

package_python-pytorch-rocm() {
  pkgdesc="Tensors and Dynamic neural networks in Python with strong GPU acceleration (with ROCM)"
  depends+=(rocm magma)
  conflicts=(python-pytorch)
  provides=(python-pytorch)

  cd "${srcdir}/${_pkgname}-${pkgver}-rocm"
  _package
}

package_python-pytorch-opt-rocm() {
  pkgdesc="Tensors and Dynamic neural networks in Python with strong GPU acceleration (with ROCM and CPU optimizations)"
  depends+=(rocm cudnn magma)
  conflicts=(python-pytorch)
  provides=(python-pytorch python-pytorch-rocm)

  cd "${srcdir}/${_pkgname}-${pkgver}-opt-rocm"
  _package
}

# vim:set ts=2 sw=2 et:
