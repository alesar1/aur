# Maintainer: Ľubomír 'The_K' Kučera <lubomir.kucera.jr at gmail.com>

pkgname=beautysh
pkgver=4.1
pkgrel=1
pkgdesc="A Bash beautifier for the masses"
arch=('any')
url='https://github.com/bemeurer/beautysh'
license=('MIT')
depends=('python-setuptools')
source=("https://github.com/bemeurer/beautysh/archive/${pkgver}.tar.gz")
sha256sums=('0418cb3500b147fe23d43651cdd1ba1765583a0150012b90822810cbdac147e0')

package() {
    cd "${pkgname}-${pkgver}"

    python setup.py install --root="${pkgdir}" --optimize=1
}
