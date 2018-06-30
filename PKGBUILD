# Maintainer: wangjiezhe <wangjiezhe AT yandex DOT com>
# Maintainer: Shengyu Zhang <la@archlinuxcn.org>

_pkgname=lice
pkgname=lice-git
pkgver=0.4.55.g71635c2
pkgrel=1
pkgdesc='Generate license files for your projects'
arch=('any')
url='https://github.com/licenses/lice'
license=('custom:BSD3')
depends=('python')
makedepends=('git' 'python-setuptools')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe | sed 's/-/./g'
}

check() {
  cd "${srcdir}/${_pkgname}"
  python setup.py test
}

package() {
  cd "${srcdir}/${_pkgname}"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
