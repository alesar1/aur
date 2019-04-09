# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-gluoncv-torch-git
_pkgver=0.0.3
pkgver=0.0.3.r4.7759620
pkgrel=1
pkgdesc="Research Framework for easy and efficient training of GANs based on PyTorch"
arch=(any)
url="https://github.com/zhanghang1989/gluoncv-torch"
license=('MIT')
depends=(python-numpy python-pillow python-requests python-torchvision python-tqdm)
makedepends=(git python-setuptools)
provides=(python-gluoncv-torch=${pkgver})
conflicts=(python-gluoncv-torch)
source=("${pkgname}::git+https://github.com/zhanghang1989/gluoncv-torch.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  ver=$(printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")
  echo "${_pkgver}.${ver}"
}

build() {
	cd "${srcdir}/${pkgname}"
	python setup.py build
}

package() {
	cd "${srcdir}/${pkgname}"
	python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
 	install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
