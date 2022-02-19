pkgname=arkenfox-user.js-git
pkgver=97.0.r3.gba05210
pkgrel=1
pkgdesc="Firefox privacy, security and anti-tracking: a comprehensive user.js template for configuration and hardening."
arch=('any')
_repo='user.js'
url="https://github.com/arkenfox/${_repo}"
license=('MIT')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
options=('!strip')

source=(
    "${_repo}::git+${url}"
    "updater.patch"
)

sha256sums=(
    'SKIP'
    '4456b746d4aa45254ddad0122c9657b760d0bf0b32551fe781f995532c6d8377'
)

pkgver() {
    cd "${srcdir}/${_repo}"
    git describe --long --tags --abbrev=7 | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${_repo}"
    patch -p0 -N -i "${srcdir}/${source[1]}"
}

package() {
    cd "${srcdir}"

    local lib="/usr/lib/${pkgname}"
    local bin="arkenfox-updater"
    echo "#!/bin/sh" >"${bin}"
    echo "cd \"${lib}\"" >>"${bin}"
    echo ". ./updater.sh" >>"${bin}"
    install -Dm755 -t "${pkgdir}/usr/bin" "${bin}"

    cd "${_repo}"

    install -Dm755 -t "${pkgdir}${lib}" "updater.sh"
    install -Dm644 -t "${pkgdir}${lib}" "user.js"
    install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "LICENSE.txt"
}
