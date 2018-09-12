# Maintainer: Shengyu Zhang <la@archlinuxcn.org>

pkgname=srain-git
pkgver=1.0.0rc1.1067.0542dd1
_pkgver=1.0.0rc1
pkgrel=1
pkgdesc="Modern IRC client, git version"
arch=('i686' 'x86_64')
license=('GPL')
url="https://srain.im"
makedepends=('git' 'make' 'gcc' 'pkg-config' 'gettext' 'python-sphinx')
depends=('glib2' 'gtk3' 'libconfig' 'libsoup')
optdepends=(
    'glib-networking: TLS connection support'
    )
conflicts=('srain')
provides=('srain')
source=("git+https://github.com/SilverRainZ/srain.git#branch=master")
sha256sums=('SKIP')

_prefix='/usr'

pkgver() {
    cd ${pkgname%-git}
    echo "${_pkgver}.$(git rev-list --count HEAD).$(git describe --always)"
}

build() {
    cd ${pkgname%-git}

    ./configure                     \
        --prefix=${_prefix}         \
        --datadir=${_prefix}/share  \
        --sysconfdir=/etc           \
        --disable-debug
    make
    make doc
}

package() {
    cd ${pkgname%-git}

    make DESTDIR=${pkgdir} install
    make DESTDIR=${pkgdir} install-doc
}
