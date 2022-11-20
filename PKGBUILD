# Maintainer: Peter Kaplan <peter@pkap.de>

_pkgname=waylock
pkgname=${_pkgname}-git
pkgver=0.4.0.r9.g7262210
pkgrel=1
arch=('x86_64')
url="https://github.com/ifreund/waylock"
pkgdesc="A simple screenlocker for Wayland compositors"
license=('ISC')
depends=('wayland' 'wayland-protocols' 'libxkbcommon' 'pam' 'pkgconf')
makedepends=('git' 'zig' 'scdoc')
provides=('waylock')
conflicts=('waylock')
source=(
    "git+$url"
    "git+https://github.com/ifreund/zig-wayland.git"
    "git+https://github.com/ifreund/zig-xkbcommon.git"
)
sha256sums=(
    'SKIP'
    'SKIP'
    'SKIP'
)

pkgver() {
    cd "$_pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "$_pkgname"
    git submodule init
    for dep in wayland xkbcommon; do
        git config "submodule.externals/vendor/zig-${dep}.url" "$srcdir/zig-${dep}"
    done
    git -c protocol.file.allow=always submodule update
}

package() {
    cd "$_pkgname"
    DESTDIR="$pkgdir" zig build -Drelease-safe --prefix "/usr" install
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$_pkgname"
    install -Dm644 README.md -t "$pkgdir/usr/share/doc/$_pkgname"
}
