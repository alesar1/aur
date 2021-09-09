# Maintainer: Élie Bouttier <elie+aur@bouttier.eu>
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>

pkgname='python-rq'
pkgver=1.10.0
_ver="${pkgver%.*}"
pkgrel=1
pkgdesc="Simple job queues for Python"
arch=('any')
license=('BSD')
url="https://github.com/rq/rq"
makedepends=('python')
depends=('python' 'python-click' 'python-redis')
source=("$pkgname-$pkgver.tar.gz::${url}/archive/refs/tags/v${_ver}.tar.gz")
sha256sums=('cc86804d245ac2978391fb0a7030b0b107d6a5acc1eb5ceb8224149123492f58')

package() {
    cd "${srcdir}/rq-${_ver}"

    python setup.py install --root="${pkgdir}" -O1
    mv "${pkgdir}/usr/bin/rq"{,3}
    mv "${pkgdir}/usr/bin/rqinfo"{,3}
    mv "${pkgdir}/usr/bin/rqworker"{,3}
    ln -s "/usr/bin/rq3" "${pkgdir}/usr/bin/rq"
    ln -s "/usr/bin/rqinfo3" "${pkgdir}/usr/bin/rqinfo"
    ln -s "/usr/bin/rqworker3" "${pkgdir}/usr/bin/rqworker"
    install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
