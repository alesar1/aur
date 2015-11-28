# Maintainer: wenLiangcan <boxeed at gmail dot com>

pkgname=douban.fm
pkgver=0.4.11
pkgrel=1
pkgdesc="a tiny and smart cli player of douban.fm based on Python"
url="https://github.com/taizilongxu/douban.fm"
depends=('python2' 'python2-termcolor' 'python2-requests' 'python2-pillow' 'mplayer' 'python2-setuptools')
makedepends=()
optdepends=('libnotify: for desktop notification')
license=('MIT')
arch=('any')
source=("https://pypi.python.org/packages/source/d/douban.fm/douban.fm-${pkgver}.tar.gz")
md5sums=('1dd7b1235a88ad8c3918c7399c689f59')

build() {
    cd "${srcdir}/douban.fm-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/douban.fm-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
    # mv ${pkgdir}/usr/bin/{douban.fm,doubanfm}
}
