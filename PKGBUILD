# Maintainer: Butui Hu <hot123tea123@gmail.com>
# Contributor: Chih-Hsuan Yen <yan12125@archlinux.org>
# Contributor: Jean Lucas <jean@4ray.co>
# Based on python-torchvision-git; original contributors:
# Contributor: Stephen Zhang <zsrkmyn at gmail dot com>

pkgname=('python-torchvision' 'python-torchvision-cuda')
_pkgname=vision
pkgver=0.7.0
pkgrel=4
pkgdesc='Datasets, transforms, and models specific to computer vision'
arch=('x86_64')
url='https://github.com/pytorch/vision'
license=('BSD')
depends=(
  'python-numpy'
  'python-pillow'
  'python-scipy'
  'python-six'
  'python-tqdm'
)
optdepends=(
  'ffmpeg: video reader backend (the recommended one with better performance)'
  'python-av: video reader backend (the default one)'
  'python-pycocotools: support for MS-COCO dataset'
)
makedepends=(
  'cuda'
  'ffmpeg'
  'python-av'
  'python-pytorch-cuda'
  'python-setuptools'
  'qt5-base'
)
checkdepends=(
  'python-mock'
  'python-pytest'
  'python-scipy'
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/pytorch/vision/archive/v${pkgver}.tar.gz")
sha512sums=('f22c8fd67f4efafa4a934ed5014e1ad661d0d0a800d4c8ae0e6b85f4860a5dc131c513428028949c9130486ba24ecf8a9f6b9881efc68a0c2158110924d05e81')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

prepare() {
  cp -a "${srcdir}/${_pkgname}-${pkgver}" "${srcdir}/${_pkgname}-cuda-${pkgver}"
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
  
  cd "${srcdir}/${_pkgname}-cuda-${pkgver}"
  FORCE_CUDA=1 \
  TORCH_CUDA_ARCH_LIST="5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX;8.0" \
  python setup.py build
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  PYTHONPATH="${PWD}/build/lib.linux-${CARCH}-$(get_pyver)" pytest -v
  
  cd "${srcdir}/${_pkgname}-cuda-${pkgver}"
  PYTHONPATH="${PWD}/build/lib.linux-${CARCH}-$(get_pyver)" pytest -v
}

package_python-torchvision() {
  depends+=(python-pytorch)

  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_python-torchvision-cuda() {
  pkgdesc='Datasets, transforms, and models specific to computer vision (with GPU support)'
  depends+=(python-pytorch-cuda)
  provides+=(python-torchvision=${pkgver})
  conflicts+=(python-torchvision=${pkgver})
  
  cd "${srcdir}/${_pkgname}-cuda-${pkgver}"
  FORCE_CUDA=1 \
  TORCH_CUDA_ARCH_LIST="5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX;8.0" \
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
