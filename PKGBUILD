# Maintainer: Dct Mei <dctxmei@yandex.com>

pkgname=clash-dashboard-git
_pkgname=clash-dashboard
pkgver=0.3.0.r102.ga70ad6b
pkgrel=3
pkgdesc="Web Dashboard for Clash"
arch=('any')
url="https://github.com/Dreamacro/clash-dashboard"
license=('MIT')
depends=('clash')
makedepends=('git' 'yarn')
provides=("clash-dashboard")
conflicts=('clash-dashboard')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}"/"${_pkgname}"/
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}"/"${_pkgname}"/
    yarn cache clean
    yarn install
    yarn build
}

package() {
    cd "${srcdir}"/"${_pkgname}"/
    install -Dm 644 LICENSE -t "${pkgdir}"/usr/share/licenses/"${pkgname}"/
    cd dist/
    find . -type d -exec install -vd "${pkgdir}"/usr/share/"${pkgname}"/{} \;
    find . -type f -exec install -vm 644 {} "${pkgdir}"/usr/share/"${pkgname}"/{} \;
}
