# Maintainer: Antoine Viallon <antoine@lesviallon.fr>
# Maintainer (repos): Sven-Hendrik Haase <svenstaro@gmail.com>
# Maintainer (repos): Konstantin Gizdov (kgizdov) <arch@kge.pw>
# Contributor: Adria Arrufat (archdria) <adria.arrufat+AUR@protonmail.ch>
# Contributor: Thibault Lorrain (fredszaq) <fredszaq@gmail.com>

pkgbase=tensorflow-opt-native
pkgname=(tensorflow-opt-native tensorflow-opt-native-cuda python-tensorflow-opt-native python-tensorflow-opt-native-cuda)
pkgver=2.3.1
_pkgver=2.3.1
pkgrel=5
pkgdesc="Library for computation using data flow graphs for scalable machine learning (with CFLAGS)"
url="https://www.tensorflow.org/"
license=('APACHE')
arch=('x86_64')
depends=('c-ares' 'intel-mkl' 'onednn' 'pybind11' 'openssl-1.0' 'lmdb' 'libpng' 'curl' 'giflib' 'icu' 'libjpeg-turbo')
makedepends=('bazel' 'python-numpy' 'cuda' 'nvidia-utils' 'nccl' 'git' 'gcc9'
             'cudnn' 'python-pip' 'python-wheel' 'python-setuptools' 'python-h5py'
             'python-keras-applications' 'python-keras-preprocessing'
             'cython')
optdepends=('tensorboard: Tensorflow visualization toolkit')
source=("$pkgname-$pkgver.tar.gz::https://github.com/tensorflow/tensorflow/archive/v${_pkgver}.tar.gz"
        https://github.com/tensorflow/tensorflow/commit/c6769e20bf6096d5828e2590def2b25edb3189d6.patch
        numpy1.20.patch::https://github.com/tensorflow/tensorflow/commit/75ea0b31477d6ba9e990e296bbbd8ca4e7eebadf.patch
        cuda11.1.patch
        fix-h5py3.0.patch
        build-against-actual-mkl.patch)
sha512sums=('e497ef4564f50abf9f918be4522cf702f4cf945cb1ebf83af1386ac4ddc7373b3ba70c7f803f8ca06faf2c6b5396e60b1e0e9b97bfbd667e733b08b6e6d70ef0'
            '9dcaef0dd4fdd7008a27e383ef87c97990ba883a3094f214f821a039994933ec6ec47f5a832570e5c4b783e0493ce2236e7957e596395c4dee40f9bf2621ff2f'
            'df2e0373e2f63b8766f31933f7db57f6a7559b8f03af1db51644fba87731451a7cd3895529a3192e5394612fcb42f245b794b1c9ca3c05881ca03a547c8c9acc'
            '0caa5170c22fdea2c708ecdb2c980d668464d9dba9c9730a9ec5e9258572576d783fa1d19da04d5f9d2b06aed36d30971526f212fc64c53d09c3e821bd1a3b5d'
            '9d7b71fed280ffaf4dfcd4889aa9ab5471874c153259f3e77ed6e6efa745e5c5aa8507d3d1f71dead5b6f4bea5f8b1c10c543929f37a6580c3f4a7cbec338a6a'
            'e51e3f3dced121db3a09fbdaefd33555536095584b72a5eb6f302fa6fa68ab56ea45e8a847ec90ff4ba076db312c06f91ff672e08e95263c658526582494ce08')

