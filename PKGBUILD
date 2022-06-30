pkgname=arkenfox-user.js
pkgver=101.0
pkgrel=2
pkgdesc="Firefox privacy, security and anti-tracking: a comprehensive user.js template for configuration and hardening."
arch=('any')
_repo='user.js'
url="https://github.com/arkenfox/${_repo}"
license=('MIT')
options=('!strip')

_snapshot="${_repo}-${pkgver}"

source=(
    "${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz"
    "updater.patch"
    "cleaner.patch"
)

sha256sums=(
    '618c67bdd8c74f67195e99fb3ea912dcedd3445b63b5c05a5685e3b8f1c24e58'
    '61d9058c971e732dfe7626851b4b2380622b931578fe009b7c5f143fb3135362'
    '4d54a6c1787be81201e735cdd905181dc57d7906cb9b21419b236f3b8b6db983'
)

prepare() {
    cd "${srcdir}/${_snapshot}"
    patch -i "${srcdir}/${source[1]}"
    patch -i "${srcdir}/${source[2]}"
}

package() {
    local lib="${pkgdir}/usr/lib/${pkgname}"
    local bin="${pkgdir}/usr/bin"
    install -dm755 "${bin}"
    ln -s "${lib#${pkgdir}}/updater.sh" "${bin}/arkenfox-updater"
    ln -s "${lib#${pkgdir}}/prefsCleaner.sh" "${bin}/arkenfox-cleaner"

    cd "${srcdir}/${_snapshot}"
    install -Dm755 -t "${lib}" "updater.sh" "prefsCleaner.sh"
    install -Dm644 -t "${lib}" "user.js"
    install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "LICENSE.txt"
}
