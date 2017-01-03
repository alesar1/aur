# Maintainer: Yen Chi Hsuan <yan12125 at gmail dot com>
# Contributor: wenLiangcan <boxeed at gmail dot com>

pkgname=bypy-git
_pkgname=bypy
pkgver=1.3.0.r0.g35b730a
epoch=1
pkgrel=1
pkgdesc="Python client for Baidu Yun (Personal Cloud Storage) 百度云/百度网盘 Python 客户端"
arch=("any")
url="https://github.com/houtianze/bypy"
license=('GPL')
makedepends=('git' 'python-setuptools')
depends=('python-requests')
provides=('bypy')
source=("git+https://github.com/houtianze/bypy")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    ( set -o pipefail
      git describe --long --tag 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//' ||
      printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

check() {
    cd "${srcdir}/${_pkgname}"
    PYTHONIOENCODING="utf-8" python setup.py test
}

package() {
    cd "${srcdir}/${_pkgname}"
    PYTHONIOENCODING="utf-8" python setup.py install --root="${pkgdir}" --optimize=1
}