get_pyver () {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

check_dir() {
  if [ -d "${1}" ]; then
    return 0
  else
    >&2 echo Directory "${1}" does not exist or is a file! Exiting...
    exit 1
  fi
}

prepare() {
  # Allow any bazel version
  echo "*" > tensorflow-${_pkgver}/.bazelversion

  # Tensorflow actually wants to build against a slimmed down version of Intel MKL called MKLML
  # See https://github.com/intel/mkl-dnn/issues/102
  # MKLML version that Tensorflow wants to use is https://github.com/intel/mkl-dnn/releases/tag/v0.21
  patch -Np1 -d tensorflow-${_pkgver} -i "$srcdir"/build-against-actual-mkl.patch

  # Fix wrong SONAME being shipped in CUDA 11.1
  patch -Np1 -d tensorflow-${_pkgver} -i "$srcdir"/cuda11.1.patch

  # Compile with C++17 by default (FS#65953)
  #sed -i "s/c++14/c++17/g" tensorflow-${_pkgver}/.bazelrc

  patch -Np1 -d tensorflow-${_pkgver} -i "$srcdir"/numpy1.20.patch

  # FS#68488
  patch -Np1 -d tensorflow-${_pkgver} -i "$srcdir"/fix-h5py3.0.patch

  cp -r tensorflow-${_pkgver} tensorflow-${_pkgver}-opt-native
  cp -r tensorflow-${_pkgver} tensorflow-${_pkgver}-opt-native-cuda

  # These environment variables influence the behavior of the configure call below.
  export PYTHON_BIN_PATH=/usr/bin/python
  export USE_DEFAULT_PYTHON_LIB_PATH=1
  export TF_NEED_JEMALLOC=1
  export TF_NEED_KAFKA=1
  export TF_NEED_OPENCL_SYCL=0
  export TF_NEED_AWS=1
  export TF_NEED_GCP=1
  export TF_NEED_HDFS=1
  export TF_NEED_S3=1
  export TF_ENABLE_XLA=1
  export TF_NEED_GDR=0
  export TF_NEED_VERBS=0
  export TF_NEED_OPENCL=0
  export TF_NEED_MPI=0
  export TF_NEED_TENSORRT=0
  export TF_NEED_NGRAPH=0
  export TF_NEED_IGNITE=0
  export TF_NEED_ROCM=0
  # See https://github.com/tensorflow/tensorflow/blob/master/third_party/systemlibs/syslibs_configure.bzl
  export TF_SYSTEM_LIBS="boringssl,curl,cython,gif,icu,libjpeg_turbo,lmdb,nasm,pcre,png,pybind11,zlib"
  export TF_SET_ANDROID_WORKSPACE=0
  export TF_DOWNLOAD_CLANG=0
  export TF_NCCL_VERSION=2.7
  export TF_IGNORE_MAX_BAZEL_VERSION=1
  export TF_MKL_ROOT=/opt/intel/mkl
  export NCCL_INSTALL_PATH=/usr
  export GCC_HOST_COMPILER_PATH=/usr/bin/gcc-9
  export HOST_C_COMPILER=/usr/bin/gcc-9
  export HOST_CXX_COMPILER=/usr/bin/g++-9
  export TF_CUDA_CLANG=0  # Clang currently disabled because it's not compatible at the moment.
  export CLANG_CUDA_COMPILER_PATH=/usr/bin/clang
  export TF_CUDA_PATHS=/opt/cuda,/usr/lib,/usr
  export TF_CUDA_VERSION=$(/opt/cuda/bin/nvcc --version | sed -n 's/^.*release \(.*\),.*/\1/p')
  export TF_CUDNN_VERSION=$(sed -n 's/^#define CUDNN_MAJOR\s*\(.*\).*/\1/p' /usr/include/cudnn_version.h)
  if [[ -z "$COMPUTE_CAPABILITIES" ]]; then
	COMPUTE_CAPABILITIES=5.2,5.3,6.0,6.1,6.2,7.0,7.2,7.5,8.0,8.6
  else
    echo -e "\e[1mCUDA compute capabilites overriden by env: \e[0m${COMPUTE_CAPABILITIES}"
  fi
  export TF_CUDA_COMPUTE_CAPABILITIES=$COMPUTE_CAPABILITIES

  # Required until https://github.com/tensorflow/tensorflow/issues/39467 is fixed.
  export CC=gcc-9
  export CXX=g++-9

  export BAZEL_ARGS="--config=mkl -c opt --copt=-I/usr/include/openssl-1.0 --host_copt=-I/usr/include/openssl-1.0 --linkopt=-l:libssl.so.1.0.0 --linkopt=-l:libcrypto.so.1.0.0 --host_linkopt=-l:libssl.so.1.0.0 --host_linkopt=-l:libcrypto.so.1.0.0"
}

build() {
  echo "Building without cuda and with native optimizations"
  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native
  export CC_OPT_FLAGS="$CFLAGS -O3 -funsafe-math-optimizations"

  _copts=()
  for copt in $CC_OPT_FLAGS; do
    _copts+=(--copt="$copt")
  done
  echo ${_copts}
  echo ${_copts[@]}

  export TF_NEED_CUDA=0
  ./configure
  bazel \
    build --config=avx2_linux \
      ${BAZEL_ARGS[@]} \
      ${_copts[@]} \
      //tensorflow:libtensorflow.so \
      //tensorflow:libtensorflow_cc.so \
      //tensorflow:install_headers \
      //tensorflow/tools/pip_package:build_pip_package
  bazel-bin/tensorflow/tools/pip_package/build_pip_package "${srcdir}"/tmpopt


  echo "Building with cuda and with non-x86-64 optimizations"
  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native-cuda
  export CC_OPT_FLAGS="$CFLAGS -O3 -funsafe-math-optimizations"
  export TF_NEED_CUDA=1
  export TF_CUDA_CLANG=0
  ./configure
  bazel \
    build --config=avx2_linux \
      ${BAZEL_ARGS[@]} \
      ${_copts[@]} \
      //tensorflow:libtensorflow.so \
      //tensorflow:libtensorflow_cc.so \
      //tensorflow:install_headers \
      //tensorflow/tools/pip_package:build_pip_package
  bazel-bin/tensorflow/tools/pip_package/build_pip_package --gpu "${srcdir}"/tmpoptcuda
}

_package() {
  # install headers first
  install -d "${pkgdir}"/usr/include/tensorflow
  cp -r bazel-bin/tensorflow/include/* "${pkgdir}"/usr/include/tensorflow/
  # install python-version to get all extra headers
  WHEEL_PACKAGE=$(find "${srcdir}"/$1 -name "tensor*.whl")
  pip install --ignore-installed --upgrade --root "${pkgdir}"/ $WHEEL_PACKAGE --no-dependencies
  # move extra headers to correct location
  local _srch_path="${pkgdir}/usr/lib/python$(get_pyver)"/site-packages/tensorflow/include
  check_dir "${_srch_path}"  # we need to quit on broken search paths
  find "${_srch_path}" -maxdepth 1 -mindepth 1 -type d -print0 | while read -rd $'\0' _folder; do
    cp -nr "${_folder}" "${pkgdir}"/usr/include/tensorflow/
  done
  # clean up unneeded files
  rm -rf "${pkgdir}"/usr/bin
  rm -rf "${pkgdir}"/usr/lib
  rm -rf "${pkgdir}"/usr/share

  # install the rest of tensorflow
  tensorflow/c/generate-pc.sh --prefix=/usr --version=${pkgver}
  sed -e 's@/include$@/include/tensorflow@' -i tensorflow.pc -i tensorflow_cc.pc
  install -Dm644 tensorflow.pc "${pkgdir}"/usr/lib/pkgconfig/tensorflow.pc
  install -Dm644 tensorflow_cc.pc "${pkgdir}"/usr/lib/pkgconfig/tensorflow_cc.pc
  install -Dm755 bazel-bin/tensorflow/libtensorflow.so "${pkgdir}"/usr/lib/libtensorflow.so.${pkgver}
  ln -s libtensorflow.so.${pkgver} "${pkgdir}"/usr/lib/libtensorflow.so.${pkgver:0:1}
  ln -s libtensorflow.so.${pkgver:0:1} "${pkgdir}"/usr/lib/libtensorflow.so
  install -Dm755 bazel-bin/tensorflow/libtensorflow_cc.so "${pkgdir}"/usr/lib/libtensorflow_cc.so.${pkgver}
  ln -s libtensorflow_cc.so.${pkgver} "${pkgdir}"/usr/lib/libtensorflow_cc.so.${pkgver:0:1}
  ln -s libtensorflow_cc.so.${pkgver:0:1} "${pkgdir}"/usr/lib/libtensorflow_cc.so
  install -Dm755 bazel-bin/tensorflow/libtensorflow_framework.so "${pkgdir}"/usr/lib/libtensorflow_framework.so.${pkgver}
  ln -s libtensorflow_framework.so.${pkgver} "${pkgdir}"/usr/lib/libtensorflow_framework.so.${pkgver:0:1}
  ln -s libtensorflow_framework.so.${pkgver:0:1} "${pkgdir}"/usr/lib/libtensorflow_framework.so
  install -Dm644 tensorflow/c/c_api.h "${pkgdir}"/usr/include/tensorflow/tensorflow/c/c_api.h
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}

_python_package() {
  WHEEL_PACKAGE=$(find "${srcdir}"/$1 -name "tensor*.whl")
  pip install --ignore-installed --upgrade --root "${pkgdir}"/ $WHEEL_PACKAGE --no-dependencies

  # create symlinks to headers
  local _srch_path="${pkgdir}/usr/lib/python$(get_pyver)"/site-packages/tensorflow/include/
  check_dir "${_srch_path}"  # we need to quit on broken search paths
  find "${_srch_path}" -maxdepth 1 -mindepth 1 -type d -print0 | while read -rd $'\0' _folder; do
    rm -rf "${_folder}"
    _smlink="$(basename "${_folder}")"
    ln -s /usr/include/tensorflow/"${_smlink}" "${_srch_path}"
  done

  # tensorboard has been separated from upstream but they still install it with
  # tensorflow. I don't know what kind of sense that makes but we have to clean
  # it out from this pacakge.
  rm -rf "${pkgdir}"/usr/bin/tensorboard

  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}

package_tensorflow-opt-native() {
  pkgdesc="Library for computation using data flow graphs for scalable machine learning (with CPU optimizations)"
  conflicts=(tensorflow)
  provides=(tensorflow)

  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native
  _package tmpopt
}

package_tensorflow-opt-native-cuda() {
  pkgdesc="Library for computation using data flow graphs for scalable machine learning (with CUDA and CPU optimizations)"
  depends+=(cuda cudnn nccl)
  conflicts=(tensorflow)
  provides=(tensorflow tensorflow-cuda)

  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native-cuda
  _package tmpoptcuda
}

package_python-tensorflow-opt-native() {
  pkgdesc="Library for computation using data flow graphs for scalable machine learning (with CPU optimizations)"
  depends+=(tensorflow-opt python-termcolor python-astor python-gast python-numpy python-protobuf absl-py python-h5py python-keras-applications python-keras-preprocessing python-tensorflow-estimator python-opt_einsum python-astunparse python-pasta)
  conflicts=(python-tensorflow)
  provides=(python-tensorflow)

  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native
  _python_package tmpopt
}

package_python-tensorflow-opt-native-cuda() {
  pkgdesc="Library for computation using data flow graphs for scalable machine learning (with CUDA and CPU optimizations)"
  depends+=(tensorflow-opt-native-cuda python-termcolor python-astor python-gast python-numpy cuda cudnn python-pycuda python-protobuf absl-py nccl python-h5py python-keras-applications python-keras-preprocessing python-tensorflow-estimator python-opt_einsum python-astunparse python-pasta)
  conflicts=(python-tensorflow)
  provides=(python-tensorflow python-tensorflow-cuda)

  cd "${srcdir}"/tensorflow-${_pkgver}-opt-native-cuda
  _python_package tmpoptcuda
}

# vim:set ts=2 sw=2 et:
