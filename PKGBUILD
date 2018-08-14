# Maintainer: Klemens Schölhorn <klemens@schoelhorn.eu>
# Contributors: Arthur Țițeică <arthur dot titeica at gmail>
# Contributors: Gordian Edenhofer <gordian.edenhofer[at]yahoo[dot]de>

pkgname=simp_le-git
_pkgname=simp_le
pkgver=0.10.0.r3.gd37761b
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
            '475836e8766559d61d34be9a49760eeae6bb42665460ee07b7b3ce509512f4ac')

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

    install -d "${pkgdir}/usr/share/${_pkgname}"
    cp -dr --no-preserve=ownership examples/ "${pkgdir}/usr/share/${_pkgname}"
}
