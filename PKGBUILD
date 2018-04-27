# Maintainer: FichteFoll <fichtefoll2@googlemail.com>

_pkgbase=discordrp-mpris
# _name=${_pkgbase#python-}
pkgname="${_pkgbase}-git"
pkgver=0.1.0.r0.g775cea3
pkgrel=1
pkgdesc="Discord Rich Presence based on mpris2 media players"
arch=(any)
url="https://github.com/FichteFoll/discordrp-mpris"
license=('MIT')
depends=('python' 'python-setuptools' 'python-dbussy')
makedepends=('git')
provides=("${_pkgbase}")
conflicts=("${_pkgbase}")
source=("git+https://github.com/FichteFoll/discordrp-mpris.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgbase}"
    (
        set -o pipefail
        git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

package() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py install --root="$pkgdir/" --optimize=1

    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 discordrp-mpris.service "${pkgdir}/usr/lib/systemd/user/discordrp-mpris.service"
}
