# Maintainer: LLL2yu <lll2yu@protonmail.com>
 
pkgname="authenticator"
pkgver=3.32.1
pkgrel=1
pkgdesc="2FA code generator for GNOME"
arch=('any')
url="https://gitlab.gnome.org/World/Authenticator"
license=("GPL3")
depends=('pyzbar' 'python-pyotp' 'python-pillow' 'appstream-glib' 'python-gnupg' 'python-beautifulsoup4')
makedepends=('meson' 'ninja' 'gobject-introspection' 'git')
source=("$pkgname::git+https://gitlab.gnome.org/World/Authenticator.git?unsigned#tag=${pkgver}"
        'git+https://gitlab.gnome.org/GNOME/libgd.git')
sha256sums=('SKIP' 'SKIP')

prepare() {
    cd $pkgname
    git submodule init
    git config --local submodule.subprojects/libgd.url "$srcdir/libgd"
    git submodule update
}

build() {
    arch-meson $pkgname build
    ninja -C build
}

package() {
    DESTDIR="${pkgdir}" ninja -C build install
}
