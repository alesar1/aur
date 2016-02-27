# Maintainer: Stefan Tatschner <rumpelsepp@sevenbyte.org>

pkgname='cpy'
pkgver=0.4.3
pkgrel=1
pkgdesc="A replacement for [c]at with automatic syntax highlighting"
arch=('any')
url="https://github.com/rumpelsepp/c.py"
license=('MIT')
depends=('python' 'python-pygments')
makedepends=('git' 'asciidoc')
source=("$pkgname::git+https://github.com/rumpelsepp/c.py.git#commit=e059149f49cdd48b05f865e949d4021d229addb8")
sha256sums=('SKIP')

build() {
    cd "${srcdir}/${pkgname}/man"
    make man
}

package() {
    cd "${srcdir}/${pkgname}"
    install -d "${pkgdir}/usr/bin"
    install -d "${pkgdir}/usr/share/man/man1"
    install -m 644 "man/c.1" "${pkgdir}/usr/share/man/man1/c.1"
    install -m 644 "man/fuc.1" "${pkgdir}/usr/share/man/man1/fuc.1"
    install -m 644 "man/c.py.1" "${pkgdir}/usr/share/man/man1/c.py.1"
    install -m 755 c "${pkgdir}/usr/bin/c"
    install -m 755 fuc "${pkgdir}/usr/bin/fuc"
    install -m 755 c.py "${pkgdir}/usr/bin/c.py"
}
