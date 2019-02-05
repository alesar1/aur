# Contributor: Andrew Querol <andrew@querol.me>
# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

_name=chrome-gnome-shell
pkgname=$_name-git
pkgver=10.1.r2.gf6d3cc3
pkgrel=1
pkgdesc="Native connector for integration with extensions.gnome.org"
arch=('any')
url="https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome"
license=('GPL')
depends=('gnome-shell' 'python-requests' 'python-gobject')
makedepends=('git' 'cmake' 'jq')
provides=("$_name")
replaces=('gs-chrome-connector') # Old name
conflicts=('gs-chrome-connector' "$_name")
source=("git+https://gitlab.gnome.org/GNOME/$_name")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_name"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

prepare() {
    cd "$srcdir/$_name"
    mkdir -p 'build'
}

build() {
    cd "$srcdir/$_name/build"
    cmake                                \
        -DCMAKE_INSTALL_PREFIX=/usr      \
        -DCMAKE_INSTALL_LIBDIR=lib       \
        -DBUILD_EXTENSION=OFF ../        \
        -DPYTHON_EXECUTABLE=/usr/bin/python
}

package() {
    cd "$srcdir/$_name/build"
    make DESTDIR="$pkgdir" install
}
