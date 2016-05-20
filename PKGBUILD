# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: John D Jones III jnbek1972 __AT__ $mailservice_by_google __DOT__ com

_npmname=tldr
_pkgname=nodejs-tldr
pkgname=nodejs-tldr-git
pkgver=r1695.084986a
pkgrel=1
pkgdesc="Simplified and community-driven man pages (git version)"
arch=('any')
url="https://github.com/tldr-pages/tldr"
license=('MIT')
makedepends=('git')
depends=('nodejs' 'npm')
conflicts=('nodejs-tldr')
install='INSTALL'
source=("${_npmname}::git+${url}.git")
sha256sums=('SKIP')

pkgver(){
    cd ${_npmname}
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    local _npmdir="${pkgdir}/usr/lib/node_modules/"
    mkdir -p ${_npmdir}
    cd ${_npmdir}
    npm install -g --prefix "${pkgdir}/usr" ${_npmname}
}
