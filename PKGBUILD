# Maintainer: Henry-Joseph Audéoud <h.audeoud@gmail.com>
pkgname=walt-virtual
pkgver=4
pkgrel=1
pkgdesc="WalT components related to virtualization"
arch=(any)
url="https://walt-project.liglab.fr"
license=('BSD')
depends=(walt-common)
source=("https://files.pythonhosted.org/packages/source/w/${pkgname}/${pkgname}-${pkgver}.tar.gz"
        "LICENSE")
sha256sums=('5b7dc1642865d3244f3792f5bb2abe0c1881c97662612f3d12f644fe93da2f5d'
            '49e4de7e7679bb97dd8bf5363c87da852ef1e00d8a1263d2fe4855d7b47fd401')

prepare() {
    cd "$pkgname-$pkgver"
    # Force python2 in sheebang
    find . -name \*.py | xargs sed -i '1s|^#!/usr/bin/env python$|\02|'
}

package() {
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    cd "$pkgname-$pkgver"
    python2 setup.py install --root "$pkgdir"
    # These files are already provided by walt-common
    rm "${pkgdir}/usr/lib/python2.7/site-packages/walt/__init__.py"*
}
