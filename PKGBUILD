# Maintainer: Klemens Schölhorn <klemens@schoelhorn.eu>
# Contributors: Arthur Țițeică <arthur dot titeica at gmail>
# Contributors: Gordian Edenhofer <gordian.edenhofer[at]yahoo[dot]de>

pkgname=simp_le-git
_pkgname=simp_le
pkgver=0.15.0.r0.gec60f7d
pkgrel=1
epoch=1
pkgdesc="Simple Let's Encrypt client."
arch=('any')
license=('GPL')
url="https://github.com/zenhack/simp_le"
depends=('ca-certificates'
         'python-setuptools'
         'python-pip'
         'python-wheel'
         'python-cryptography'
         'python-mock'
         'python-pyopenssl'
         'python-acme')
makedepends=('git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}"::"git+https://github.com/zenhack/simp_le.git"
        'remove-deps-version-bounds.patch')
sha256sums=('SKIP'
            'd3428326027fddfe58978e007234abd34b00a24e963859a79d0af02761a2bcd9')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${_pkgname}"

    patch -Np1 -i "${srcdir}/remove-deps-version-bounds.patch"
}

package() {
    cd "${srcdir}/${_pkgname}"

    python setup.py install --root="$pkgdir/" --optimize=1
}
