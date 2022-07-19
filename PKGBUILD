# Contributor: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: wenLiangcan <boxeed at gmail dot com>

pkgname=bypy-git
_pkgname=bypy
pkgver=1.7.12.r1.gd7ffb48
epoch=1
pkgrel=1
pkgdesc="Python client for Baidu Cloud Storage (百度网盘)"
arch=("any")
url="https://github.com/houtianze/bypy"
license=('GPL')
makedepends=('git' 'python-setuptools')
depends=('python-requests' 'python-multiprocess' 'python-requests-toolbelt')
optdepends=(
    'tk: for bypygui'
)
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

#check() {
#    cd "${srcdir}/${_pkgname}"
#    PYTHONIOENCODING="utf-8" python -m bypy.test
#}

package() {
    cd "${srcdir}/${_pkgname}"
    PYTHONIOENCODING="utf-8" python setup.py install --root="${pkgdir}" --optimize=1

    # Ensure auth.json
    # https://github.com/houtianze/bypy/issues/606
    [ -f "${pkgdir}/usr/lib/python3.10/site-packages/bypy/res/auth.json" ] || install -Dm644 bypy/res/auth.json "${pkgdir}/usr/lib/python3.10/site-packages/bypy/res/auth.json"
}
