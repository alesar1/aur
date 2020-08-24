# Maintainer: David Lin <davidlindev@qq.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# part of this script is taken from cudnn package at https://www.archlinux.org/packages/community/x86_64/cudnn/

pkgname=paddlepaddle-gpu
pkgver=1.9.6
pkgrel=2
# epoch=
pkgdesc="An opensourced deeplearning framework derived from industral practice."
arch=('x86_64')
url="https://github.com/paddlepaddle/paddle"
license=('custom')
depends=('cuda-10.1'
        'python37')
cudnn_version=8.0.2.39-1
cuda_version=10.1
_majorver=8

source=(
  "https://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1804/x86_64/libcudnn${_majorver}_$cudnn_version+cuda${cuda_version}_amd64.deb"
  "https://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1804/x86_64/libcudnn${_majorver}-dev_$cudnn_version+cuda${cuda_version}_amd64.deb"
)

md5sums=(
"fe72d96b7c1fbd05eb0906f3bc95f325"
"8e8d8955f5454649705b32eafdf6e953"
)

package() {
  export TMPDIR=~/Desktop/tmp
  python3.7 --version

  mkdir -p "${pkgdir}"/usr/{lib,include}

  mkdir libcudnn${_majorver}-dev
  cd libcudnn${_majorver}-dev
  ar xv "${srcdir}"/libcudnn${_majorver}-dev_${cudnn_version}+cuda${cuda_version}_amd64.deb
  tar xf data.tar.xz
  cp -a usr/include/x86_64-linux-gnu/* "${pkgdir}"/usr/include/
  cp -a usr/lib/x86_64-linux-gnu/* "${pkgdir}"/usr/lib/

  mkdir libcudnn${_majorver}
  cd libcudnn${_majorver}
  ar xv "${srcdir}"/libcudnn${_majorver}_${cudnn_version}+cuda${cuda_version}_amd64.deb
  tar xf data.tar.xz
  cp -a usr/lib/x86_64-linux-gnu/* "${pkgdir}"/usr/lib/

  # Get rid of some Ubuntu-isms but at the same time still allow for them to
  # work because nobody is ever quite sure what the right names are.
  ln -s cudnn_v${_majorver}.h "${pkgdir}"/usr/include/cudnn.h
  ln -s cudnn_adv_infer_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_adv_infer.h
  ln -s cudnn_adv_train_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_adv_train.h
  ln -s cudnn_backend_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_backend.h
  ln -s cudnn_cnn_infer_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_cnn_infer.h
  ln -s cudnn_cnn_train_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_cnn_train.h
  ln -s cudnn_ops_infer_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_ops_infer.h
  ln -s cudnn_ops_train_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_ops_train.h
  ln -s cudnn_version_v${_majorver}.h "${pkgdir}"/usr/include/cudnn_version.h
  ln -s libcudnn.so.${_majorver} "${pkgdir}"/usr/lib/libcudnn.so
  ln -s libcudnn_static_v${_majorver}.a "${pkgdir}"/usr/lib/libcudnn_static.a

  pip3.7 install --upgrade pip
  python3.7 -m pip install --no-cache-dir paddlepaddle-gpu==1.8.3.post107 -i https://mirror.baidu.com/pypi/simple
  echo "export LD_LIBRARY_PATH=/opt/cuda/lib64" >> ~/.bashrc


  echo "Installation complete, install additional packages with pip3.7."
  echo "Check installation with"
  echo "python3.7 -c 'import paddle.fluid; paddle.fluid.install_check.run_check()'"

}
