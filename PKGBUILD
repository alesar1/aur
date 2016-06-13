# Maintainer: Yuexuan Gu <lastavengers@outlook.com>

pkgname=srain-git
pkgver=0.214.8a54b29
pkgrel=1
pkgdesc="it does not look like a irc client"
arch=('i686' 'x86_64')
license=('GPL')
url="https://github.com/LastAvenger/srain"
depends=('gtk3' 'glib2' 'python')
makedepends=('git' 'make' 'gcc' 'pkg-config' 'gettext' 'curl')
conflicts=('srain')
provides=('srain')
source=("git+https://github.com/LastAvenger/srain.git")
sha256sums=('SKIP')

pkgver() {
    cd ${pkgname%-git}
    echo "0.$(git rev-list --count HEAD).$(git describe --always)"
}

build() {
    cd ${pkgname%-git}

    mkdir build || true
    ./configure --prefix=/usr --disable-debug
    make
}

package() {
    cd ${pkgname%-git}

    make DESTDIR=$pkgdir install
}
