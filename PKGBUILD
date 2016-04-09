# Maintainer: Yen Chi Hsuan <yan12125 at gmail dot com>
# Contributor: wenLiangcan <boxeed at gmail dot com>

pkgname=bypy-git
_pkgname=bypy
_github_addr=houtianze/bypy
pkgver=20160304
pkgrel=1
pkgdesc="Python client for Baidu Yun (Personal Cloud Storage) 百度云/百度网盘 Python 客户端"
arch=("any")
url="https://github.com/houtianze/bypy"
license=('GPL')
makedepends=('git' 'python-setuptools')
depends=('python-requests' 'python-pypandoc')
provides=('bypy')
source=("${_pkgname}"::"git+https://github.com/$_github_addr")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git log -1 --format='%cd' --date=short | tr -d -- '-'
}

package() {
    cd "${srcdir}/${_pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1
}
