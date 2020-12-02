# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-visdom
_name=${pkgname#python-}
pkgver=0.1.8.9
pkgrel=3
pkgdesc='A flexible tool for creating, organizing, and sharing visualizations of live, rich data. Supports Torch and Numpy.'
arch=(any)
url=https://github.com/facebookresearch/visdom
license=(CC-BY-NC-4.0)
depends=(
  python-jsonpatch
  python-numpy 
  python-pytorch 
  python-pyzmq 
  python-six 
  python-scipy 
  python-torchfile
  python-tornado 
  python-tqdm
  python-websocket-client
)
makedepends=(python-setuptools)
source=(
  "${pkgname}-${pkgver}.tar.gz"::"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
  "LICENSE"::"https://github.com/facebookresearch/visdom/raw/master/LICENSE"
)
sha512sums=('3e49821d559dbb35db2bb3253392582b42073287e96cffbb729f57f396af2ffb8440ee9432942b590afdcdf7f94e26bf92fca7231405c768cefc64241bdeea67'
            '31cc38066678c030e8f6378dcae59add64566a977f92983c3a4c929c9b76424291915ea4283e1367ece50b9537f8d51970aa8fd5ce063037aa3a7c45f0677d25')

build() {
  cd "${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "${srcdir}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
