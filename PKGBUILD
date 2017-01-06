# Maintainer: Adria Arrufat (archdria) <adria.arrufat+AUR@protonmail.ch>
# Contributor: Vladislav Odobesku <positivcheg94@gmail.com>
# Contributor: Julien Deswaef (juego) <juego@requiem4tv.com>

pkgname=python-tensorflow-git
pkgver=0.12.1+1600+ge4dde23d5
pkgrel=1

pkgdesc="Open source software library for numerical computation using data flow graphs."
url="https://tensorflow.org/"
license=('Apache2')

arch=('i686' 'x86_64')

provides=('python-tensorflow')
conflicts=('python-tensorflow')
depends=('python-numpy' 'swig' 'python-wheel' 'python-protobuf')
makedepends=('git' 'python-pip' 'bazel' 'rsync')
optdepends=('cuda: GPU support'
            'cudnn: GPU support')
source=("git+https://github.com/tensorflow/tensorflow"
        "march_native.diff"
        "https://bitbucket.org/eigen/eigen/raw/9ba936354ee8b73fb1966dcb2d3506387bb357f1/unsupported/Eigen/CXX11/src/Tensor/TensorContractionThreadPool.h")

md5sums=('SKIP'
         '696beeb14be1d669066ce51819eb6044'
         '1bf688d25c599906f0ffddde97aca1ed')

pkgver() {
  cd "${srcdir}/tensorflow"
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd ${srcdir}/tensorflow

  # clean and create the directory to store the wheel file
  if [ -d ${srcdir}/tmp ]; then
    rm -rf ${srcdir}/tmp
  else
    mkdir -p ${srcdir}/tmp
  fi

  # setup environment variables
  export PYTHON_BIN_PATH=/usr/bin/python
  export USE_DEFAULT_PYTHON_LIB_PATH=1
  if (pacman -Q cuda &>/dev/null && pacman -Q cudnn &>/dev/null); then
    msg2 "CUDA support enabled"
    _build_opts="--config=cuda"
    makedepends+=gcc-5
    export GCC_HOST_COMPILER_PATH=/usr/bin/gcc-5
    export TF_NEED_CUDA=1
    export TF_UNOFFICIAL_SETTING=1
    export CUDA_TOOLKIT_PATH=/opt/cuda
    export CUDNN_INSTALL_PATH=/opt/cuda
    # adapt to your needs
    export TF_CUDA_VERSION=$($CUDA_TOOLKIT_PATH/bin/nvcc --version | sed -n 's/^.*release \(.*\),.*/\1/p')
    export TF_CUDNN_VERSION=$(sed -n 's/^#define CUDNN_MAJOR\s*\(.*\).*/\1/p' $CUDNN_INSTALL_PATH/include/cudnn.h)
    export TF_CUDA_COMPUTE_CAPABILITIES=3.5,5.2
  else
    msg2 "CUDA support disabled"
    export TF_NEED_CUDA=0
  fi

  # disable Google Cloud Platform support
  export TF_NEED_GCP=0
  # disable Hadoop File System support
  export TF_NEED_HDFS=0
  # disable OpenCL support
  export TF_NEED_OPENCL=0

  # make sure the proxy variables are in all caps, otherwise bazel ignores them
  export HTTP_PROXY=`echo $http_proxy | sed -e 's/\/$//'`
  export HTTPS_PROXY=`echo $https_proxy | sed -e 's/\/$//'`

  # hack to enable build with -march=native from: https://github.com/tensorflow/tensorflow/issues/6558
  mkdir -p third_party/eigen3/unsupported/Eigen/CXX11/src/Tensor
  cp ../TensorContractionThreadPool.h third_party/eigen3/unsupported/Eigen/CXX11/src/Tensor/TensorContractionThreadPool.h
  patch -Np1 -i ../march_native.diff
}

build() {
  echo "Make sure your .bazelrc points to the correct workspace, e.g. %workspace%:/opt/bazel/base_workspace."

  cd "${srcdir}/tensorflow"

  ./configure
  bazel build -c opt ${_build_opts} --copt=-march=native //tensorflow/tools/pip_package:build_pip_package

  msg2 "Building pip package..."
  bazel-bin/tensorflow/tools/pip_package/build_pip_package ${srcdir}/tmp
}

package() {
  cd "${srcdir}/tensorflow"

  TMP_PKG=`find $srcdir/tmp -name "tensor*.whl"`
  pip install --ignore-installed --upgrade --root $pkgdir/ $TMP_PKG --no-dependencies
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  # remove cache files from the installation directory
  find ${pkgdir} -name __pycache__ -exec rm -r {} +
}

# vim:set ts=2 sw=2 et:
