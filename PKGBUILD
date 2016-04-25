# Maintainer: Adria Arrufat (archdria) <adria.arrufat+AUR@protonmail.ch>
# Contributor: Vladislav Odobesku positivcheg94@gmail.com

pkgname=python-tensorflow-git
pkgver=0.8.0rc0.r281.g55068f3
pkgrel=1

pkgdesc="Open source software library for numerical computation using data flow graphs."
url="https://tensorflow.org/"
license=('Apache2')

arch=('i686' 'x86_64')

provides=('python-tensorflow')
conflicts=('python-tensorflow')
depends=('python-numpy' 'swig' 'python-wheel' 'python-protobuf3')
makedepends=('git' 'python-pip' 'bazel' 'rsync')
optdepends=('cuda: GPU support'
            'cudnn: GPU support')
source=("git+https://github.com/tensorflow/tensorflow"
        "git+https://github.com/google/protobuf"
        "fix_cuda_compilation.patch")
md5sums=('SKIP'
         'SKIP'
         '5b4f7478069709602cc978a322f0edf1')

pkgver() {
  cd "${srcdir}/tensorflow"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

prepare() {
  cd "$srcdir/tensorflow"
  git submodule init
  git config submodule.google/protobuf.url ${srcdir}/protobuf
  git submodule update
  mkdir -p "${srcdir}/tmp"

  # fix build on Arch Linux
  # see https://github.com/tensorflow/tensorflow/issues/1346
  patch -Np1 -i ../fix_cuda_compilation.patch

  # setup environment variables
  export GCC_HOST_COMPILER_PATH=/usr/bin/gcc
  if (pacman -Q cuda &>/dev/null && pacman -Q cudnn &>/dev/null); then
    msg2 "CUDA support enabled"
    _build_opts="--config=cuda"
    export TF_NEED_CUDA=1
    export TF_UNOFFICIAL_SETTING=1
    export CUDA_TOOLKIT_PATH=/opt/cuda
    export CUDNN_INSTALL_PATH=/opt/cuda
    # Adapt to your needs:
    # export TF_CUDA_COMPUTE_CAPABILITIES="3.0,3.5"
  else
    msg2 "CUDA support disabled"
    export TF_NEED_CUDA=0
  fi

  # make sure the proxy variables are in all caps, otherwise bazel ignores them
  export HTTP_PROXY=`echo $http_proxy | sed -e 's/\/$//'`
  export HTTPS_PROXY=`echo $https_proxy | sed -e 's/\/$//'`
}

build() {
  echo "Make sure your .bazelrc points to the correct workspace, e.g. %workspace%:/opt/bazel/base_workspace."

  cd "${srcdir}/tensorflow"

  PYTHON_BIN_PATH=/usr/bin/python ./configure
  bazel build -c opt ${_build_opts} //tensorflow/tools/pip_package:build_pip_package

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
