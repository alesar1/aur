# Maintainer: Helder Bertoldo <helder.bertoldo@gmail.com>
# Contributor: 

_gitname=onboarding
_author=elementary
pkgname=pantheon-${_gitname}
pkgver=1.2.0
pkgrel=1
pkgdesc="Onboarding app for new users in Pantheon Shell"
arch=('any')
url="https://github.com/${_author}/${_gitname}"
license=('GPL3')
groups=('pantheon-stable')
depends=('gtk3' 'granite' 'libgee' 'libhandy' 'pantheon-agent-geoclue2')
makedepends=('meson' 'vala')
provides=("${pkgname}")
conflicts=("${pkgname}-git")
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha256sums=("b294802fa35efd968e347ca1acff3b6bf79d668d7be5cf1a93462c9335ebae52")

build() {
    cd "${_gitname}-${pkgver}/"
    meson . _build --prefix=/usr
    ninja -C _build
}

package() {
    cd "${_gitname}-${pkgver}/"
    DESTDIR="${pkgdir}" ninja -C _build install
}

